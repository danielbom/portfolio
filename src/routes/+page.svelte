<script lang="ts">
	import { page } from '$app/state';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import SectionAbout from './SectionAbout.svelte';
	import SectionHeader from './SectionHeader.svelte';
	import SectionHero from './SectionHero.svelte';
	import SectionSkills from './SectionSkills.svelte';
	import './layout.css';
</script>

<svelte:head>
	<title>Portfolio - Daniel Farina</title>
	<meta name="description" content="Portfolio - Daniel Augusto Rodrigues Farina" />
</svelte:head>

<div class="bg-blue-600 min-h-screen scroll-smooth">
	<div class="bg-indigo-900 text-white h-screen px-4 md:px-10 md:px-30 lg:px-40 xl:px-60 flex flex-col">
		<SectionHeader />
		<SectionHero />
	</div>
	<div class="bg-white text-black min-h-screen px-4 md:px-10 md:px-30 lg:px-40 xl:px-60 flex flex-col">
		<SectionAbout />
		<SectionSkills />
		<div id="projects">PROJECTS</div>
		<!-- <SectionProjects /> -->
	</div>
	<div class="bg-indigo-900 text-white px-4 md:px-10 md:px-30 lg:px-40 xl:px-60">
		<div id="contact">CONTACT</div>
		<!-- <SectionContactMe /> -->
		CONTACT ME
	</div>
</div>

<div style="display:none">
	{#each locales as locale}
		<a href={localizeHref(page.url.pathname, { locale })}>{locale}</a>
	{/each}
</div>
