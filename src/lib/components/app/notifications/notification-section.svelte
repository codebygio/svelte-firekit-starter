<script lang="ts">
	import { Switch } from '$lib/components/ui/switch';
	import type { NotificationSetting } from '$lib/types/notification';
	let { title, settings }: { title: string; settings: NotificationSetting[] } = $props();
</script>

<div class="w-full space-y-4">
	<div class="rounded-lg bg-muted p-4">
		<h3 class="font-semibold">{title}</h3>
	</div>

	{#each settings as setting}
		<div class="grid gap-4 md:grid-cols-4 md:items-center">
			<div class="space-y-1">
				<p class="text-sm font-medium">{setting.title}</p>
				<p class="text-sm text-muted-foreground">{setting.description}</p>
			</div>
			<div class="flex items-center justify-between md:justify-center">
				<span class="text-sm md:hidden">Email</span>
				<Switch checked={setting.email} />
			</div>
			<div class="flex items-center justify-between md:justify-center">
				<span class="text-sm md:hidden">Desktop</span>
				<Switch checked={setting.desktop} />
			</div>
			<div class="flex items-center justify-between md:justify-center">
				<span class="text-sm md:hidden">Mobile</span>
				<Switch checked={setting.mobile} />
			</div>
		</div>
	{/each}
</div>
