<script>
	import { m } from "$lib/paraglide/messages";
	import IconFacebook from "./IconFacebook.svelte";
	import IconGithub from "./IconGithub.svelte";
	import IconLinkedin from "./IconLinkedin.svelte";
</script>

<div class="flex flex-1 flex-col items-center justify-center gap-5 py-8">
	<h3 class="text-xl">{m.social_medias_title()}</h3>
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
		href={m.social_medias_resume_url()}
		target="_blank"
	>
		{m.social_medias_download_resume()}
	</a>
	<a
		class="text-blue-200 hover:underline"
		href="https://github.com/danielbom/portfolio"
		target="_blank"
	>
		{m.social_medias_access_repository()}
	</a>
</div>
