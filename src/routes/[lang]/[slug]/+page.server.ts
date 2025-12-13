import { error } from '@sveltejs/kit';
import { loadCustomPages } from '$lib/content';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const pages = await loadCustomPages();
	const page = pages.find((p) => p.slug === params.slug && p.published);

	if (!page) {
		throw error(404, 'Page not found');
	}

	return {
		page
	};
};
