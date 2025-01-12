<script lang="ts">
	interface Props {
		title: string;
		description?: string;
		keywords?: string[];
		ogImage?: string;
		type?: 'website' | 'article';
		publishedAt?: Date;
		author?: string;
	}

	let {
		title,
		description,
		keywords,
		ogImage,
		type = 'website',
		publishedAt,
		author
	}: Props = $props();

	// Get the base URL for absolute URLs
	const baseUrl = 'https://your-domain.com'; // Replace with your actual domain
</script>

<svelte:head>
	<!-- Basic Meta Tags -->
	<title>{title}</title>
	{#if description}
		<meta name="description" content={description} />
	{/if}
	{#if keywords && keywords.length > 0}
		<meta name="keywords" content={keywords.join(', ')} />
	{/if}

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={type} />
	<meta property="og:title" content={title} />
	{#if description}
		<meta property="og:description" content={description} />
	{/if}
	{#if ogImage}
		<meta property="og:image" content={new URL(ogImage, baseUrl).toString()} />
	{/if}

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:title" content={title} />
	{#if description}
		<meta property="twitter:description" content={description} />
	{/if}
	{#if ogImage}
		<meta property="twitter:image" content={new URL(ogImage, baseUrl).toString()} />
	{/if}

	<!-- Article Specific Meta Tags -->
	{#if type === 'article'}
		{#if publishedAt}
			<meta property="article:published_time" content={publishedAt.toISOString()} />
		{/if}
		{#if author}
			<meta property="article:author" content={author} />
		{/if}
	{/if}
</svelte:head>
