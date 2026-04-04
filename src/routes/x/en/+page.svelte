<script lang="ts">
	import './page.css';

	import Header from '../../../components/Header.svelte';

	import SectionAbout from './SectionAbout.svelte';
	import SectionProjects from '../../../components/SectionProjects.svelte';
	import SectionSkills from '../../../components/SectionSkills.svelte';
	import SectionHero from '../../../components/SectionHero.svelte';
	import SectionContactMe from '../../../components/SectionContactMe.svelte';

	// Projects
	import ProjectResumeGeneratorEn from '../../../components/projects/ProjectResumeGeneratorEn.svelte';
	import ProjectSafeEatEn from '../../../components/projects/ProjectSafeEatEn.svelte';
	import ProjectRocketseatEn from '../../../components/projects/ProjectRocketseatEn.svelte';
	import ProjectSurfAPIEn from '../../../components/projects/ProjectSurfAPIEn.svelte';
	import ProjectSaveLinksEn from '../../../components/projects/ProjectSaveLinksEn.svelte';
	import ProjectAdventOfCodeEn from '../../../components/projects/ProjectAdventOfCodeEn.svelte';
</script>

<div class="min-h-screen scroll-smooth bg-blue-600">
	<div
		class="flex h-screen flex-col bg-indigo-900 px-4 text-white md:px-10 md:px-30 lg:px-40 xl:px-60"
	>
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
	<div
		class="flex min-h-screen flex-col bg-white px-4 text-black md:px-10 md:px-30 lg:px-40 xl:px-50"
	>
		<SectionAbout />
		<SectionSkills title="Skills" />
		<SectionProjects title="Projects">
			<ProjectResumeGeneratorEn />
			<ProjectSafeEatEn />
			<ProjectRocketseatEn />
			<ProjectSurfAPIEn />
			<ProjectSaveLinksEn />
			<ProjectAdventOfCodeEn />
		</SectionProjects>
	</div>
	<div class="bg-indigo-900 px-4 text-white md:px-10 md:px-30 lg:px-40 xl:px-60">
		<SectionContactMe
			title="Contact me"
			social_medias_title="My social medias"
			social_medias_access_repository="Access this page's repository on GitHub"
			social_medias_download_resume="Download my resume"
			social_medias_resume_url="https://github.com/danielbom/resume-generator/blob/main/data/resume-en.pdf"
		/>
	</div>
</div>
