<script lang="ts">
	import RecentBlog from '$lib/components/marketing/blog/recent-blog.svelte';
	import { siteConfig } from '../../../config.js';

	let { data } = $props();
</script>

<svelte:head>
	<title>{siteConfig.title}</title>
</svelte:head>

{#if data.posts.length === 0}
	<p>No posts found.</p>
{:else}
	<RecentBlog posts={data.posts} />
{/if}
