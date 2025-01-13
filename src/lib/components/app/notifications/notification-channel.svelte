<script lang="ts">
	import { Mail, Monitor, Smartphone } from 'lucide-svelte';
	import type { NotificationChannel } from '$lib/types/notification';

	export const channels: NotificationChannel[] = [
		{ id: 'email', icon: Mail, label: 'Email' },
		{ id: 'desktop', icon: Monitor, label: 'Desktop', description: 'Push notification' },
		{ id: 'mobile', icon: Smartphone, label: 'Mobile', description: 'Push notification' }
	];
</script>

<div class="hidden md:block">
	<div class="grid grid-cols-4 items-center gap-4">
		<div>
			<h3 class="text-sm font-medium">Notify me about</h3>
		</div>
		{#each channels as channel}
			<div class="flex flex-col items-center justify-center text-center">
				<channel.icon class="size-5" />
				<span class="mt-2 text-sm font-medium">{channel.label}</span>
				{#if channel.description}
					<span class="text-xs text-muted-foreground">{channel.description}</span>
				{/if}
			</div>
		{/each}
	</div>
</div>
