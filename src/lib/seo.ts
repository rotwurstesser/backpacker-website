import type { Lang } from './i18n';

export const siteConfig = {
	name: 'Bern Backpackers',
	legalName: 'Hotel Glocke Backpackers Bern',
	url: 'https://bernbackpackers.ch',
	description: {
		en: "Bern's best budget hostel in the heart of the Old Town. Member of Swiss Hostels.",
		de: 'Berns bestes Budget-Hostel im Herzen der Altstadt. Mitglied von Swiss Hostels.',
		es: 'El mejor hostal económico de Berna en el corazón del casco antiguo. Miembro de Swiss Hostels.'
	},
	address: {
		streetAddress: 'Rathausgasse 75',
		addressLocality: 'Bern',
		postalCode: 'CH-3011',
		addressCountry: 'CH'
	},
	geo: {
		latitude: 46.948112,
		longitude: 7.450233
	},
	contact: {
		phone: '+41313113771',
		phoneDisplay: '+41 31 311 37 71',
		fax: '+41313111008',
		email: 'info@bernbackpackers.ch'
	},
	social: {
		facebook: '',
		instagram: '',
		twitter: ''
	}
};

export function getStructuredData(lang: Lang) {
	return {
		'@context': 'https://schema.org',
		'@type': 'Hostel',
		name: siteConfig.name,
		legalName: siteConfig.legalName,
		description: siteConfig.description[lang],
		url: siteConfig.url,
		telephone: siteConfig.contact.phone,
		email: siteConfig.contact.email,
		address: {
			'@type': 'PostalAddress',
			streetAddress: siteConfig.address.streetAddress,
			addressLocality: siteConfig.address.addressLocality,
			postalCode: siteConfig.address.postalCode,
			addressCountry: siteConfig.address.addressCountry
		},
		geo: {
			'@type': 'GeoCoordinates',
			latitude: siteConfig.geo.latitude,
			longitude: siteConfig.geo.longitude
		},
		image: `${siteConfig.url}/images/og-image.jpg`,
		priceRange: 'CHF 37 - CHF 164',
		currenciesAccepted: 'CHF, EUR',
		paymentAccepted: 'Cash, Credit Card, Debit Card',
		openingHours: ['Mo-Su 08:00-12:00', 'Mo-Su 15:00-22:00'],
		amenityFeature: [
			{ '@type': 'LocationFeatureSpecification', name: 'Free WiFi', value: true },
			{ '@type': 'LocationFeatureSpecification', name: 'Kitchen', value: true },
			{ '@type': 'LocationFeatureSpecification', name: 'Laundry', value: true },
			{ '@type': 'LocationFeatureSpecification', name: 'Common Room', value: true },
			{ '@type': 'LocationFeatureSpecification', name: 'Non-Smoking', value: true }
		],
		checkinTime: '15:00',
		checkoutTime: '11:00',
		starRating: {
			'@type': 'Rating',
			ratingValue: '3'
		},
		memberOf: {
			'@type': 'Organization',
			name: 'Swiss Hostels',
			url: 'https://www.swisshostels.com/'
		}
	};
}

export function getOrganizationData() {
	return {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: siteConfig.name,
		legalName: siteConfig.legalName,
		url: siteConfig.url,
		logo: `${siteConfig.url}/images/logo.png`,
		contactPoint: {
			'@type': 'ContactPoint',
			telephone: siteConfig.contact.phone,
			contactType: 'reservations',
			email: siteConfig.contact.email,
			availableLanguage: ['English', 'German', 'Spanish']
		},
		address: {
			'@type': 'PostalAddress',
			streetAddress: siteConfig.address.streetAddress,
			addressLocality: siteConfig.address.addressLocality,
			postalCode: siteConfig.address.postalCode,
			addressCountry: siteConfig.address.addressCountry
		}
	};
}

export function getBreadcrumbData(items: { name: string; url: string }[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			item: `${siteConfig.url}${item.url}`
		}))
	};
}
