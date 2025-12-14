import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { marked } from 'marked';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// Configure marked for inline rendering (no wrapping <p> tags)
marked.use({
	renderer: {
		paragraph(text) {
			return text.text;
		}
	}
});

/**
 * Render markdown to HTML (inline mode - no wrapping p tags)
 * Safe for use with {@html} - links open in new tab
 */
export function md(text: string | null | undefined): string {
	if (!text) return '';
	const html = marked.parseInline(text) as string;
	// Make links open in new tab and add security attributes
	// Also remove javascript: URLs to prevent XSS
	return html
		.replace(/href="javascript:[^"]*"/gi, 'href="#"')
		.replace(/<a /g, '<a target="_blank" rel="noopener noreferrer" ');
}
