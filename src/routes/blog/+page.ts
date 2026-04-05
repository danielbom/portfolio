import type { Post, PostMeta } from './types';

export const load = async () => {
	const posts = import.meta.glob('/src/lib/posts/*.md');

	const loaded = await Promise.all(
		Object.entries(posts).map(async ([path, resolver]) => {
			const unknown = await resolver();
			const post = unknown as { metadata: PostMeta };
			const slug = path.split('/').pop()?.replace('.md', '');

			if (!slug) {
				throw new Error(`fail to compute slug for path: ${path}`);
			}

			const meta: Post = {
				slug,
				title: post.metadata.title,
				date: post.metadata.date,
				excerpt: post.metadata.excerpt
			};

			return meta;
		})
	);

	return {
		posts: loaded.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
	};
};
