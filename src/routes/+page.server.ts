import { redirect } from '@sveltejs/kit';
import { defaultLang } from '$lib/i18n';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ request }) => {
	const acceptLanguage = request.headers.get('accept-language') || '';

	let detectedLang = defaultLang;
	if (acceptLanguage.includes('de')) {
		detectedLang = 'de';
	} else if (acceptLanguage.includes('es')) {
		detectedLang = 'es';
	}

	throw redirect(307, `/${detectedLang}`);
};
