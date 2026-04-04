<script lang="ts">
	import { onMount } from 'svelte';
	import { m } from '$lib/paraglide/messages';

	import Section from './Section.svelte';
	import SectionTitle from './SectionTitle.svelte';

	import AboutItem from './AboutItem.svelte';
	import AboutImage from './AboutImage.svelte';
	import AboutText from './AboutText.svelte';

	import utfprImage from '$lib/images/utfpr-nova-2022jpg.jpg';
	import atlaEnsinoImage from '$lib/images/atla.jpg';
	import viptechImage from '$lib/images/viptech.png';
	import ipbImage from '$lib/images/ipb_estig_ap_1.jpg';

	const birthDate = new Date(1998, 11, 7);

	function computeAge(date: Date) {
		const now = date;
		let age = now.getFullYear() - birthDate.getFullYear();

		if (
			now.getMonth() < birthDate.getMonth() ||
			(now.getMonth() === birthDate.getMonth() && now.getDate() < birthDate.getDate())
		) {
			age--;
		}

		return m.years_old({ age }) as string;
	}

	// Build-time fallback
	let age = computeAge(new Date());

	onMount(() => {
		// recalculated on client
		age = computeAge(new Date());
        console.log({ age })
	});
</script>

<Section id="about">
	<SectionTitle>
		{m.about_title()}
	</SectionTitle>
	<div>
		<AboutItem>
			<AboutImage
				link="https://www.utfpr.edu.br/campus/campomourao"
				src={utfprImage}
				alt="Universidade Tecnológica Federal do Paraná (UTFPR)"
			/>
			<AboutText>
				<p>{@html m.about_utfpr_1({ age })}</p>
				<p>{@html m.about_utfpr_2()}</p>
				<p>{@html m.about_utfpr_3()}</p>
			</AboutText>
		</AboutItem>
		<AboutItem>
			<AboutImage
				link="https://atlaensino.com/public/landing"
				src={atlaEnsinoImage}
				alt="ATLA Ensino"
			/>
			<AboutText>
				<p>{@html m.about_atla_1()}</p>
				<p>{@html m.about_atla_2()}</p>
				<p>{@html m.about_atla_3()}</p>
			</AboutText>
		</AboutItem>
		<AboutItem>
			<AboutImage link="https://www.viptech.com.br" src={viptechImage} alt="Viptech" />
			<AboutText>
				<p>{@html m.about_viptech_1()}</p>
				<p>{@html m.about_viptech_2()}</p>
			</AboutText>
		</AboutItem>
		<AboutItem>
			<AboutImage
				link="https://ipb.pt/pt"
				src={ipbImage}
				alt="Instituto Politécnico de Bragança (IPB)"
			/>
			<AboutText>
				<p>{@html m.about_ipb_1()}</p>
				<p>{@html m.about_ipb_2()}</p>
			</AboutText>
		</AboutItem>
	</div>
</Section>
