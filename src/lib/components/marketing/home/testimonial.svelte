<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Star } from 'lucide-svelte';
</script>

<section class="bg-muted-foreground/5 py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div
			class="mx-auto flex max-w-lg flex-wrap items-center justify-center gap-y-8 md:max-w-3xl md:flex-wrap md:gap-y-0 xl:max-w-full xl:flex-row xl:flex-nowrap xl:justify-between xl:gap-x-8"
		>
			<div class="w-full xl:w-1/3">
				<span class="mb-4 block text-sm font-medium text-indigo-600">Developer Stories</span>
				<h2 class="font-manrope mb-4 text-4xl font-bold leading-[3.25rem]">
					What developers are building
				</h2>
				<p class="mb-14 text-base">Real projects, real impact, real developer experiences</p>
				<Button variant="outline" class="flex items-center gap-4">
					View all case studies
					<span>→</span>
				</Button>
			</div>

			<div class="relative w-full md:-mt-20 xl:mt-0 xl:w-2/3">
				<div class="flex flex-col items-center gap-8 md:flex-row">
					<!-- First Card -->
					<div class="w-full xl:w-1/2">
						<Card.Root class="shadow-sm">
							<Card.Content class="p-8">
								<div class="flex items-center gap-2 text-amber-500">
									{#each Array(5) as _}
										<Star size={20} fill="currentColor" />
									{/each}
								</div>
								<p class="py-6 text-lg leading-8">
									"Built my MVP in a weekend! The pre-configured Firebase auth and Firestore hooks
									made development incredibly fast. Perfect for indie hackers."
								</p>
								<div class="flex items-center">
									<div class="flex items-center gap-4">
										<Avatar.Root>
											<Avatar.Image src="https://placehold.co/24x24" alt="Sarah Chen" />
											<Avatar.Fallback>SC</Avatar.Fallback>
										</Avatar.Root>
										<h6 class="font-medium">Sarah Chen</h6>
									</div>
									<span
										class="ml-4 border-l border-solid border-gray-300 pl-4 text-sm font-medium text-indigo-600"
									>
										Full Stack Developer
									</span>
								</div>
							</Card.Content>
						</Card.Root>
					</div>

					<!-- Right Column Cards -->
					<div class="grid w-full gap-8 xl:w-1/2">
						<Card.Root class="shadow-sm">
							<Card.Content class="p-8">
								<div class="flex items-center gap-2 text-amber-500">
									{#each Array(5) as _}
										<Star size={20} fill="currentColor" />
									{/each}
								</div>
								<p class="py-6 text-lg leading-8">
									"The combination of SvelteKit, Firebase, and ShadcnUI is unbeatable. Saved weeks
									of setup and configuration time."
								</p>
								<div class="flex items-center">
									<div class="flex items-center gap-4">
										<Avatar.Root>
											<Avatar.Image src="https://placehold.co/24x24" alt="Alex Rivera" />
											<Avatar.Fallback>AR</Avatar.Fallback>
										</Avatar.Root>
										<h6 class="font-medium">Alex Rivera</h6>
									</div>
									<span
										class="ml-4 border-l border-solid border-gray-300 pl-4 text-sm font-medium text-indigo-600"
									>
										Frontend Engineer
									</span>
								</div>
							</Card.Content>
						</Card.Root>

						<Card.Root class="shadow-sm">
							<Card.Content class="p-8">
								<div class="flex items-center gap-2 text-amber-500">
									{#each Array(5) as _}
										<Star size={20} fill="currentColor" />
									{/each}
								</div>
								<p class="py-6 text-lg leading-8">
									"Clean architecture, TypeScript support, and excellent documentation. This
									template is now our go-to for all client projects."
								</p>
								<div class="flex items-center">
									<div class="flex items-center gap-4">
										<Avatar.Root>
											<Avatar.Image src="https://placehold.co/24x24" alt="Marcus Kim" />
											<Avatar.Fallback>MK</Avatar.Fallback>
										</Avatar.Root>
										<h6 class="font-medium">Marcus Kim</h6>
									</div>
									<span
										class="ml-4 border-l border-solid border-gray-300 pl-4 text-sm font-medium text-indigo-600"
									>
										Tech Lead
									</span>
								</div>
							</Card.Content>
						</Card.Root>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
