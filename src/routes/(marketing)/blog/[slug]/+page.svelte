<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { Badge } from '$lib/components/ui/badge';
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<div class="mx-auto max-w-5xl px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pt-10">
	<div class="max-w-5xl">
		<!-- Author Info -->
		<div class="mb-6 flex items-center justify-between">
			<div class="flex w-full gap-x-5 sm:items-center sm:gap-x-3">
				<div class="grow">
					<div class="flex items-center justify-between gap-x-2">
						<div>
							<div class="hs-tooltip inline-block">
								<span class="font-semibold">
									{data.meta.author.name}
								</span>
							</div>

							<ul class="text-xs text-muted-foreground">
								<li
									class="relative inline-block pe-6 before:absolute before:end-2 before:top-1/2 before:size-1 before:-translate-y-1/2 before:rounded-full before:bg-muted-foreground last:pe-0 last-of-type:before:hidden"
								>
									{data.meta.author || 'Author'}
								</li>
								<li
									class="relative inline-block pe-6 before:absolute before:end-2 before:top-1/2 before:size-1 before:-translate-y-1/2 before:rounded-full before:bg-muted-foreground last:pe-0 last-of-type:before:hidden"
								>
									{formatDate(data.meta.publishedAt)}
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Content -->
		<div class="space-y-5 md:space-y-8">
			<!-- Tags -->
			<div class="flex flex-wrap gap-2">
				{#each data.meta.tags as tag}
					<Badge variant="secondary">#{tag}</Badge>
				{/each}
			</div>

			<!-- Article Content -->
			<div class="prose max-w-none dark:prose-invert md:prose-lg lg:prose-xl">
				<data.content />
			</div>
			<!-- Categories -->
			<div class="flex flex-wrap gap-2">
				{#each data.meta.categories as category}
					<Badge variant="secondary">#{category}</Badge>
				{/each}
			</div>
		</div>
	</div>
</div>
