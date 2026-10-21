import { handleJoin, handleState } from '@/lib/demand-capture/handler'
import { PRODUCT_ID, product } from '@/components/Register'

export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  const body = (await req.json().catch(() => ({}))) as Record<string, unknown>
  if (body.productId !== PRODUCT_ID) return Response.json({ error: 'Unknown product' }, { status: 404 })
  try {
    const { status, body: out } = await handleJoin(product(), body, req)
    return Response.json(out, { status })
  } catch (error) {
    console.error('[waitlist] join failed', error)
    return Response.json({ error: 'The Register is not taking names just now. Please try again later.' }, { status: 503 })
  }
}

export async function GET(req: Request) {
  if (new URL(req.url).searchParams.get('productId') !== PRODUCT_ID) {
    return Response.json({ error: 'Unknown product' }, { status: 404 })
  }
  try {
    const { status, body } = await handleState(product())
    return Response.json(body, { status })
  } catch {
    return Response.json({ error: 'Register unavailable' }, { status: 503 })
  }
}
