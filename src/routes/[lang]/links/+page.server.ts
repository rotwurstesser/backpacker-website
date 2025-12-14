import { loadLinksContent } from '$lib/content';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const linksContent = await loadLinksContent();

	return {
		linksContent
	};
};
