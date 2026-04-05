<script lang="ts">
	import Section from './Section.svelte';
	import SectionTitle from './SectionTitle.svelte';

	import IconFacebook from './IconFacebook.svelte';
	import IconGithub from './IconGithub.svelte';
	import IconLinkedin from './IconLinkedin.svelte';

	const {
		title,
		social_medias_title,
		social_medias_access_repository,
		social_medias_download_resume,
		social_medias_resume_url,
		made_with
	} = $props();
</script>

<Section>
	<SectionTitle id="contact">{title}</SectionTitle>
	<div class="flex flex-col lg:flex-row">
		<!-- <ContactMeForm /> -->

		<div class="flex flex-1 flex-col items-center justify-center gap-5 py-8">
			<h3 class="text-xl">{social_medias_title}</h3>
			<div class="flex gap-8">
				<a target="_blank" href="https://www.linkedin.com/in/dafarina/">
					<IconLinkedin />
				</a>
				<a target="_blank" href="https://github.com/danielbom">
					<IconGithub />
				</a>
				<a target="_blank" href="https://www.facebook.com/danielaugusto.rodriguesfarina">
					<IconFacebook />
				</a>
			</div>
			<a
				class="text-xl text-blue-200 hover:underline"
				href={social_medias_resume_url}
				target="_blank"
			>
				{social_medias_download_resume}
			</a>
			<a
				class="text-blue-200 hover:underline"
				href="https://github.com/danielbom/portfolio"
				target="_blank"
			>
				{social_medias_access_repository}
			</a>
		</div>
	</div>
	<p class="text-right">
		{made_with}
		<a href="https://svelte.dev/" target="_blank" rel="noopener noreferrer"> Svelte </a>
	</p>
</Section>
