<script lang="ts">
	import './page.css';

	import Header from '$lib/components/Header.svelte';

	import SectionAbout from './SectionAbout.svelte';
	import SectionProjects from '$lib/components/SectionProjects.svelte';
	import SectionHero from '$lib/components/SectionHero.svelte';
	import SectionSkills from '$lib/components/SectionSkills.svelte';
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
			header_about="Sobre"
			header_skills="Habilidades"
			header_projects="Projetos"
			header_contacts="Contatos"
		/>
		<SectionHero
			hero_hello="Olá, meu nome é Daniel Farina, e eu sou um programador!"
			hero_description="Desenvolvo APIs e páginas web com as ferramentas mais populares do mercado."
			hero_hire_me="Me contrate"
		/>
	</div>
	<div class="min-h-screen bg-white text-black {classes}">
		<SectionAbout />
		<SectionSkills title="Habilidades" />
		<SectionProjects title="Projetos">
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
			title="Entre em Contato"
			made_with="Feito com"
			social_medias_title="Minhas redes sociais"
			social_medias_resume_url="https://github.com/danielbom/resume-generator/blob/main/data/resume-pt.pdf"
			social_medias_download_resume="Baixe meu currículo"
			social_medias_access_repository="Acesse o repositório desta página no GitHub"
		/>
	</div>
</div>
