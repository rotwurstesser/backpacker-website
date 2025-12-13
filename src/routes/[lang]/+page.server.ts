import { loadHomeContent, loadRooms, loadSettings } from '$lib/content';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const [homeContent, rooms, settings] = await Promise.all([
		loadHomeContent(),
		loadRooms(),
		loadSettings()
	]);

	return {
		homeContent,
		rooms,
		settings
	};
};
