<script lang="ts">
	import Label from '$lib/components/ui/label/label.svelte';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { getInitials } from '$lib/utils';
	import Button from '$lib/components/ui/button/button.svelte';
	import { firekitAuth, firekitUploadTask, firekitUser } from 'svelte-firekit';
	import { toast } from 'svelte-sonner';
	import { userProfile } from '$lib/stores/user.svelte';

	const MAX_FILE_SIZE = 1024 * 1024; // 1MB in bytes
	const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

	// State management
	let user = $derived(userProfile.data);
	let uploadState = $state({
		imageUrl: '',
		selectedImage: null as File | null,
		uploadTask: null as any,
		progress: 0,
		isUploading: false,
		error: ''
	});

	// Computed progress
	let progress = $derived(uploadState.uploadTask?.progress || 0);

	// File input reference
	let fileInput: HTMLInputElement | undefined = $state();

	// Upload effect
	$effect(() => {
		if (progress === 100 && uploadState.uploadTask?.downloadURL) {
			handleUploadComplete(uploadState.uploadTask.downloadURL);
		}
	});

	// Handle upload completion
	async function handleUploadComplete(downloadURL: string) {
		try {
			userProfile.update({
				photoURL: downloadURL
			});

			uploadState.isUploading = false;
			uploadState.error = '';
			toast.success('Profile photo updated successfully');
		} catch (error) {
			handleError('Failed to update profile photo');
		}
	}

	// Validate file
	function validateFile(file: File): boolean {
		if (!ALLOWED_TYPES.includes(file.type)) {
			handleError('Please upload a valid image file (JPEG, PNG, or WebP)');
			return false;
		}

		if (file.size > MAX_FILE_SIZE) {
			handleError('File size must be less than 1MB');
			return false;
		}

		return true;
	}

	// Handle file selection
	async function handleImageUpload(event: Event) {
		const target = event.target as HTMLInputElement;
		const file = target.files?.[0];

		if (!file) return;

		if (!validateFile(file)) {
			target.value = '';
			return;
		}

		try {
			uploadState.isUploading = true;
			uploadState.imageUrl = URL.createObjectURL(file);
			uploadState.selectedImage = file;
			uploadState.uploadTask = firekitUploadTask(`users-profile/${firekitUser.uid}/profile`, file);
		} catch (error) {
			handleError('Failed to start upload');
		}
	}

	// Handle delete
	async function handleDelete() {
		try {
			await firekitAuth.updateUserProfile({
				photoURL: ''
			});
			uploadState.imageUrl = '';
			uploadState.selectedImage = null;
			if (fileInput) fileInput.value = '';
			toast('Profile photo deleted successfully');
		} catch (error) {
			handleError('Failed to delete profile photo');
		}
	}

	// Error handler
	function handleError(message: string) {
		console.error(message);
		uploadState.error = message;
		uploadState.isUploading = false;
		toast.error(message);
		throw new Error(message);
	}
</script>

{#if user}
	<div class="grid grid-cols-4">
		<Label class="font-normal text-muted-foreground">Avatar</Label>
		<div class="flex grid-cols-3 gap-4">
			<Avatar.Root class="size-16">
				<Avatar.Image src={uploadState.imageUrl || user.photoURL} alt={user.displayName} />
				<Avatar.Fallback>{getInitials(user.displayName)}</Avatar.Fallback>
			</Avatar.Root>
			<div class="flex flex-col gap-2">
				<div class="flex gap-2">
					<Button size="sm" disabled={uploadState.isUploading} onclick={() => fileInput?.click()}>
						{uploadState.isUploading ? `Uploading ${progress}%` : 'Upload photo'}
					</Button>
					<Button
						variant="outline"
						class="text-destructive"
						size="sm"
						disabled={uploadState.isUploading || !user.photoURL}
						onclick={handleDelete}
					>
						Delete
					</Button>
				</div>
				<p class="text-xs text-muted-foreground">Pick a photo up to 1MB (JPEG, PNG, or WebP).</p>
				{#if uploadState.error}
					<p class="text-xs text-destructive">{uploadState.error}</p>
				{/if}
				<input
					bind:this={fileInput}
					type="file"
					accept="image/jpeg,image/png,image/webp"
					class="hidden"
					onchange={handleImageUpload}
				/>
			</div>
		</div>
	</div>
{/if}
