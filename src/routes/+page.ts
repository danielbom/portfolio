import { setLocale } from '$lib/paraglide/runtime';

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export const load = ({ url }) => {
	const lang = url.pathname.split('/')[1] || 'en';
	if (['pt-br', 'en'].includes(lang)) {
		setLocale(lang as any);
	}
};
