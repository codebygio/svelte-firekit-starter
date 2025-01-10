<script>
	import { marketingNavItems, siteConfig } from '../../../../config';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { ChevronDown } from 'lucide-svelte';
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import SocialMediaIcons from '$lib/components/shared/social-media-icons.svelte';
</script>

<footer class="w-full py-14">
	<div class="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 sm:px-6 lg:px-8">
		<a href="/" class="cursor-pointer">
			<img src={siteConfig.logo} alt={siteConfig.title} class="h-6 dark:hidden" />
			<img src={siteConfig.logoDark} alt={siteConfig.title} class="hidden h-6 dark:block" />
		</a>

		<div>
			{#each marketingNavItems as item}
				{#if item.items && item.items?.length > 0}
					<!-- Dropdown for items with sub-items -->
					<DropdownMenu.Root>
						<DropdownMenu.Trigger class="{buttonVariants({ variant: 'ghost' })} "
							>{item.title} <ChevronDown /></DropdownMenu.Trigger
						>
						<DropdownMenu.Content>
							<DropdownMenu.Group>
								{#each item.items as subItem}
									<DropdownMenu.Item>
										<a href={subItem.url}>{subItem.title}</a>
									</DropdownMenu.Item>
								{/each}
							</DropdownMenu.Group>
						</DropdownMenu.Content>
					</DropdownMenu.Root>
				{:else}
					<!-- Regular Button for single items -->
					<Button variant="ghost" href={item.url}>
						{#if item.icon}
							<item.icon />
						{/if}
						{item.title}
					</Button>
				{/if}
			{/each}
		</div>

		<SocialMediaIcons />
		<span>
			©<a href="/">{siteConfig.title}</a>
			{new Date().getFullYear()}, All rights reserved.
		</span>
	</div>
</footer>
