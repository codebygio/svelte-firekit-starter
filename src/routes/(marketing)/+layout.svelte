<script lang="ts">
	import MainFooter from '$lib/components/marketing/nav/main-footer.svelte';
	import MainNav from '$lib/components/marketing/nav/main-nav.svelte';
	let { children } = $props();
</script>

<MainNav />
{@render children()}
<MainFooter />
