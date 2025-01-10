<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import { ArrowRight } from 'lucide-svelte';
	import { siteConfig } from '../../../../config';
</script>

<section class="bg-[url('/hero-bg.png')] bg-cover bg-center pt-28 lg:pt-32">
	<div class=" mx-auto flex max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-8">
		<Button variant="outline" class="mb-4 rounded-full" size="lg">
			Explore how to use this template <ArrowRight />
		</Button>
		<h1 class="mb-5 max-w-2xl text-center text-4xl font-bold md:text-5xl">
			{siteConfig.title}
		</h1>
		<p class="mb-9 max-w-sm text-center">
			{siteConfig.description}
		</p>
		<div class="mb-12 flex flex-col gap-2 md:flex-row">
			<Button size="lg" href="/sign-in">Get Started Now</Button>
			<Button size="lg" variant="outline">
				<svg
					class="size-3.5 shrink-0"
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					viewBox="0 0 16 16"
				>
					<path
						d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
					/>
				</svg>
				Explore on GitHub
			</Button>
		</div>

		<img
			src="https://pagedone.io/asset/uploads/1691054543.png"
			alt="Dashboard screenshot"
			class="h-auto rounded-t-3xl object-cover"
		/>
	</div>
</section>
