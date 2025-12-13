import type { Lang } from '$lib/i18n';

// Types for CMS content
export interface TranslatedField {
	en: string;
	de: string;
	es: string;
}

export interface HomeContent {
	heroTitle: TranslatedField;
	heroSubtitle: TranslatedField;
	heroTagline: TranslatedField;
	heroCta: TranslatedField;
	features: Array<{
		icon: string;
		title: TranslatedField;
		description: TranslatedField;
	}>;
	amenities: Array<{
		icon: string;
		name: TranslatedField;
	}>;
	ctaTitle: TranslatedField;
	ctaDescription: TranslatedField;
}

export interface RoomContent {
	id: string;
	name: TranslatedField;
	description: TranslatedField;
	price: number;
	priceUnit: 'per_bed' | 'per_room';
	beds: number;
	bathType: 'shared' | 'private';
	image?: string;
	features: TranslatedField[];
	order: number;
	available: boolean;
}

export interface GeneralSettings {
	siteName: string;
	phone: string;
	fax?: string;
	email: string;
	address: string;
	receptionHours: string;
	bookingUrl: string;
	checkIn?: string;
	checkOut?: string;
	quietHours?: string;
}

export interface CustomPage {
	slug: string;
	title: TranslatedField;
	description: TranslatedField;
	content: TranslatedField;
	image?: string;
	showInNav: boolean;
	navOrder: number;
	published: boolean;
}

// Helper to get translated value
export function t(field: TranslatedField | undefined, lang: Lang): string {
	if (!field) return '';
	return field[lang] || field.en || '';
}

// Load home page content
export async function loadHomeContent(): Promise<HomeContent> {
	const content = await import('../../../content/pages/home.json');
	return content.default as HomeContent;
}

// Load all rooms
export async function loadRooms(): Promise<RoomContent[]> {
	const roomModules = import.meta.glob('../../../content/rooms/*.json', { eager: true });
	const rooms: RoomContent[] = [];

	for (const path in roomModules) {
		const module = roomModules[path] as { default: RoomContent };
		rooms.push(module.default);
	}

	// Sort by order field
	return rooms.sort((a, b) => (a.order || 0) - (b.order || 0));
}

// Load general settings
export async function loadSettings(): Promise<GeneralSettings> {
	const content = await import('../../../content/settings/general.json');
	return content.default as GeneralSettings;
}

// Load custom pages (excludes home.json which has different structure)
export async function loadCustomPages(): Promise<CustomPage[]> {
	const pageModules = import.meta.glob('../../../content/pages/*.json', { eager: true });
	const pages: CustomPage[] = [];

	for (const path in pageModules) {
		// Skip home.json as it has a different structure
		if (path.includes('home.json')) continue;

		const module = pageModules[path] as { default: CustomPage };
		pages.push(module.default);
	}

	return pages.sort((a, b) => (a.navOrder || 99) - (b.navOrder || 99));
}

// Load pages that should appear in navigation
export async function loadNavPages(): Promise<CustomPage[]> {
	const pages = await loadCustomPages();
	return pages.filter((p) => p.showInNav && p.published);
}
