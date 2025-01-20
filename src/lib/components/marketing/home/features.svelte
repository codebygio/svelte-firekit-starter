<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Flame, Database, Shield } from 'lucide-svelte';
</script>

<section class="py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-14 text-center">
			<h2
				class="mb-6 max-w-max text-center text-4xl font-bold leading-[3.25rem] lg:mx-auto lg:max-w-2xl"
			>
				Kickstart your Firebase-powered SvelteKit project
			</h2>
			<p class="mb-8 text-base font-normal lg:mx-auto lg:max-w-xl">
				A ready-to-use template combining the speed of SvelteKit with Firebase's powerful backend
				services
			</p>
			<div
				class="mx-auto flex max-w-lg flex-col justify-center gap-5 md:max-w-2xl md:flex-row lg:max-w-full"
			>
				<Button size="lg" href="https://github.com/codebygio/svelte-firekit-starter"
					>Start Building</Button
				>
				<Button variant="outline" size="lg" href="https://codebygio.com/libs/svelte-firekit-starter"
					>View Documentation</Button
				>
			</div>
		</div>

		<div
			class="mx-auto grid max-w-lg grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-full lg:grid-cols-4"
		>
			<!-- First Card (Double Width) -->
			<div class="md:col-span-2">
				<Card.Root>
					<Card.Content class="p-0">
						<div class="flex flex-row flex-wrap justify-between rounded-lg">
							<div class="w-full p-5 md:w-1/2 xl:p-8">
								<div class="block">
									<Flame size={30} />
								</div>
								<h3 class="w-full py-5 text-lg font-bold xl:w-64 xl:text-xl">
									Authentication Ready
								</h3>
								<p class="mb-8 w-full text-xs font-normal xl:w-64">
									Get started with Firebase Authentication in minutes. Email/password, Google, and
									social auth providers pre-configured.
								</p>
								<Button variant="outline" href="https://codebygio.com/libs/svelte-firekit/auth">
									Explore Auth
									<span class="ml-2">→</span>
								</Button>
							</div>
							<div class="relative hidden h-auto md:block md:w-1/2">
								<img
									src="https://placehold.co/400x320"
									alt="Authentication Feature"
									class="ml-auto h-full object-cover"
								/>
							</div>
						</div>
					</Card.Content>
				</Card.Root>
			</div>

			<!-- Second Card -->
			<Card.Root>
				<Card.Content class="p-5 xl:p-8">
					<div class="block">
						<Database size={30} />
					</div>
					<h3 class="py-5 text-lg font-bold xl:text-xl">Firestore Integration</h3>
					<p class="mb-8 text-xs font-normal">
						Built-in Firestore hooks and utilities for real-time data sync and CRUD operations
					</p>
					<Button
						variant="outline"
						href="https://codebygio.com/libs/svelte-firekit/firestore/doc-mutation"
					>
						View Database
						<span class="ml-2">→</span>
					</Button>
				</Card.Content>
			</Card.Root>

			<!-- Third Card -->
			<Card.Root>
				<Card.Content class="p-5 xl:p-8">
					<div class="block">
						<Shield size={30} />
					</div>
					<h3 class="py-5 text-lg font-bold xl:text-xl">Dark Mode</h3>
					<p class="mb-8 text-xs font-normal">
						Ready-to-use dark mode toggle with local storage persistence
					</p>
					<Button variant="outline" href="https://github.com/svecosystem/mode-watcher">
						Toggle Dark Mode
						<span class="ml-2">→</span>
					</Button>
				</Card.Content>
			</Card.Root>
		</div>
	</div>
</section>
