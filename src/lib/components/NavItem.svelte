<script lang="ts">

  import type { Snippet } from 'svelte';

  const { text, href, children }: {
    text: string,
    href: string,
    children: Snippet
  } = $props();
</script>

<div class="w-full flex justify-center items-center">
  <a
    class="w-full bg-sky-900 lg:bg-transparent text-gray-200 transition-colors group rounded p-2 flex gap-2 items-center hover:text-white hover:bg-sky-700 focus:text-white focus:bg-sky-700"
    {href}
    rel="noopener noreferrer"
    target="_blank"
  >
    {#if children}
      {@render children()}
    {/if}
    {text}
  </a>
</div>