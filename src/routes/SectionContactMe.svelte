<script>
	import { m } from '$lib/paraglide/messages';

	import Section from '../components/Section.svelte';
	import SectionTitle from '../components/SectionTitle.svelte';

	import SocialMidias from './SocialMidias.svelte';
</script>

<Section id="contact">
	<SectionTitle>
        {m.contacts_title()}
    </SectionTitle>
	<div class="flex flex-col lg:flex-row">
		<!-- <ContactMeForm /> -->
		<SocialMidias />
	</div>
</Section>
