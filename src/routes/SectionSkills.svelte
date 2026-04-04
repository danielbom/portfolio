<script lang="ts">
	// https://github.com/bablubambal/All_logo_and_pictures/tree/main
	// https://techicons.dev/icons/fastapi
	import { m } from '$lib/paraglide/messages';

	import Skill from '../components/Skill.svelte';
	import Section from '../components/Section.svelte';
	import SectionTitle from '../components/SectionTitle.svelte';

	// frontend tech
	import cssSvg from '$lib/images/skills/css.svg';
	import htmlSvg from '$lib/images/skills/html.svg';
	import javascriptSvg from '$lib/images/skills/javascript.svg';
	// frontend framewords
	import typescriptSvg from '$lib/images/skills/typescript.svg';
	import angularSvg from '$lib/images/skills/angular.svg';
	import reactSvg from '$lib/images/skills/react.svg';
	// backend tech
	import nodejsSvg from '$lib/images/skills/nodejs.svg';
	import pythonSvg from '$lib/images/skills/python.svg';
	import csSvg from '$lib/images/skills/csharp.svg';
	// backend frameworks
	import dotnetSvg from '$lib/images/skills/NET.svg';
	import nestjsSvg from '$lib/images/skills/Nest.js.svg';
	import fastapiSvg from '$lib/images/skills/FastAPI.svg';
	// banco de dados
	import mysqlSvg from '$lib/images/skills/mysql.svg';
	import oracleSvg from '$lib/images/skills/oracle.svg';
	import mongodbSvg from '$lib/images/skills/mongodb.svg';
	import redisSvg from '$lib/images/skills/redis.svg';
	// others
	import kubernetes from '$lib/images/skills/Kubernetes.svg';
</script>

<Section>
	<SectionTitle id="skills">{m.skills_title()}</SectionTitle>
	<div>
		<ul class="mx-auto flex max-w-[800px] flex-wrap items-center justify-center gap-4 py-10">
			<Skill src={htmlSvg} alt="HTML" />
			<Skill src={cssSvg} alt="CSS" />
			<Skill src={javascriptSvg} alt="JavaScript" />
			<Skill src={typescriptSvg} alt="TypeScript" />

			<Skill src={angularSvg} alt="Angular" />
			<Skill src={reactSvg} alt="React JS" />

			<Skill src={nodejsSvg} alt="Node JS" />
			<Skill src={nestjsSvg} alt="Nest JS" />

			<Skill src={pythonSvg} alt="Python" />
			<Skill src={fastapiSvg} alt="FastAPI" />

			<Skill src={csSvg} alt="C#" />
			<Skill src={dotnetSvg} alt=".NET" />

			<Skill src={mysqlSvg} alt="MySQL" />
			<Skill src={oracleSvg} alt="Oracle" />
			<Skill src={mongodbSvg} alt="MongoDB" />
			<Skill src={redisSvg} alt="Redis" />

			<Skill src={kubernetes} alt="Kubernetes" />
		</ul>
	</div>
</Section>
