<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { ArrowRight } from 'lucide-svelte';
</script>

<section class="pb-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<Card.Root>
			<Card.Content
				class="flex flex-col items-center justify-between  lg:flex-row lg:px-14 lg:py-10"
			>
				<div class="mb-5 block text-center lg:mb-0 lg:text-left">
					<h2 class="font-manrope mb-5 text-2xl font-semibold lg:mb-2">Ready to get started?</h2>
					<p class="text-lG">Start building with Svelte Firekit today</p>
				</div>
				<Button variant="default" size="lg">
					Get Started
					<ArrowRight class="ml-2 h-5 w-5" />
				</Button>
			</Card.Content>
		</Card.Root>
	</div>
</section>
