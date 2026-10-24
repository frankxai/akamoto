import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import robots from './robots.ts'

describe('robots', () => {
  it('returns expected rules', () => {
    const result = robots()
    assert.deepEqual(result.rules, [{ userAgent: '*', allow: '/', disallow: ['/api/'] }])
  })

  it('returns expected sitemap url', () => {
    const result = robots()
    assert.equal(result.sitemap, 'https://akamoto.io/sitemap.xml')
  })
})
