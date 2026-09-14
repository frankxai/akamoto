import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { bySlug, prophecies } from '@/content/prophecies'

type Params = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return prophecies.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const p = bySlug((await params).slug)
  if (!p) return {}
  return {
    title: `${p.numeral}. ${p.title}`,
    description: p.verses[0],
    openGraph: { title: `${p.numeral}. ${p.title} — Akamoto`, description: p.verses[0] },
  }
}

export default async function ProphecyPage({ params }: Params) {
  const p = bySlug((await params).slug)
  if (!p) notFound()

  const index = prophecies.indexOf(p)
  const prev = prophecies[index - 1]
  const next = prophecies[index + 1]

  return (
    <article className="reveal pb-24 pt-24 sm:pt-32">
      <p className="smallcaps">
        Prophecy {p.numeral} of {prophecies.length}
      </p>
      <h1 className="mt-4 text-[clamp(2rem,6vw,3.25rem)] leading-tight text-paper" style={{ fontWeight: 400 }}>
        {p.title}
      </h1>
      <p className="measure mt-4 italic" style={{ color: 'var(--paper-faint)' }}>
        {p.epigraph}
      </p>

      <div className="hairline my-12" aria-hidden="true" />

      <ol className="measure">
        {p.verses.map((verse, i) => (
          <li key={i} className="verse">
            <span aria-hidden="true">{i + 1}</span>
            <p>{verse}</p>
          </li>
        ))}
      </ol>

      <div className="hairline my-12" aria-hidden="true" />

      <nav aria-label="Between the texts" className="flex flex-wrap justify-between gap-6">
        {prev ? (
          <Link href={`/prophecies/${prev.slug}`} className="smallcaps hover:text-paper">
            ← {prev.numeral}. {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/prophecies/${next.slug}`} className="smallcaps" style={{ color: 'var(--jade)' }}>
            {next.numeral}. {next.title} →
          </Link>
        ) : (
          <Link href="/#register" className="smallcaps" style={{ color: 'var(--jade)' }}>
            That is all that remains. Enter the Register →
          </Link>
        )}
      </nav>
    </article>
  )
}
