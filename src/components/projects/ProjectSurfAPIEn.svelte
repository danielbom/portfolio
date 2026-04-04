<script>
	import Project from '../Project.svelte';

	import surfApiImage from '$lib/images/projects/surf-api.png';
</script>

<Project
	name="Surf API"
	image={surfApiImage}
	link="https://github.com/danielbom/api-of-rating-beaches-to-surf"
>
	This project is an adaptation of <a
		class="text-blue-600 underline focus:text-blue-800 active:text-blue-800"
		href="https://github.com/waldemarnt/node-typescript-api/"
		target="_blank"
		rel="noopener noreferrer"
	>
		Waldemar Neto
	</a>'s work, inspired by his
	<a
		class="text-blue-600 underline focus:text-blue-800 active:text-blue-800"
		href="https://www.youtube.com/watch?v=W2ld5xRS3cY&list=PLz_YTBuxtxt6_Zf1h-qzNsvVt46H8ziKh"
		target="_blank"
		rel="noopener noreferrer"
	>
		YouTube playlist
	</a>. The project includes personal changes and standardizations described in the README. It makes
	external API calls to obtain information about the wind, such as direction and intensity, and
	about beaches, such as orientation relative to the sea. With this data, it is possible to
	calculate the best beaches for surfing.
</Project>
