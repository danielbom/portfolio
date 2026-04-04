<script lang="ts">
	import Project from '$lib/components/Project.svelte';

	import safeEatImage from '$lib/images/projects/safe-eat.png';
</script>

<Project name="Safe Eat" image={safeEatImage} link="https://github.com/danielbom/safe-eat">
	Projeto desenvolvido em grupo na faculdade dividido em três partes: um frontend móvel desenvolvido
	em Kotlin para os clientes, um backend utilizando Java Spring, e um frontend web voltado para os
	restaurantes. A ideia é criar um aplicativo de delivery que permita aos usuários informar suas
	alergias ou restrições alimentares, possibilitando verificar se um produto é seguro para consumo.
	O objetivo é oferecer uma experiência personalizada e segura para pessoas com necessidades
	alimentares específicas, promovendo inclusão e acessibilidade.
</Project>
