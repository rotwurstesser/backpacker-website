import { loadGalleryPageContent, loadGalleryImages } from '$lib/content';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const [galleryPageContent, galleryImages] = await Promise.all([
		loadGalleryPageContent(),
		loadGalleryImages()
	]);

	return {
		galleryPageContent,
		galleryImages
	};
};
