import { loadContactPageContent, loadSettings } from '$lib/content';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const [contactPageContent, settings] = await Promise.all([
		loadContactPageContent(),
		loadSettings()
	]);

	return {
		contactPageContent,
		settings
	};
};
