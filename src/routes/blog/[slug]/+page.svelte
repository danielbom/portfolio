<script lang="ts">
	import '$lib/global.css';

	import type { PostMeta } from '../types';

	export let data: {
		content: any;
		metadata: PostMeta;
	};
</script>

<article class="mx-auto max-w-3xl px-4 py-10">
	<!-- Title -->
	<h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
		{data.metadata.title}
	</h1>

	<!-- Date -->
	<p class="mt-2 text-sm text-gray-500">
		{new Date(data.metadata.date).toLocaleDateString()}
	</p>

	<!-- Divider -->
	<div class="my-6 h-px w-full bg-gray-200"></div>

	<!-- Content -->
	<div
		class="prose prose-gray prose-headings:font-semibold
		       prose-a:text-blue-600
		       hover:prose-a:text-blue-500 prose-img:rounded-xl
		       prose-img:shadow-md prose-pre:rounded-xl
		       prose-pre:bg-gray-900 prose-code:text-pink-600
		       max-w-none"
	>
		<svelte:component this={data.content} />
	</div>
</article>
