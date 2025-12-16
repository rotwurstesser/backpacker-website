import { describe, it, expect } from 'vitest';
import { defaultLang, languages, translations } from './translations';

describe('i18n configuration', () => {
  it('should have German as the default language', () => {
    expect(defaultLang).toBe('de');
  });

  it('should support 3 languages', () => {
    expect(languages.length).toBe(3);
    expect(languages.map((l) => l.code).sort()).toEqual(['de', 'en', 'es']);
  });

  it('should have translations for "booked" in all languages', () => {
    expect(translations.en.nav.booked).toBe('Booked');
    expect(translations.de.nav.booked).toBe('Ausgebucht');
    expect(translations.es.nav.booked).toBe('Reservado');
  });
});
