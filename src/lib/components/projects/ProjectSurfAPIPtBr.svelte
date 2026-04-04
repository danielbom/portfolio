<script lang="ts">
	import Project from '../Project.svelte';

	import surfApiImage from '$lib/images/projects/surf-api.png';
</script>

<Project
	name="Surf API"
	image={surfApiImage}
	link="https://github.com/danielbom/api-of-rating-beaches-to-surf"
>
	Este projeto é uma adaptação do trabalho de <a
		class="text-blue-600 underline focus:text-blue-800 active:text-blue-800"
		href="https://github.com/waldemarnt/node-typescript-api/"
		target="_blank"
		rel="noopener noreferrer"
	>
		Waldemar Neto
	</a>, inspirado em sua
	<a
		class="text-blue-600 underline focus:text-blue-800 active:text-blue-800"
		href="https://www.youtube.com/watch?v=W2ld5xRS3cY&list=PLz_YTBuxtxt6_Zf1h-qzNsvVt46H8ziKh"
		target="_blank"
		rel="noopener noreferrer"
	>
		playlist no YouTube
	</a>. O projeto inclui mudanças e padronizações pessoais descritas no README. Ele realiza chamadas
	a APIs externas para obter informações sobre o vento, como direção e intensidade, e sobre as
	praias, como orientação em relação ao mar. Com esses dados, é possível calcular as melhores praias
	para surfar.
</Project>
