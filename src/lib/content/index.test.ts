import { describe, it, expect } from 'vitest';
import { t, safeMarkdown } from './index';

describe('content helpers', () => {
  const mockField = {
    en: 'Hello',
    de: 'Hallo',
    es: 'Hola'
  };

  describe('t (translate)', () => {
    it('should return correct translation', () => {
      expect(t(mockField, 'en')).toBe('Hello');
      expect(t(mockField, 'de')).toBe('Hallo');
      expect(t(mockField, 'es')).toBe('Hola');
    });

    it('should fallback to en if translation missing', () => {
      const missingDe = { en: 'Hello', de: '', es: 'Hola' };
      expect(t(missingDe, 'de')).toBe('Hello');
    });

    it('should return empty string if field is undefined', () => {
      expect(t(undefined, 'en')).toBe('');
    });
  });

  describe('safeMarkdown', () => {
    it('should parse markdown', () => {
      const field = { en: '**Bold**', de: '', es: '' };
      expect(safeMarkdown(field, 'en')).toContain('<strong>Bold</strong>');
    });

    it('should sanitize javascript links', () => {
      const field = { en: '[Bad](javascript:alert(1))', de: '', es: '' };
      expect(safeMarkdown(field, 'en')).toContain('href="#"');
    });

    it('should fallback to en', () => {
      const field = { en: 'Fallback', de: '', es: '' };
      // Note: marked wraps in <p> by default (unlike safeMarkdown inline mode if configured differently, checking implementation)
      // Looking at src/lib/content/index.ts, safeMarkdown uses marked.parse which usually adds <p>.
      // Let's just check for content presence.
      expect(safeMarkdown(field, 'de')).toContain('Fallback');
    });
  });
});
