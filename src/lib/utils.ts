import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { marked } from 'marked';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Configure marked for inline rendering (no wrapping <p> tags)
/**
 * Render markdown to HTML (inline mode - no wrapping p tags, no block elements)
 * Use for titles, labels, etc.
 */
export function md(text: string | null | undefined): string {
  if (!text) return '';
  const html = marked.parseInline(text) as string;
  return sanitize(html);
}

/**
 * Render full markdown content (headers, lists, paragraphs, etc.)
 * Use for page body content.
 */
export function mdContent(text: string | null | undefined): string {
  if (!text) return '';
  // marked.parse returns Promise | string. default is string with async: false (which is default)
  const html = marked.parse(text) as string;
  return sanitize(html);
}

function sanitize(html: string): string {
  return html
    .replace(/href="javascript:[^"]*"/gi, 'href="#"')
    .replace(/<a /g, '<a target="_blank" rel="noopener noreferrer" ');
}
