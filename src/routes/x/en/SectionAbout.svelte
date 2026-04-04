<script lang="ts">
	import { onMount } from 'svelte';

	import Section from '../../../components/Section.svelte';
	import SectionTitle from '../../../components/SectionTitle.svelte';

	import AboutItem from '../../../components/AboutItem.svelte';
	import AboutImage from '../../../components/AboutImage.svelte';
	import AboutText from '../../../components/AboutText.svelte';

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

		return `${age} years old`;
	}

	// Build-time fallback
	let age = computeAge(new Date());

	onMount(() => {
		// recalculated on client
		age = computeAge(new Date());
	});
</script>

<Section>
	<SectionTitle id="about">About</SectionTitle>
	<div>
		<AboutItem>
			<AboutImage
				link="https://www.utfpr.edu.br/campus/campomourao"
				src={utfprImage}
				alt="Universidade Tecnológica Federal do Paraná (UTFPR)"
			/>
			<AboutText>
				<p>
					My name is <b>Daniel Farina</b>. I was born in the state of São Paulo in 1998 ({age}) and
					graduated with a <b>Bachelor's degree in Computer Science</b> from the
					<b>Federal University of Technology – Paraná</b>
					(UTFPR – Campus Campo Mourão, Brazil) in 2024, with a double degree as a
					<b>Master in Informatics</b>
					from the <b>Polytechnic Institute of Bragança</b> (IPB – Portugal).
				</p>
				<p>
					During my undergraduate studies, I studied basic data structures (lists, stacks, queues)
					and advanced ones (graphs, search trees). I also took classes in Artificial Intelligence,
					Distributed Systems, Compilers, Data Visualization, among other subjects that left a mark
					on me.
				</p>
				<p>
					I worked as a <b>teaching assistant</b> in the Numerical Calculus course and as an
					<b>assistant instructor</b>
					in Computer Networks for high school students. I took full advantage of academic events, especially
					the workshops and lectures of the <b>Informatics Week</b> (SEINFO).
				</p>
			</AboutText>
		</AboutItem>
		<AboutItem>
			<AboutImage
				link="https://atlaensino.com/public/landing"
				src={atlaEnsinoImage}
				alt="ATLA Ensino"
			/>
			<AboutText>
				<p>
					I interned at the start-up <b>ATLA Ensino</b> in Campo Mourão, where I learned the
					fundamentals of web applications: server operation (backend/API) and development of web
					and mobile applications (frontend) using <b>Angular 2</b>, <b>Ionic</b>, and
					<b>Node.js</b>.
				</p>
				<p>
					During the system implementation in Campo Mourão schools, the entire team made support
					visits, assisting with the installation of the application on teachers' phones and
					gathering suggestions for improvements and fixes to the system.
				</p>
				<p>
					Later, I became responsible for generating reports, performing aggregations in a <b>
						MongoDB
					</b>
					database, and rendering the results with the <b>PDF.js</b> library on the frontend.
				</p>
			</AboutText>
		</AboutItem>
		<AboutItem>
			<AboutImage link="https://www.viptech.com.br" src={viptechImage} alt="Viptech" />
			<AboutText>
				<p>
					Before traveling to Portugal, I was hired by <b>Viptech</b>, also in Campo Mourão, where I
					was exposed to new technologies, such as automated deployment with
					<b>Azure DevOps Actions</b>
					and microservices management using <b>Kubernetes</b>. I had my first professional
					experience with the relational database <b>MySQL</b>, and for communication between
					microservices, we used the in-memory database <b>Redis</b>.
				</p>
				<p>
					I worked with <b>NestJS</b>, <b>FastAPI</b>, and <b>React.js</b> in the development of
					internal applications, as well as using <b>.NET</b> and <b>Angular 2</b> in outsourced
					projects. In this project, the database used was <b>Oracle</b>, with several triggers
					configured to ensure data consistency.
				</p>
			</AboutText>
		</AboutItem>
		<AboutItem>
			<AboutImage
				link="https://ipb.pt/pt"
				src={ipbImage}
				alt="Instituto Politécnico de Bragança (IPB)"
			/>
			<AboutText>
				<p>
					In Bragança, Portugal, I was able to consolidate and deepen my knowledge. As a team, I
					developed a mobile application in <b>Kotlin</b> connected to a remote server (API) as a
					project for the <b>Mobile Development</b> course.
				</p>
				<p>
					In the <b>Software Architecture</b> course, I participated in building a web application
					aimed at the local community. I also took <b>Business Process Engineering</b> and
					<b>Software Systems Quality</b>, where I learned about business process management (BPM)
					and practices for error analysis and identification.
				</p>
			</AboutText>
		</AboutItem>
	</div>
</Section>
