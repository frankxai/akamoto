import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

describe('robots', () => {
  it('returns expected rules', async () => {
    // Save original to avoid polluting other tests if any
    const originalEnv = process.env.NEXT_PUBLIC_SITE_URL
    delete process.env.NEXT_PUBLIC_SITE_URL

    try {
      const { default: robots } = await import(new URL('./robots.ts?1', import.meta.url).href)
      const r = robots()

      assert.deepEqual(r.rules, [{ userAgent: '*', allow: '/', disallow: ['/api/'] }])
      assert.equal(r.sitemap, 'https://akamoto.io/sitemap.xml')

      process.env.NEXT_PUBLIC_SITE_URL = 'https://custom.test.io'
      const { default: robots2 } = await import(new URL('./robots.ts?2', import.meta.url).href)
      const r2 = robots2()
      assert.equal(r2.sitemap, 'https://custom.test.io/sitemap.xml')
    } finally {
      if (originalEnv !== undefined) {
        process.env.NEXT_PUBLIC_SITE_URL = originalEnv
      } else {
        delete process.env.NEXT_PUBLIC_SITE_URL
      }
    }
  })
})
