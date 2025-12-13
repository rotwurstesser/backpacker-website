import type { RequestHandler } from './$types';

const site = 'https://bernbackpackers.ch';
const languages = ['en', 'de', 'es'];
const pages = ['', '/rooms', '/gallery', '/location', '/contact', '/links'];

export const GET: RequestHandler = async () => {
	const urls: string[] = [];

	for (const lang of languages) {
		for (const page of pages) {
			urls.push(`${site}/${lang}${page}`);
		}
	}

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls
	.map((url) => {
		const path = url.replace(site, '').replace(/^\/[a-z]{2}/, '');
		return `  <url>
    <loc>${url}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${site}/en${path}" />
    <xhtml:link rel="alternate" hreflang="de" href="${site}/de${path}" />
    <xhtml:link rel="alternate" hreflang="es" href="${site}/es${path}" />
    <changefreq>weekly</changefreq>
    <priority>${path === '' ? '1.0' : '0.8'}</priority>
  </url>`;
	})
	.join('\n')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};
