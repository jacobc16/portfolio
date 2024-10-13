<script>
  import '../app.css';
  import Navbar from '$lib/components/Navbar.svelte';

  const { children } = $props();
</script>

<svelte:head>
  <title>Jacob Campbell | Home</title>
</svelte:head>

<div class="w-full lg:flex lg:flex-col lg:items-center">
  <div class="w-full lg:w-3/4 xl:w-2/3">
    <Navbar />

    {@render children()}
  </div>
</div>