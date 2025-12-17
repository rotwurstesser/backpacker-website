import type { Lang } from '$lib/i18n';
import { marked } from 'marked';

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
  amenitiesTitle: TranslatedField;
  amenities: Array<{
    icon: string;
    name: TranslatedField;
  }>;
  ctaTitle: TranslatedField;
  ctaDescription: TranslatedField;
}

export interface RoomContent {
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
  id: string;
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
  title: TranslatedField;
  description: TranslatedField;
  content: TranslatedField;
  image?: string;
  showInNav: boolean;
  navOrder: number;
  published: boolean;
  slug?: string;
}

// Helper to get translated value
export function t(field: TranslatedField | undefined, lang: Lang): string {
  if (!field) return '';
  return field[lang] || field.en || '';
}

// Markdown to HTML - content from CMS is trusted (admin-only access)
// marked.parse with default settings escapes HTML in markdown
export function safeMarkdown(field: TranslatedField | undefined, lang: Lang): string {
  if (!field) return '';
  const content = field[lang] || field.en || '';
  // Parse markdown to HTML - marked escapes raw HTML by default
  const html = marked.parse(content, { async: false }) as string;
  // Remove javascript: URLs to prevent XSS
  return html.replace(/href="javascript:[^"]*"/gi, 'href="#"');
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
    const id = path.split('/').pop()?.replace('.json', '') || '';
    rooms.push({ ...module.default, id });
  }

  // Sort by order field
  return rooms.sort((a, b) => (a.order || 0) - (b.order || 0));
}

// Load general settings
export async function loadSettings(): Promise<GeneralSettings> {
  const content = await import('../../../content/settings/general.json');
  return content.default as GeneralSettings;
}

// Location page content interface
export interface LocationContent {
  title: TranslatedField;
  subtitle: TranslatedField;
  mapEmbedUrl: string;
  directionsTitle: TranslatedField;
  byTramTitle: TranslatedField;
  byTram: TranslatedField;
  byFootTitle: TranslatedField;
  byFoot: TranslatedField;
  byCarTitle: TranslatedField;
  byCar: TranslatedField;
  sbbTitle: TranslatedField;
  sbbDescription: TranslatedField;
  sbbLinkText: TranslatedField;
  sbbLinkUrl: string;
  landmarksTitle: TranslatedField;
  landmarksSubtitle: TranslatedField;
  addressCardTitle: TranslatedField;
  phoneLabel: TranslatedField;
  emailLabel: TranslatedField;
  hoursLabel: TranslatedField;
  landmarks: Array<{
    name: TranslatedField;
    distance: TranslatedField;
  }>;
}

// Load location page content
export async function loadLocationContent(): Promise<LocationContent> {
  const content = await import('../../../content/pages/location.json');
  return content.default as LocationContent;
}

// Gallery page content interface
export interface GalleryPageContent {
  title: TranslatedField;
  subtitle: TranslatedField;
  noImagesMessage: TranslatedField;
  categories: Record<string, TranslatedField>;
}

// Gallery image interface
export interface GalleryImage {
  title: string;
  image: string;
  category: string;
  order: number;
  alt: TranslatedField;
}

// Load gallery page content
export async function loadGalleryPageContent(): Promise<GalleryPageContent> {
  const content = await import('../../../content/pages/gallery.json');
  return content.default as GalleryPageContent;
}

// Load all gallery images
export async function loadGalleryImages(): Promise<GalleryImage[]> {
  const imageModules = import.meta.glob('../../../content/gallery/*.json', { eager: true });
  const images: GalleryImage[] = [];

  for (const path in imageModules) {
    const module = imageModules[path] as { default: GalleryImage };
    images.push(module.default);
  }

  // Sort by order field
  return images.sort((a, b) => (a.order || 0) - (b.order || 0));
}

// Links page content interface
export interface LinksContent {
  title: TranslatedField;
  subtitle: TranslatedField;
  partnersTitle: TranslatedField;
  partners: Array<{
    name: string;
    url: string;
    logo: string;
    alt: TranslatedField;
  }>;
  categories: Array<{
    name: TranslatedField;
    links: Array<{
      name: string;
      url: string;
    }>;
  }>;
}

// Load links page content
export async function loadLinksContent(): Promise<LinksContent> {
  const content = await import('../../../content/pages/links.json');
  return content.default as LinksContent;
}

// Rooms page content interface
export interface RoomsPageContent {
  title: TranslatedField;
  subtitle: TranslatedField;
  bookButton: TranslatedField;
  booked: TranslatedField;
  perBed: TranslatedField;
  perRoom: TranslatedField;
  bed: TranslatedField;
  beds: TranslatedField;
  sharedBath: TranslatedField;
  privateBath: TranslatedField;
  priceInfoTitle: TranslatedField;
  priceNote: TranslatedField;
  sheetsIncluded: TranslatedField;
  towelsAvailable: TranslatedField;
  paymentMethods: TranslatedField;
  ctaTitle: TranslatedField;
  ctaDescription: TranslatedField;
}

// Load rooms page content
export async function loadRoomsPageContent(): Promise<RoomsPageContent> {
  const content = await import('../../../content/pages/rooms.json');
  return content.default as RoomsPageContent;
}

// Contact page content interface
export interface ContactPageContent {
  title: TranslatedField;
  subtitle: TranslatedField;
  getInTouchTitle: TranslatedField;
  addressLabel: TranslatedField;
  phoneLabel: TranslatedField;
  faxLabel: TranslatedField;
  emailLabel: TranslatedField;
  hoursLabel: TranslatedField;
  sendMessageTitle: TranslatedField;
  formLabels: {
    name: TranslatedField;
    email: TranslatedField;
    subject: TranslatedField;
    message: TranslatedField;
  };
  sendButton: TranslatedField;
  sendingButton: TranslatedField;
  successMessage: TranslatedField;
  errorMessage: TranslatedField;
}

// Load contact page content
export async function loadContactPageContent(): Promise<ContactPageContent> {
  const content = await import('../../../content/pages/contact.json');
  return content.default as ContactPageContent;
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

export interface SimplePageContent {
  title: TranslatedField;
  content: TranslatedField;
}

export async function loadPageContent(slug: string): Promise<SimplePageContent> {
  const content = await import(`../../../content/pages/${slug}.json`);
  return content.default as SimplePageContent;
}

export interface AwardsContent {
  title: TranslatedField;
  subtitle?: TranslatedField;
  awards: Array<{
    title: string;
    image: string;
    year?: string;
  }>;
}

export async function loadAwardsContent(): Promise<AwardsContent> {
  const content = await import('../../../content/pages/awards.json');
  return content.default as AwardsContent;
}
