// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			lang: 'en' | 'de' | 'es';
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
