/**
 * PHASE 5: Technical SEO - Dynamic Sitemap Generator
 * Generates XML sitemap with all programmatic pages automatically
 */

import { SEO_KEYWORD_DATABASE } from '../config/seoDatabase'

/**
 * Generate complete sitemap with all pages
 */
export function generateSitemap(): string {
  const domain = 'https://saveitbro.fun'
  const urls: Array<{ loc: string; lastmod: string; changefreq: string; priority: string }> = [
    // Main pages
    { loc: domain, lastmod: '2026-04-04', changefreq: 'daily', priority: '1.0' },
    { loc: `${domain}/features`, lastmod: '2026-04-04', changefreq: 'weekly', priority: '0.9' },
    { loc: `${domain}/download`, lastmod: '2026-04-04', changefreq: 'daily', priority: '0.95' },
    { loc: `${domain}/how-it-works`, lastmod: '2026-04-04', changefreq: 'weekly', priority: '0.8' },
    
    // Blog/content pages (placeholder)
    { loc: `${domain}/blog`, lastmod: '2026-04-04', changefreq: 'daily', priority: '0.8' }
  ]

  // Add all programmatically generated SEO pages
  Object.entries(SEO_KEYWORD_DATABASE).forEach(([platform, data]) => {
    // Platform main downloader page
    urls.push({
      loc: `${domain}/${platform}/downloader`,
      lastmod: '2026-04-04',
      changefreq: 'weekly',
      priority: '0.95'
    })

    // All keyword-specific pages
    data.pages.forEach((page) => {
      urls.push({
        loc: `${domain}/${platform}/${page.slug}`,
        lastmod: '2026-04-04',
        changefreq: 'weekly',
        priority: '0.9'
      })
    })
  })

  // Generate XML
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

  urls.forEach((url) => {
    xml += '  <url>\n'
    xml += `    <loc>${url.loc}</loc>\n`
    xml += `    <lastmod>${url.lastmod}</lastmod>\n`
    xml += `    <changefreq>${url.changefreq}</changefreq>\n`
    xml += `    <priority>${url.priority}</priority>\n`
    xml += '  </url>\n'
  })

  xml += '</urlset>'
  return xml
}

/**
 * Count total pages for analytics
 */
export function getTotalPageCount(): number {
  let count = 4 // Main pages
  Object.values(SEO_KEYWORD_DATABASE).forEach((data) => {
    count += data.pages.length + 1 // +1 for platform main page
  })
  return count
}

export default {
  generateSitemap,
  getTotalPageCount,
  totalPages: getTotalPageCount(),
  pageDatabase: SEO_KEYWORD_DATABASE
}
