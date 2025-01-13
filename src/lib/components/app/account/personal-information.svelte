<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import Label from '$lib/components/ui/label/label.svelte';
	import { userProfile } from '$lib/stores/user.svelte';
	import { toast } from 'svelte-sonner';

	const userData = $derived(userProfile.data);

	// Create form state with initial values from userData
	let formData = $state({
		displayName: '',
		email: ''
	});
	$effect(() => {
		if ((userData && !formData.displayName) || (userData && !formData.email)) {
			formData.displayName = userData.displayName || '';
			formData.email = userData.email || '';
		}
	});
	// Keep track of original values for comparison
	let originalData = $derived({
		displayName: userData?.displayName ?? '',
		email: userData?.email ?? ''
	});

	let errors = $state({
		displayName: '',
		email: ''
	});

	function isValidEmail(email: string): boolean {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	}

	let hasChanges = $derived(
		formData.displayName !== originalData.displayName || formData.email !== originalData.email
	);

	function validateForm(): boolean {
		errors = {
			displayName: '',
			email: ''
		};

		if (!formData.displayName.trim()) {
			errors.displayName = 'Display name is required';
		} else if (formData.displayName.length < 2) {
			errors.displayName = 'Display name must be at least 2 characters';
		}

		if (!formData.email.trim()) {
			errors.email = 'Email is required';
		} else if (!isValidEmail(formData.email)) {
			errors.email = 'Please enter a valid email address';
		}

		return !errors.displayName && !errors.email;
	}

	async function saveChanges() {
		if (!validateForm()) return;

		try {
			await userProfile.update({
				displayName: formData.displayName.trim(),
				email: formData.email.trim()
			});
			toast.success('Profile updated successfully');
		} catch (error) {
			console.error('Failed to update profile:', error);
		}
	}
</script>

{#if userData}
	<div class="flex flex-col gap-4">
		<div class="grid grid-cols-4">
			<Label class="font-normal text-muted-foreground">Display Name</Label>
			<div class="col-span-3 space-y-2">
				<Input
					placeholder="Enter full name"
					bind:value={formData.displayName}
					class={errors.displayName ? 'border-red-500' : ''}
				/>
				{#if errors.displayName}
					<p class="text-xs text-red-500">{errors.displayName}</p>
				{:else}
					<p class="text-xs text-muted-foreground">Enter your full name, or a display name</p>
				{/if}
			</div>
		</div>
		<div class="grid grid-cols-4">
			<Label class="font-normal text-muted-foreground">Email</Label>
			<div class="col-span-3 space-y-2">
				<Input
					placeholder="Enter email address"
					bind:value={formData.email}
					type="email"
					class={errors.email ? 'border-red-500' : ''}
				/>
				{#if errors.email}
					<p class="text-xs text-red-500">{errors.email}</p>
				{:else}
					<p class="text-xs text-muted-foreground">
						Enter the email address you want to use to log in with.
					</p>
				{/if}
			</div>
		</div>
		<div class="mt-4 flex justify-end">
			<Button onclick={saveChanges} disabled={!hasChanges || userProfile.loading}>
				{#if userProfile.loading}
					Saving...
				{:else}
					Save changes
				{/if}
			</Button>
		</div>
	</div>
{/if}
