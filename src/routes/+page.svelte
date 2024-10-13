<script lang="ts">
  import { projects } from '$lib/projects';
  import Header from '$lib/components/Header.svelte';
  import { type Experience, experiences } from '$lib/experience';
  import Tag from '$lib/components/Tag.svelte';
  import Project from '$lib/components/Project.svelte';
  import imageView from '$lib/stores/imageView.svelte';
  import { ArrowLeft, ArrowRight, Icon, XMark } from 'svelte-hero-icons';
  import { fade } from 'svelte/transition';

  function onBackgroundClick(event: MouseEvent) {
    const element = event.target as HTMLElement;
    if (element.tagName === 'DIV')
      imageView.image = null;
  }

  function onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      imageView.image = null;
    }
  }

  function closeImage() {
    imageView.image = null;
  }

  function previousImage() {
    imageView.index = (imageView.index - 1 + imageView.allImages.length) % imageView.allImages.length;
    imageView.image = imageView.allImages[imageView.index];
  }

  function nextImage() {
    imageView.index = (imageView.index + 1) % imageView.allImages.length;
    imageView.image = imageView.allImages[imageView.index];
  }

  type ExperienceDisplay = Experience & {
    timestamp: string;
    totalTimeWorked: string;
  }

  function formatExperiences(experiences: Experience[]): ExperienceDisplay[] {
    function formatDate(date: Date) {
      return date.toLocaleDateString(undefined, {
        month: 'long',
        year: 'numeric',
      });
    }

    return experiences.map((experience) => {
      const startDate = new Date(experience.startDate);
      const endDate = experience.endDate ? new Date(experience.endDate) : new Date();
      const timestamp = `${formatDate(startDate)} - ${experience.current ? 'Present' : formatDate(endDate)}`;
      const totalMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + endDate.getMonth() - startDate.getMonth();
      const years = Math.floor(totalMonths / 12);
      const months = totalMonths % 12 + 1;
      let totalTimeWorked = '';

      if (years > 0) {
        totalTimeWorked += `${years} year${years > 1 ? 's' : ''}`;
      }

      if (months > 0) {
        totalTimeWorked += ` ${months} month${months > 1 ? 's' : ''}`;
      }
      return { ...experience, timestamp, totalTimeWorked };
    });
  }
</script>

<svelte:window onclick={onBackgroundClick} onkeydown={onKeydown} />

{#snippet Experience(experience: ExperienceDisplay)}
  <article
    class="w-full shadow bg-navy-blue rounded p-2 flex flex-col gap-4 {experience.current ? 'border-2 border-sky-500' : ''}">
    <div class="text-sm lg:text-base text-gray-300">
      <p class="text-base lg:text-lg text-white">
        {experience.title}
        <span class="italic text-sky-300">
          {experience.current ? '(Current)' : ''}
        </span>
      </p>
      <p>
        {experience.company}
        <span>∙ {experience.employmentType}</span>
      </p>
      <p>
        {experience.timestamp}
        <span class="text-xs lg:text-sm">∙ {experience.totalTimeWorked}</span>
      </p>
    </div>

    <div class="flex flex-col gap-2">
      <p class="text-base lg:text-lg">Skillset:</p>
      <div class="flex flex-wrap gap-2">
        {#each experience.skills as skill}
          <Tag name={skill} />
        {/each}
      </div>
    </div>
  </article>
{/snippet}

{#if imageView.image}
  <div class="fixed inset-0 z-10 bg-black/60 flex flex-col justify-center items-center"
       transition:fade>
    <button class="absolute right-2 top-2 lg:right-4 lg:top-4" onclick={closeImage}>
      <Icon src={XMark} class="size-8 lg:size-12 text-gray-300 transition-colors hover:text-white focus:text-white" />
    </button>
    <div class="flex flex-col justify-center items-center gap-4">
      <img alt={imageView.image.src} class="object-contain w-full lg:w-3/4" src={imageView.image.src} />

      {#if imageView.allImages.length > 1}
        <div class="flex gap-4">
          <button onclick={previousImage}>
            <Icon src={ArrowLeft}
                  class="size-14 lg:size-12 text-gray-300 transition-colors hover:text-white focus:text-white" />
          </button>

          <button onclick={nextImage}>
            <Icon src={ArrowRight}
                  class="size-14 lg:size-12 text-gray-300 transition-colors hover:text-white focus:text-white" />
          </button>
        </div>
      {/if}
    </div>
  </div>
{/if}

<div class="mt-4 mx-4 flex flex-col gap-8">
  <Header title="Projects">
    <div class="w-full flex flex-col gap-4 lg:flex-wrap">
      {#each projects as project}
        <Project {project} />
      {/each}
    </div>
  </Header>

  <Header title="Experience">
    <div class="w-full flex flex-col gap-4 lg:flex-wrap">
      {#each formatExperiences(experiences) as experience}
        {@render Experience(experience)}
      {/each}
    </div>
  </Header>
</div>