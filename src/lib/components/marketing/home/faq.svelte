<script lang="ts">
	import * as Collapsible from '$lib/components/ui/collapsible';
	import { ChevronRight } from 'lucide-svelte';
</script>

<section class="py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16">
			<h2 class="font-manrope text-center text-4xl font-bold leading-[3.25rem]">
				Frequently asked questions
			</h2>
		</div>

		<div class="columns-1 gap-8 max-lg:mx-auto max-lg:max-w-2xl lg:columns-2">
			<!-- Firebase Authentication -->
			<div class="mb-8 break-inside-avoid">
				<Collapsible.Root
					class="group rounded-xl bg-gray-50 p-4 transition-all duration-500 hover:bg-indigo-50"
				>
					<Collapsible.Trigger
						class="flex w-full items-center justify-between text-left text-lg leading-8"
					>
						<span>How do I set up Firebase Authentication?</span>
						<ChevronRight class="h-5 w-5 transition-transform group-data-[state=open]:rotate-90" />
					</Collapsible.Trigger>
					<Collapsible.Content class="pt-4">
						<p class="leading-6">
							The template comes with pre-configured Firebase Authentication. Just add your Firebase
							config to the .env file and you're ready to go. We support email/password, Google, and
							other social providers out of the box.
						</p>
					</Collapsible.Content>
				</Collapsible.Root>
			</div>

			<!-- Firestore Setup -->
			<div class="mb-8 break-inside-avoid">
				<Collapsible.Root
					class="group rounded-xl bg-gray-50 p-4 transition-all duration-500 hover:bg-indigo-50"
				>
					<Collapsible.Trigger
						class="flex w-full items-center justify-between text-left text-lg leading-8"
					>
						<span>How does Firestore integration work?</span>
						<ChevronRight class="h-5 w-5 transition-transform group-data-[state=open]:rotate-90" />
					</Collapsible.Trigger>
					<Collapsible.Content class="pt-4">
						<p class="leading-6">
							We provide custom hooks and utilities for Firestore operations. The template includes
							examples of CRUD operations, real-time subscriptions, and data modeling best practices
							for Firestore.
						</p>
					</Collapsible.Content>
				</Collapsible.Root>
			</div>

			<!-- ShadcnUI Components -->
			<div class="mb-8 break-inside-avoid">
				<Collapsible.Root
					class="group rounded-xl bg-gray-50 p-4 transition-all duration-500 hover:bg-indigo-50"
				>
					<Collapsible.Trigger
						class="flex w-full items-center justify-between text-left text-lg leading-8"
					>
						<span>Can I customize ShadcnUI components?</span>
						<ChevronRight class="h-5 w-5 transition-transform group-data-[state=open]:rotate-90" />
					</Collapsible.Trigger>
					<Collapsible.Content class="pt-4">
						<p class="leading-6">
							Yes! All ShadcnUI components are fully customizable. The components are installed in
							your project's component library, allowing you to modify styles, behavior, and
							functionality as needed.
						</p>
					</Collapsible.Content>
				</Collapsible.Root>
			</div>

			<!-- Development Environment -->
			<div class="mb-8 break-inside-avoid">
				<Collapsible.Root
					class="group rounded-xl bg-gray-50 p-4 transition-all duration-500 hover:bg-indigo-50"
				>
					<Collapsible.Trigger
						class="flex w-full items-center justify-between text-left text-lg leading-8"
					>
						<span>What do I need to start development?</span>
						<ChevronRight class="h-5 w-5 transition-transform group-data-[state=open]:rotate-90" />
					</Collapsible.Trigger>
					<Collapsible.Content class="pt-4">
						<p class="leading-6">
							You'll need Node.js 16+ and a Firebase project. Clone the repo, run npm install, add
							your Firebase config, and you're ready to start developing. Full setup instructions
							are in the documentation.
						</p>
					</Collapsible.Content>
				</Collapsible.Root>
			</div>

			<!-- Firebase Storage -->
			<div class="mb-8 break-inside-avoid">
				<Collapsible.Root
					class="group rounded-xl bg-gray-50 p-4 transition-all duration-500 hover:bg-indigo-50"
				>
					<Collapsible.Trigger
						class="flex w-full items-center justify-between text-left text-lg leading-8"
					>
						<span>How do I use Firebase Storage?</span>
						<ChevronRight class="h-5 w-5 transition-transform group-data-[state=open]:rotate-90" />
					</Collapsible.Trigger>
					<Collapsible.Content class="pt-4">
						<p class="leading-6">
							The template includes pre-built components and hooks for Firebase Storage. You can
							easily upload files, manage storage rules, and handle image uploads with our built-in
							utilities.
						</p>
					</Collapsible.Content>
				</Collapsible.Root>
			</div>

			<!-- TypeScript Support -->
			<div class="mb-8 break-inside-avoid">
				<Collapsible.Root
					class="group rounded-xl bg-gray-50 p-4 transition-all duration-500 hover:bg-indigo-50"
				>
					<Collapsible.Trigger
						class="flex w-full items-center justify-between text-left text-lg leading-8"
					>
						<span>Is TypeScript fully supported?</span>
						<ChevronRight class="h-5 w-5 transition-transform group-data-[state=open]:rotate-90" />
					</Collapsible.Trigger>
					<Collapsible.Content class="pt-4">
						<p class="leading-6">
							Yes, the template is built with TypeScript from the ground up. All components, hooks,
							and utilities are fully typed, providing excellent IDE support and type safety.
						</p>
					</Collapsible.Content>
				</Collapsible.Root>
			</div>

			<!-- Deployment -->
			<div class="mb-8 break-inside-avoid">
				<Collapsible.Root
					class="group rounded-xl bg-gray-50 p-4 transition-all duration-500 hover:bg-indigo-50"
				>
					<Collapsible.Trigger
						class="flex w-full items-center justify-between text-left text-lg leading-8"
					>
						<span>How do I deploy my application?</span>
						<ChevronRight class="h-5 w-5 transition-transform group-data-[state=open]:rotate-90" />
					</Collapsible.Trigger>
					<Collapsible.Content class="pt-4">
						<p class="leading-6">
							The template is optimized for deployment to Vercel or Firebase Hosting. We provide
							deployment scripts and configuration files for both platforms. Just follow our
							deployment guide in the docs.
						</p>
					</Collapsible.Content>
				</Collapsible.Root>
			</div>

			<!-- Updates & Support -->
			<div class="mb-8 break-inside-avoid">
				<Collapsible.Root
					class="group rounded-xl bg-gray-50 p-4 transition-all duration-500 hover:bg-indigo-50"
				>
					<Collapsible.Trigger
						class="flex w-full items-center justify-between text-left text-lg leading-8"
					>
						<span>Do you provide updates and support?</span>
						<ChevronRight class="h-5 w-5 transition-transform group-data-[state=open]:rotate-90" />
					</Collapsible.Trigger>
					<Collapsible.Content class="pt-4">
						<p class="leading-6">
							Yes! We regularly update the template with new features and security patches. For
							support, you can open issues on GitHub or join our Discord community.
						</p>
					</Collapsible.Content>
				</Collapsible.Root>
			</div>
		</div>
	</div>
</section>
