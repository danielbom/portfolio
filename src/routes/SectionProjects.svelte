<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import { getLocale } from '$lib/paraglide/runtime';

	import Section from '../components/Section.svelte';
	import SectionTitle from '../components/SectionTitle.svelte';

	import ProjectResumeGeneratorEn from '../components/projects/ProjectResumeGeneratorEn.svelte';
	import ProjectResumeGeneratorPtBr from '../components/projects/ProjectResumeGeneratorPtBr.svelte';

	import ProjectSafeEatEn from '../components/projects/ProjectSafeEatEn.svelte';
	import ProjectSafeEatPtBr from '../components/projects/ProjectSafeEatPtBr.svelte';

	import ProjectRocketseatEn from '../components/projects/ProjectRocketseatEn.svelte';
	import ProjectRocketseatPtBr from '../components/projects/ProjectRocketseatPtBr.svelte';

	import ProjectSurfAPIEn from '../components/projects/ProjectSurfAPIEn.svelte';
	import ProjectSurfAPIPtBr from '../components/projects/ProjectSurfAPIPtBr.svelte';

	import ProjectSaveLinksEn from '../components/projects/ProjectSaveLinksEn.svelte';
	import ProjectSaveLinksPtBr from '../components/projects/ProjectSaveLinksPtBr.svelte';

	import ProjectAdventOfCodeEn from '../components/projects/ProjectAdventOfCodeEn.svelte';
	import ProjectAdventOfCodePtBr from '../components/projects/ProjectAdventOfCodePtBr.svelte';

	let locale = getLocale();

	$: locale = getLocale();
</script>

<Section>
	<SectionTitle id="projects">
		{m.projects_title()}
	</SectionTitle>
	<div class="flex flex-wrap justify-evenly gap-6">
		{#if locale == 'pt-br'}
			<ProjectResumeGeneratorPtBr />
			<ProjectSafeEatPtBr />
			<ProjectRocketseatPtBr />
			<ProjectSurfAPIPtBr />
			<ProjectSaveLinksPtBr />
			<ProjectAdventOfCodePtBr />
		{:else}
			<ProjectResumeGeneratorEn />
			<ProjectSafeEatEn />
			<ProjectRocketseatEn />
			<ProjectSurfAPIEn />
			<ProjectSaveLinksEn />
			<ProjectAdventOfCodeEn />
		{/if}
	</div>
</Section>
