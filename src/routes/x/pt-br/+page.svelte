<script lang="ts">
	import '$lib/global.css';

	import Header from '$lib/components/Header.svelte';
	import LayoutPortfolio from '$lib/components/LayoutPortfolio.svelte';

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
	import ProjectClinicAppointments from './projects/ProjectClinicAppointments.svelte';
</script>

<LayoutPortfolio>
	<div slot="top" class="flex min-h-screen flex-col">
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
	<div slot="middle" class="min-h-screen">
		<SectionAbout />
		<SectionSkills title="Habilidades" />
		<SectionProjects title="Projetos">
			<ProjectResumeGenerator />
			<ProjectSafeEat />
			<ProjectClinicAppointments />
			<ProjectRocketseat />
			<ProjectSurfAPI />
			<ProjectSaveLinks />
			<ProjectAdventOfCode />
		</SectionProjects>
	</div>
	<div slot="bottom">
		<SectionContactMe
			title="Entre em Contato"
			made_with="Feito com"
			social_medias_title="Minhas redes sociais"
			social_medias_resume_url="https://github.com/danielbom/resume-generator/blob/main/data/resume-pt.pdf"
			social_medias_download_resume="Baixe meu currículo"
			social_medias_access_repository="Acesse o repositório desta página no GitHub"
		/>
	</div>
</LayoutPortfolio>
