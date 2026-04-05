import type { PostMeta } from '../types.js';

export const load = async ({ params }) => {
	const posts = import.meta.glob('/src/lib/posts/*.md');

	const match = `/src/lib/posts/${params.slug}.md`;

	const post: any = await posts[match]?.();

	if (!post) {
		throw new Error('Post not found');
	}

	return {
		content: post.default,
		metadata: post.metadata as PostMeta
	};
};
