<script lang="ts">
	import { goto } from '$app/navigation';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import { useSidebar } from '$lib/components/ui/sidebar/index.js';
	import { userProfile } from '$lib/stores/user.svelte';
	import { getInitials } from '$lib/utils';
	import BadgeCheck from 'lucide-svelte/icons/badge-check';
	import Bell from 'lucide-svelte/icons/bell';
	import ChevronsUpDown from 'lucide-svelte/icons/chevrons-up-down';
	import CreditCard from 'lucide-svelte/icons/credit-card';
	import LogOut from 'lucide-svelte/icons/log-out';
	import Sparkles from 'lucide-svelte/icons/sparkles';
	import { firekitAuth } from 'svelte-firekit';

	let user = $derived(userProfile.data);

	const sidebar = useSidebar();

	async function logOut() {
		await firekitAuth.logOut();
		goto('/');
	}
</script>

{#if user}
	<Sidebar.Menu class="rounded-lg bg-cover bg-center ">
		<Sidebar.MenuItem>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger>
					{#snippet child({ props })}
						<Sidebar.MenuButton
							size="lg"
							class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
							{...props}
						>
							<Avatar.Root class="h-8 w-8 rounded-lg">
								<Avatar.Image class="rounded-full" src={user.photoURL} alt={user.displayName} />
								<Avatar.Fallback class="rounded-lg">
									{getInitials(user.displayName)}
								</Avatar.Fallback>
							</Avatar.Root>
							<div
								class="text-stroke grid flex-1 rounded-md p-1 text-left text-sm leading-tight opacity-80"
							>
								<span class="truncate font-semibold">{user.displayName}</span>
								<span class="truncate text-xs">{user.email}</span>
							</div>
							<ChevronsUpDown class="ml-auto size-4" />
						</Sidebar.MenuButton>
					{/snippet}
				</DropdownMenu.Trigger>
				<DropdownMenu.Content
					class="w-[--bits-dropdown-menu-anchor-width] min-w-56 rounded-lg"
					side={sidebar.isMobile ? 'bottom' : 'right'}
					align="end"
					sideOffset={4}
				>
					<DropdownMenu.Label class="p-0 font-normal">
						<div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
							<Avatar.Root class="h-8 w-8 rounded-lg">
								<Avatar.Image class="rounded-full" src={user.photoURL} alt={user.displayName} />
								<Avatar.Fallback class="rounded-lg">
									{getInitials(user.displayName)}
								</Avatar.Fallback>
							</Avatar.Root>
							<div class="grid flex-1 text-left text-sm leading-tight">
								<span class="truncate font-semibold">{user.displayName}</span>
								<span class="truncate text-xs">{user.email}</span>
							</div>
						</div>
					</DropdownMenu.Label>
					<DropdownMenu.Separator />
					<DropdownMenu.Group>
						<DropdownMenu.Item>
							{#snippet child({ props })}
								<a href="/pricing" {...props}>
									<Sparkles />
									<span>Upgrade Plan</span>
								</a>
							{/snippet}
						</DropdownMenu.Item>
					</DropdownMenu.Group>
					<DropdownMenu.Separator />
					<DropdownMenu.Group>
						<DropdownMenu.Item>
							{#snippet child({ props })}
								<a href="/account" {...props}>
									<BadgeCheck />
									<span>Account</span>
								</a>
							{/snippet}
						</DropdownMenu.Item>
						<DropdownMenu.Item>
							{#snippet child({ props })}
								<a href="/billing" {...props}>
									<CreditCard />
									<span>Billing</span>
								</a>
							{/snippet}
						</DropdownMenu.Item>
						<DropdownMenu.Item>
							{#snippet child({ props })}
								<a href="/notifications" {...props}>
									<Bell />

									<span>Notifications</span>
								</a>
							{/snippet}
						</DropdownMenu.Item>
					</DropdownMenu.Group>
					<DropdownMenu.Separator />
					<DropdownMenu.Item onclick={logOut}>
						<LogOut />
						Log out
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</Sidebar.MenuItem>
	</Sidebar.Menu>
{/if}
