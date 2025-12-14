import { error } from '@sveltejs/kit';
import { languages, getTranslations, type Lang } from '$lib/i18n';
import { loadSettings } from '$lib/content';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ params }) => {
	const lang = params.lang as Lang;

	if (!languages.some((l) => l.code === lang)) {
		throw error(404, 'Language not supported');
	}

	const settings = await loadSettings();

	return {
		lang,
		t: getTranslations(lang),
		settings
	};
};
