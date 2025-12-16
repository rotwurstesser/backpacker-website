import { describe, it, expect } from 'vitest';
import { cn, md } from './utils';

describe('utils', () => {
  describe('cn', () => {
    it('should merge class names', () => {
      expect(cn('c1', 'c2')).toBe('c1 c2');
    });

    it('should handle conditional classes', () => {
      expect(cn('c1', false && 'c2', 'c3')).toBe('c1 c3');
    });

    it('should merge tailwind classes properly', () => {
      // This tests if tailwind-merge is working
      expect(cn('px-2 py-1', 'px-4')).toBe('py-1 px-4');
    });
  });

  describe('md', () => {
    it('should parse markdown to html', () => {
      expect(md('**bold**')).toBe('<strong>bold</strong>');
    });

    it('should sanitize javascript links', () => {
      expect(md('[click](javascript:alert(1))')).toContain('href="#"');
    });

    it('should add target blank to links', () => {
      expect(md('[link](https://example.com)')).toContain('target="_blank"');
      expect(md('[link](https://example.com)')).toContain('rel="noopener noreferrer"');
    });

    it('should handle null/undefined', () => {
      expect(md(null)).toBe('');
      expect(md(undefined)).toBe('');
    });
  });
});
