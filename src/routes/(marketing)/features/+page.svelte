<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Flame, Shield, Sparkles, Layout, Users, Boxes } from 'lucide-svelte';
</script>

<section class="py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto mb-16 max-w-3xl xl:max-w-full">
			<span class="mb-2 block text-center text-sm uppercase lg:text-left">Features</span>
			<h2 class="text-center text-4xl font-semibold leading-[3.2rem] lg:text-left">
				Everything you need to build <span class="text-primary">Firebase-powered</span> apps
			</h2>
		</div>

		<div
			class="mx-auto grid max-w-md grid-cols-1 gap-x-5 gap-y-5 sm:max-w-3xl sm:grid-cols-2 xl:max-w-full xl:grid-cols-4 xl:gap-x-8 xl:gap-y-8"
		>
			<!-- Firebase Integration -->
			<Card.Root>
				<Card.Content class="p-4 xl:p-7">
					<div class="mb-6">
						<Flame size={26} />
					</div>
					<h4 class="mb-2 text-base font-semibold capitalize">Firebase Integration</h4>
					<p class="text-sm leading-5">
						Pre-configured Firebase setup with authentication, Firestore, and storage services ready
						to use
					</p>
				</Card.Content>
			</Card.Root>

			<!-- Auth Guard -->
			<Card.Root>
				<Card.Content class="p-4 xl:p-7">
					<div class="mb-6">
						<Shield size={26} />
					</div>
					<h4 class="mb-2 text-base font-semibold capitalize">Auth Guard Handling</h4>
					<p class="text-sm leading-5">
						Built-in authentication guards and user session management for secure routing
					</p>
				</Card.Content>
			</Card.Root>

			<!-- Svelte 5 -->
			<Card.Root>
				<Card.Content class="p-4 xl:p-7">
					<div class="mb-6">
						<Sparkles size={26} />
					</div>
					<h4 class="mb-2 text-base font-semibold capitalize">Svelte 5 Ready</h4>
					<p class="text-sm leading-5">
						Built with the latest Svelte 5 features including runes and view transitions
					</p>
				</Card.Content>
			</Card.Root>

			<!-- ShadcnUI -->
			<Card.Root>
				<Card.Content class="p-4 xl:p-7">
					<div class="mb-6">
						<Boxes size={26} />
					</div>
					<h4 class="mb-2 text-base font-semibold capitalize">ShadcnUI Integration</h4>
					<p class="text-sm leading-5">
						Beautiful, accessible components with ShadcnUI for Svelte built-in
					</p>
				</Card.Content>
			</Card.Root>

			<!-- Pre-built Pages -->
			<Card.Root>
				<Card.Content class="p-4 xl:p-7">
					<div class="mb-6">
						<Layout size={26} />
					</div>
					<h4 class="mb-2 text-base font-semibold capitalize">Pre-built Pages</h4>
					<p class="text-sm leading-5">
						Ready-to-use pages for authentication, dashboard, and common features
					</p>
				</Card.Content>
			</Card.Root>

			<!-- User Components -->
			<Card.Root>
				<Card.Content class="p-4 xl:p-7">
					<div class="mb-6">
						<Users size={26} />
					</div>
					<h4 class="mb-2 text-base font-semibold capitalize">User Management</h4>
					<p class="text-sm leading-5">
						Complete user account management components and functionality
					</p>
				</Card.Content>
			</Card.Root>

			<!-- CTA Section -->
			<div class="relative mt-8 rounded-2xl sm:col-span-2 xl:mt-0">
				<p class="mb-9 text-center text-base leading-6 xl:text-left">
					Start building your next project in minutes with our production-ready template
				</p>
				<div class="flex flex-col items-center justify-center gap-7 xl:flex-row xl:justify-start">
					<Button size="lg">Get Started</Button>
					<span class="text-sm">*Open source and MIT licensed</span>
				</div>
			</div>
		</div>
	</div>
</section>
