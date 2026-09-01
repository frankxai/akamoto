import registry from '@/data/products.graph.json'
import { WaitlistForm, type WaitlistCopy } from '@/lib/demand-capture/WaitlistForm'
import { handleState, type ProductConfig } from '@/lib/demand-capture/handler'
import type { WaitlistState } from '@/lib/demand-capture/types'

export const PRODUCT_ID = 'akamoto-prophecies'

export function product(): ProductConfig {
  const row = registry.products.find((p) => p.id === PRODUCT_ID)
  if (!row) throw new Error(`products.graph.json has no row for ${PRODUCT_ID}`)
  return row as ProductConfig
}

/** The house's voice for the shared form. The questions underneath are the estate's. */
const copy: Partial<WaitlistCopy> = {
  join: 'Enter',
  joining: 'Entering',
  quiet: 'One letter when there is more to read. Nothing else.',
  waiting: '{count} names in the Register.',
  entered: 'You are entered. Number {n} in the Register.',
  enteredNoPosition: 'You are entered.',
  seats: '{n} of the first hundred remain. {benefit}',
  intro: 'Three questions, none required. They decide what the house makes next, and what it asks for it.',
  roleLabel: 'You came as',
  pricePrompt: 'If the bound edition were in your hands, what would you set down for it?',
  urgencyLabel: 'How soon you would want it',
  painPrompt: 'What brought you to the texts?',
  painPlaceholder: 'A line will do.',
  send: 'Set it down',
  saving: 'Setting down',
  skip: 'That is all',
  done: 'It is written. Number {n}.',
  doneNoPosition: 'It is written.',
  doneText: 'The house will write when there is more to read, and not before.',
  consent: 'Write to me about the texts. My address stays with the house. Every letter carries a way to leave.',
}

/**
 * Server component. The first paint carries the honest state when KV is
 * configured; when it is not, the form still renders and the POST reports it.
 */
export async function Register() {
  let initialState: WaitlistState | undefined
  try {
    initialState = (await handleState(product())).body
  } catch {
    initialState = undefined
  }
  return (
    <WaitlistForm
      productId={PRODUCT_ID}
      productName="The Forgotten Prophecies"
      foundingBenefit="The first hundred are named in the Register, and pay the first price for as long as the house stands."
      placeholder="where the house may write to you"
      initialState={initialState}
      copy={copy}
    />
  )
}
