<script lang="ts">
	import { page } from '$app/state';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import SectionAbout from './SectionAbout.svelte';
	import SectionContactMe from './SectionContactMe.svelte';
	import SectionHeader from './SectionHeader.svelte';
	import SectionHero from './SectionHero.svelte';
	import SectionSkills from './SectionSkills.svelte';
	import './layout.css';
</script>

<svelte:head>
	<title>Portfolio - Daniel Farina</title>
	<meta name="description" content="Portfolio - Daniel Augusto Rodrigues Farina" />
</svelte:head>

<div class="min-h-screen scroll-smooth bg-blue-600">
	<div
		class="flex h-screen flex-col bg-indigo-900 px-4 text-white md:px-10 md:px-30 lg:px-40 xl:px-60"
	>
		<SectionHeader />
		<SectionHero />
	</div>
	<div
		class="flex min-h-screen flex-col bg-white px-4 text-black md:px-10 md:px-30 lg:px-40 xl:px-60"
	>
		<SectionAbout />
		<SectionSkills />
		<div id="projects">PROJECTS</div>
		<!-- <SectionProjects /> -->
	</div>
	<div class="bg-indigo-900 px-4 text-white md:px-10 md:px-30 lg:px-40 xl:px-60">
		<SectionContactMe />
	</div>
</div>

<div style="display:none">
	{#each locales as locale}
		<a href={localizeHref(page.url.pathname, { locale })}>{locale}</a>
	{/each}
</div>
