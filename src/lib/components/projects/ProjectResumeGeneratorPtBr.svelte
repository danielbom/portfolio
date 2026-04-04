<script lang="ts">
	import Project from '../Project.svelte';

	import resumeGeneratorImage from '$lib/images/projects/resume-generator.png';
</script>

<Project
	name="Gerador de curriculos"
	image={resumeGeneratorImage}
	link="https://github.com/danielbom/resume-generator"
>
	Este projeto é uma ferramenta de linha de comando em Python que cria currículos limpos e
	multilíngues em formato PDF. Desenvolvido para resolver problemas encontrados em outras
	ferramentas, como quebras de página, suporte a vários idiomas e manter um layout consistente. A
	partir dos dados do currículo em um arquivo JSON, e a ferramenta gera PDFs personalizados, com
	opções para definir cores e títulos específicos para cada vaga. É voltado principalmente para
	pessoas que têm familiaridade com o terminal, mas pode ser expandido para um uso mais amplo.
</Project>
