<script lang="ts">
	import { resolve } from '$app/paths';
	import '$lib/global.css';

	import type { Post } from './types';

	export let data: { posts: Array<Post> };
</script>

<section class="mx-auto max-w-3xl px-4 py-12">
	<h1 class="mb-8 text-3xl font-bold text-gray-900">Blog</h1>

	<ul class="flex flex-col gap-6">
		{#each data.posts as post}
			<li>
				<a
					href={resolve(`/blog/${post.slug}`)}
					class="block rounded-xl border border-gray-200 p-5 shadow-sm transition hover:border-gray-300 hover:shadow-md"
				>
					<div class="flex flex-col gap-2">
						<h2 class="text-xl font-semibold text-gray-800">
							{post.title}
						</h2>

						<p class="text-sm text-gray-500">
							{new Date(post.date).toLocaleDateString()}
						</p>

						<p class="text-sm text-gray-600">
							{post.excerpt}
						</p>
					</div>
				</a>
			</li>
		{/each}
	</ul>
</section>
