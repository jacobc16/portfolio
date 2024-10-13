<script lang="ts">
  import { ArrowRight, Icon } from 'svelte-hero-icons';
  import Tag from '$lib/components/Tag.svelte';
  import type { Project } from '$lib/projects';
  import imageView from '$lib/stores/imageView.svelte.js';
  import { onMount } from 'svelte';

  const { project }: { project: Project } = $props();

  let currentIndex = $state(0);
  let carouselEnabled = $derived.by(() => {
    return imageView.image === null;
  });
  let currentImage = $state(project.images.length > 0 ? project.images[0] : null);

  function selectImage() {
    imageView.image = currentImage;
    imageView.allImages = project.images;
  }

  onMount(() => {
    setInterval(() => {
      if (carouselEnabled && project.images.length > 1) {
        currentIndex = (currentIndex + 1) % project.images.length;
        currentImage = project.images[currentIndex];
      }
    }, 5000);
  });
</script>

<article class="w-full shadow bg-navy-blue rounded p-2 flex flex-col lg:flex-row lg:justify-between gap-4">
  <div class="lg:basis-1/2 xl:basis-7/12 lg:flex flex-col justify-between">
    <div>
      <p class="font-bold lg:text-lg">{project.title}</p>
      {#if project.tags}
        <div class="flex flex-wrap py-1 gap-2">
          {#each project.tags as tag}
            <Tag name={tag} />
          {/each}
        </div>
      {/if}
      <p class="text-sm lg:text-base">{project.description}</p>
    </div>

    {#if project.link}
      <a href={project.link}
         target="_blank"
         rel="noopener noreferrer"
         class="group rounded-full transition-colors bg-sky-900 px-2 py-1 w-fit mt-3 text-sky-400 flex items-center hover:bg-sky-800 hover:text-sky-100 focus:bg-sky-800 focus:text-sky-100"
      >
        View Project
        <Icon src={ArrowRight} class="transition-all w-4 h-4 ml-2 group-hover:ml-4 group-focus:ml-4" />
      </a>
    {/if}
  </div>

  <div class="justify-center items-center lg:flex lg:basis-1/2 xl:basis-5/12">
    <button class="relative w-full h-fit" onclick={selectImage}>
      <img alt={currentImage?.alt}
           class="w-full rounded"
           src={currentImage?.src}
      >

      {#if project.images.length > 1}
        <div class="absolute left-0 right-0 bottom-1 flex justify-center items-center">
          <div class="bg-black bottom-4 p-1 rounded flex gap-1">
            {#each project.images as _, index}
              <div class="size-2 rounded-full {currentIndex === index ? 'bg-sky-400' : 'bg-gray-400'}">
              </div>
            {/each}
          </div>
        </div>
      {/if}
    </button>
  </div>
</article>