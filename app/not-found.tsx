import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="pb-24 pt-32">
      <p className="smallcaps">Nothing here</p>
      <h1 className="mt-4 text-3xl text-paper" style={{ fontWeight: 400 }}>
        This page was not forgotten. It was never written.
      </h1>
      <Link href="/" className="smallcaps mt-8 inline-block" style={{ color: 'var(--jade)' }}>
        ← Back to the texts
      </Link>
    </section>
  )
}
