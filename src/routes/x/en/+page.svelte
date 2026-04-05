<script lang="ts">
	import './page.css';

	import Header from '$lib/components/Header.svelte';

	import SectionAbout from './SectionAbout.svelte';
	import SectionProjects from '$lib/components/SectionProjects.svelte';
	import SectionSkills from '$lib/components/SectionSkills.svelte';
	import SectionHero from '$lib/components/SectionHero.svelte';
	import SectionContactMe from '$lib/components/SectionContactMe.svelte';

	// Projects
	import ProjectResumeGenerator from './projects/ProjectResumeGenerator.svelte';
	import ProjectSafeEat from './projects/ProjectSafeEat.svelte';
	import ProjectRocketseat from './projects/ProjectRocketseat.svelte';
	import ProjectSurfAPI from './projects/ProjectSurfAPI.svelte';
	import ProjectSaveLinks from './projects/ProjectSaveLinks.svelte';
	import ProjectAdventOfCode from './projects/ProjectAdventOfCode.svelte';

	const classes = 'flex flex-col px-4 md:px-10 md:px-30 lg:px-40 xl:px-50';
</script>

<div class="scroll-smooth bg-blue-600">
	<div class="h-screen bg-indigo-900 text-white {classes}">
		<Header
			header_about="About"
			header_skills="Skills"
			header_projects="Projects"
			header_contacts="Contacts"
		/>
		<SectionHero
			hero_hello="Hello, my name is Daniel Farina, and I am a programmer!"
			hero_description="I develop APIs and web pages with the most popular tools on the market."
			hero_hire_me="Hire me"
		/>
	</div>
	<div class="min-h-screen bg-white text-black {classes}">
		<SectionAbout />
		<SectionSkills title="Skills" />
		<SectionProjects title="Projects">
			<ProjectResumeGenerator />
			<ProjectSafeEat />
			<ProjectRocketseat />
			<ProjectSurfAPI />
			<ProjectSaveLinks />
			<ProjectAdventOfCode />
		</SectionProjects>
	</div>
	<div class="bg-indigo-900 text-white {classes}">
		<SectionContactMe
			title="Contact me"
			made_with="Made with"
			social_medias_title="My social medias"
			social_medias_access_repository="Access this page's repository on GitHub"
			social_medias_download_resume="Download my resume"
			social_medias_resume_url="https://github.com/danielbom/resume-generator/blob/main/data/resume-en.pdf"
		/>
	</div>
</div>
