<script lang="ts">
	import { goto } from '$app/navigation';
	import AppSidebar from '$lib/components/app/nav/app-sidebar.svelte';
	import AutoBreadcrumb from '$lib/components/shared/auto-breadcrumb.svelte';
	import DarkModeToggle from '$lib/components/shared/dark-mode-toggle.svelte';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import { firekitUser, presenceService } from 'svelte-firekit';
	let { children } = $props();
	const config: any = {
		geolocation: {
			enabled: true,
			type: 'custom',
			requireConsent: true
		},
		sessionTTL: 30 * 60 * 1000, // 30 minutes
		updateInterval: 60 * 1000 // 1 minute
	};
	$effect(() => {
		if (firekitUser.initialized && !firekitUser.isLoggedIn) {
			goto('/sign-in');
		}
		if (firekitUser.initialized && !presenceService.isInitialized) {
			presenceService.initialize(firekitUser.user, config);
		}
	});
</script>

<Sidebar.Provider>
	<AppSidebar />
	<Sidebar.Inset>
		<header class="flex h-16 shrink-0 items-center justify-between gap-2 border-b">
			<div class="flex items-center gap-2 px-3">
				<Sidebar.Trigger />
				<Separator orientation="vertical" class="mr-2 h-4" />
				<AutoBreadcrumb />
			</div>
			<div class="flex items-center gap-2 px-4">
				<DarkModeToggle />
			</div>
		</header>
		<div class="flex flex-1 flex-col gap-4 p-4">
			{@render children()}
		</div>
	</Sidebar.Inset>
</Sidebar.Provider>
