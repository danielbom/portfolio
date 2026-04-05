export type PostMeta = {
	title: string;
	date: string;
	excerpt: string;
};

export type Post = PostMeta & {
	slug: string;
};
