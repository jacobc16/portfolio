<script lang="ts">
  import type { Snippet } from 'svelte';

  const { title, children }: {
    title: string,
    children: Snippet
  } = $props();
</script>

<section class="flex flex-col items-center gap-2">
  <h2 class="text-lg bg-gradient-to-br from-teal-700 to-cyan-900 shadow rounded p-2 w-full lg:text-2xl">{title}</h2>

  {#if children}
    {@render children()}
  {/if}
</section>