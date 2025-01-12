<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import type { Post } from '$lib/types/post';

	let { posts = [] }: { posts: Post[] } = $props();

	// Get only top 3 posts
	let featuredPosts = $derived(posts.slice(0, 3));
</script>

<section class="py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-14 flex flex-col justify-between gap-8 lg:flex-row">
			<div class="block text-center lg:text-left">
				<h2 class="font-manrope mb-3 text-4xl font-bold">Our recent blogs</h2>
				<p>Surround yourself with the community and resources to help bring your vision to life.</p>
			</div>
		</div>

		{#if featuredPosts.length > 0}
			<div class="grid grid-cols-12 max-xl:mx-auto max-xl:max-w-3xl max-md:max-w-lg">
				<!-- Featured Post -->
				<div class="col-span-12 xl:col-span-4">
					<Card.Root class="group h-full">
						<Card.Content class="flex h-full flex-col md:flex-row md:gap-8 xl:flex-col xl:gap-0">
							{#if featuredPosts[0].featuredImage}
								<div class="relative mb-8 h-64 w-full md:w-96 xl:w-full">
									<img
										src={featuredPosts[0].featuredImage.url}
										alt={featuredPosts[0].featuredImage.alt}
										class="h-full w-full rounded-2xl object-cover"
									/>
								</div>
							{/if}
							<div class="flex flex-1 flex-col">
								<h3 class="mb-2 text-lg font-medium">
									{featuredPosts[0].title}
								</h3>
								<p class="mb-4 text-sm">{featuredPosts[0].excerpt}</p>

								<Button variant="outline" href="/blog/{featuredPosts[0].slug}">Read More</Button>
							</div>
						</Card.Content>
					</Card.Root>
				</div>

				<!-- Secondary Posts -->
				{#if featuredPosts.length > 1}
					<div class="col-span-12 grid gap-8 xl:col-span-8 xl:pl-8">
						{#each featuredPosts.slice(1) as post}
							<Card.Root class="group">
								<Card.Content class="flex flex-col gap-8 md:flex-row">
									{#if post.featuredImage}
										<div class="relative h-64 w-full md:w-96">
											<img
												src={post.featuredImage.url}
												alt={post.featuredImage.alt}
												class="h-full w-full rounded-2xl object-cover"
											/>
										</div>
									{/if}
									<div class="flex flex-1 flex-col">
										<h3 class="mb-2 text-lg font-medium">
											{post.title}
										</h3>
										<p class="mb-4 text-sm">{post.excerpt}</p>

										<Button variant="outline" href="/blog/{post.slug}">Read More</Button>
									</div>
								</Card.Content>
							</Card.Root>
						{/each}
					</div>
				{/if}
			</div>
		{/if}
	</div>
</section>
