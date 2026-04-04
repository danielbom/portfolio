<script lang="ts">
	import './page.css';

	import Header from '$lib/components/Header.svelte';

	import SectionAbout from './SectionAbout.svelte';
	import SectionProjects from '$lib/components/SectionProjects.svelte';
	import SectionHero from '$lib/components/SectionHero.svelte';
	import SectionSkills from '$lib/components/SectionSkills.svelte';
	import SectionContactMe from '$lib/components/SectionContactMe.svelte';

	// Projects
	import ProjectResumeGeneratorPtBr from '$lib/components/projects/ProjectResumeGeneratorPtBr.svelte';
	import ProjectSafeEatPtBr from '$lib/components/projects/ProjectSafeEatPtBr.svelte';
	import ProjectRocketseatPtBr from '$lib/components/projects/ProjectRocketseatPtBr.svelte';
	import ProjectSurfAPIPtBr from '$lib/components/projects/ProjectSurfAPIPtBr.svelte';
	import ProjectSaveLinksPtBr from '$lib/components/projects/ProjectSaveLinksPtBr.svelte';
	import ProjectAdventOfCodePtBr from '$lib/components/projects/ProjectAdventOfCodePtBr.svelte';
</script>

<div class="min-h-screen scroll-smooth bg-blue-600">
	<div
		class="flex h-screen flex-col bg-indigo-900 px-4 text-white md:px-10 md:px-30 lg:px-40 xl:px-60"
	>
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
	<div
		class="flex min-h-screen flex-col bg-white px-4 text-black md:px-10 md:px-30 lg:px-40 xl:px-50"
	>
		<SectionAbout />
		<SectionSkills title="Habilidades" />
		<SectionProjects title="Projetos">
			<ProjectResumeGeneratorPtBr />
			<ProjectSafeEatPtBr />
			<ProjectRocketseatPtBr />
			<ProjectSurfAPIPtBr />
			<ProjectSaveLinksPtBr />
			<ProjectAdventOfCodePtBr />
		</SectionProjects>
	</div>
	<div class="bg-indigo-900 px-4 text-white md:px-10 md:px-30 lg:px-40 xl:px-60">
		<SectionContactMe
			title="Entre em Contato"
			social_medias_title="Minhas redes sociais"
			social_medias_resume_url="https://github.com/danielbom/resume-generator/blob/main/data/resume-pt.pdf"
			social_medias_download_resume="Baixe meu currículo"
			social_medias_access_repository="Acesse o repositório desta página no GitHub"
		/>
	</div>
</div>
