import { describe, it, expect } from 'vitest';
import { cn, md, mdContent } from './utils';

describe('utils', () => {
  describe('cn', () => {
    it('should merge classes', () => {
      expect(cn('c1', 'c2')).toBe('c1 c2');
    });

    it('should handle conditional classes', () => {
      expect(cn('c1', true && 'c2', false && 'c3')).toBe('c1 c2');
    });

    it('should merge tailwind classes', () => {
      expect(cn('p-4', 'p-8')).toBe('p-8');
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

  describe('mdContent', () => {
    it('renders markdown content with blocks', () => {
      const input = '# Header\n\n- List item\n- List item 2';
      const output = mdContent(input);
      expect(output).toContain('<h1>Header</h1>');
      expect(output).toContain('<ul>');
      expect(output).toContain('<li>List item</li>');
    });

    it('renders markdown images correctly', () => {
      const input = '![Test Image](/test.jpg)';
      const output = mdContent(input);
      expect(output).toContain('<img');
      expect(output).toContain('src="/test.jpg"');
      expect(output).toContain('alt="Test Image"');
    });
  });
});
