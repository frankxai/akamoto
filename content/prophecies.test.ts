import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { prophecies, bySlug } from './prophecies.ts'

describe('prophecies content', () => {
  describe('prophecies array', () => {
    it('contains the expected prophecies', () => {
      assert.equal(prophecies.length, 3)
      assert.equal(prophecies[0].slug, 'of-the-sealing')
      assert.equal(prophecies[1].slug, 'of-the-lamp-carried-backwards')
      assert.equal(prophecies[2].slug, 'of-what-the-dark-keeps')
    })
  })

  describe('bySlug', () => {
    it('returns the prophecy for a known slug', () => {
      const prophecy = bySlug('of-the-sealing')
      assert.ok(prophecy)
      assert.equal(prophecy.title, 'Of the Sealing')
      assert.equal(prophecy.numeral, 'I')
    })

    it('returns undefined for an unknown slug', () => {
      const prophecy = bySlug('non-existent-prophecy')
      assert.equal(prophecy, undefined)
    })
  })
})
