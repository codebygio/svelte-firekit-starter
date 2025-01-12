<script lang="ts">
  import { formatDate } from '$lib/utils';
  import * as Avatar from '$lib/components/ui/avatar';
  import { Button } from '$lib/components/ui/button';
  import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
  import { Badge } from '$lib/components/ui/badge';
  import { Heart, MessageCircle, Share, Twitter, Facebook, Linkedin, Link } from 'lucide-svelte';
  
  let { data } = $props();
</script>

<svelte:head>
  <title>{data.meta.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
</svelte:head>

<div class="max-w-5xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
  <div class="max-w-5xl">
    <!-- Author Info -->
    <div class="flex justify-between items-center mb-6">
      <div class="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
    

        <div class="grow">
          <div class="flex justify-between items-center gap-x-2">
            <div>
              <div class="hs-tooltip inline-block">
                <span class="font-semibold">
                  {data.meta.author.name}
                </span>
              </div>

              <ul class="text-xs text-muted-foreground">
				<li class="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-muted-foreground before:rounded-full">
                  {data.meta.author || 'Author'}
                </li>
                <li class="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-muted-foreground before:rounded-full">
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
      <div class="prose prose-lg max-w-none dark:prose-invert">
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


<style>
  :global(.prose) {
    @apply max-w-none;
  }
  
  :global(.prose img) {
    @apply rounded-lg;
  }
  
  :global(.prose blockquote) {
    @apply text-muted-foreground border-l-primary;
  }
</style>