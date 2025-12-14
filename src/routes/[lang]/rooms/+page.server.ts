import { loadRooms, loadSettings, loadRoomsPageContent } from '$lib/content';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const [rooms, settings, roomsPageContent] = await Promise.all([
		loadRooms(),
		loadSettings(),
		loadRoomsPageContent()
	]);

	return {
		rooms,
		settings,
		roomsPageContent
	};
};
