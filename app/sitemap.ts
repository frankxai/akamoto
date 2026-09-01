import type { MetadataRoute } from 'next'
import { prophecies } from '@/content/prophecies'

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://akamoto.io'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE}/`, changeFrequency: 'monthly', priority: 1 },
    ...prophecies.map((p) => ({ url: `${SITE}/prophecies/${p.slug}`, changeFrequency: 'yearly' as const, priority: 0.8 })),
  ]
}
