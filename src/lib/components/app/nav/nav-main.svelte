<script lang="ts">
	import * as Collapsible from '$lib/components/ui/collapsible/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';
	import { appNavItems } from '../../../../config';
</script>

{#each appNavItems as mainItem (mainItem.title)}
	<Sidebar.Group>
		<Sidebar.GroupLabel>{mainItem.title}</Sidebar.GroupLabel>
		{#each mainItem.items as item (item.title)}
			{#if item.items && item.items.length > 0}
				<Sidebar.Menu>
					<Collapsible.Root class="group/collapsible">
						{#snippet child({ props })}
							<Sidebar.MenuItem {...props}>
								<Collapsible.Trigger>
									{#snippet child({ props })}
										<Sidebar.MenuButton {...props}>
											{#snippet tooltipContent()}
												{item.title}
											{/snippet}
											{#if item.icon}
												<item.icon />
											{/if}
											<span>{item.title}</span>
											<ChevronRight
												class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
											/>
										</Sidebar.MenuButton>
									{/snippet}
								</Collapsible.Trigger>
								<Collapsible.Content>
									{#if item.items}
										<Sidebar.MenuSub>
											{#each item.items as subItem (subItem.title)}
												<Sidebar.MenuSubItem>
													<Sidebar.MenuSubButton>
														{#snippet child({ props })}
															<a href={subItem.url} {...props}>
																<span>{subItem.title}</span>
															</a>
														{/snippet}
													</Sidebar.MenuSubButton>
												</Sidebar.MenuSubItem>
											{/each}
										</Sidebar.MenuSub>
									{/if}
								</Collapsible.Content>
							</Sidebar.MenuItem>
						{/snippet}
					</Collapsible.Root>
				</Sidebar.Menu>
			{:else}
				<Sidebar.Menu>
					<Sidebar.MenuItem>
						<Sidebar.MenuButton>
							{#snippet child({ props })}
								<a href={item.url} {...props}>
									<item.icon />
									<span>{item.title}</span>
								</a>
							{/snippet}
						</Sidebar.MenuButton>
					</Sidebar.MenuItem>
				</Sidebar.Menu>
			{/if}
		{/each}
	</Sidebar.Group>
{/each}
