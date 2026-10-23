import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { rolesFor, ROLES, URGENCY, PRICE_BANDS, PAIN_PROMPT, ALTERNATIVE_PROMPT, PRICE_PROMPT } from './questions.ts'

describe('demand-capture questions', () => {
  it('URGENCY contains unique values', () => {
    const values = new Set(URGENCY.map(u => u.value))
    assert.equal(values.size, URGENCY.length)
  })

  it('PRICE_BANDS contains unique values', () => {
    const values = new Set(PRICE_BANDS.map(p => p.value))
    assert.equal(values.size, PRICE_BANDS.length)
  })

  it('prompts are strings', () => {
    assert.equal(typeof PAIN_PROMPT, 'string')
    assert.equal(typeof ALTERNATIVE_PROMPT, 'string')
    assert.equal(typeof PRICE_PROMPT, 'string')
  })

  describe('rolesFor', () => {
    it('returns specific roles for a known product ID', () => {
      assert.deepEqual(rolesFor('akamoto-prophecies'), ROLES['akamoto-prophecies'])
    })

    it('returns default roles for an unknown product ID', () => {
      assert.deepEqual(rolesFor('unknown-product-id'), ROLES.default)
    })

    it('handles empty string properly', () => {
      assert.deepEqual(rolesFor(''), ROLES.default)
    })
  })
})
