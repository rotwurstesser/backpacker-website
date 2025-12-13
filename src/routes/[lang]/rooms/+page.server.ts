import { loadRooms, loadSettings } from '$lib/content';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const [rooms, settings] = await Promise.all([loadRooms(), loadSettings()]);

	return {
		rooms,
		settings
	};
};
