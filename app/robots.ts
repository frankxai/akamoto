import type { MetadataRoute } from 'next'

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://akamoto.io'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/'] },
      { userAgent: 'OAI-SearchBot', allow: '/', disallow: ['/api/'] },
      { userAgent: 'ChatGPT-User', allow: '/', disallow: ['/api/'] },
      { userAgent: 'ClaudeBot', allow: '/', disallow: ['/api/'] },
      { userAgent: 'PerplexityBot', allow: '/', disallow: ['/api/'] },
    ],
    sitemap: `${SITE}/sitemap.xml`,
  }
}
