<script lang="ts">
	import Section from './Section.svelte';
	import SectionTitle from './SectionTitle.svelte';

	const { children, title } = $props();
</script>

<Section>
	<SectionTitle id="projects">{title}</SectionTitle>
	<div class="flex flex-wrap justify-evenly gap-6">
		{@render children()}
	</div>
</Section>
