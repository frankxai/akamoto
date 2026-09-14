import Link from 'next/link'
import { prophecies } from '@/content/prophecies'
import { Register } from '@/components/Register'

export default function Home() {
  return (
    <>
      <section className="reveal pb-20 pt-28 sm:pt-40" aria-labelledby="title">
        <p className="smallcaps">A work of fiction, in the world of Arcanea</p>
        <h1
          id="title"
          className="mt-6 text-[clamp(2.2rem,7vw,4rem)] leading-[1.05] text-paper"
          style={{ fontWeight: 400 }}
        >
          The forgotten Prophecies
          <br />
          <span className="italic" style={{ color: 'var(--violet)' }}>
            of Darkness and Light.
          </span>
        </h1>
        <p className="measure mt-10 text-[1.1rem] leading-[1.75]" style={{ color: 'var(--paper-dim)' }}>
          Three texts that were struck from the teaching because students kept looking for a name in them.
          There is no name in them. They were carried by a man who sealed his own sight rather than keep
          seeing what he saw, and who could not, it turns out, stop seeing.
        </p>
        <p className="measure mt-5 text-[1.1rem] leading-[1.75]" style={{ color: 'var(--paper-dim)' }}>
          They are here in full. Nothing is asked for before you read them.
        </p>
        <div className="mt-12 flex flex-wrap items-baseline gap-x-8 gap-y-3">
          <Link href={`/prophecies/${prophecies[0].slug}`} className="smallcaps" style={{ color: 'var(--jade)' }}>
            Begin with the first →
          </Link>
          <Link href="#register" className="smallcaps hover:text-paper">
            Enter the Register
          </Link>
        </div>
      </section>

      <div className="hairline" aria-hidden="true" />

      <section id="prophecies" className="py-20" aria-labelledby="prophecies-title">
        <h2 id="prophecies-title" className="smallcaps">
          The three that remain
        </h2>
        <ol className="mt-10 space-y-14">
          {prophecies.map((p) => (
            <li key={p.slug} className="grid gap-x-8 gap-y-3 sm:grid-cols-[3rem_1fr]">
              <span className="text-2xl" style={{ color: 'var(--violet)' }} aria-hidden="true">
                {p.numeral}
              </span>
              <div>
                <h3 className="text-2xl leading-tight text-paper">
                  <Link href={`/prophecies/${p.slug}`} className="hover:underline underline-offset-4">
                    {p.title}
                  </Link>
                </h3>
                <p className="mt-2 italic" style={{ color: 'var(--paper-faint)' }}>
                  {p.epigraph}
                </p>
                <p className="measure dropcap mt-5" style={{ color: 'var(--paper-dim)' }}>
                  {p.verses[0]}
                </p>
                <Link
                  href={`/prophecies/${p.slug}`}
                  className="smallcaps mt-4 inline-block"
                  style={{ color: 'var(--jade)' }}
                  aria-label={`Read ${p.title} in full`}
                >
                  Read in full, {p.verses.length} verses →
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <div className="hairline" aria-hidden="true" />

      <section id="register" className="py-20" aria-labelledby="register-title">
        <h2 id="register-title" className="smallcaps">
          The Register of Readers
        </h2>
        <p className="measure mt-6 text-2xl leading-snug text-paper">
          The text grows. Leave an address and you are entered, with a number, and you hear from the house
          when there is more to read.
        </p>
        <p className="measure mt-5" style={{ color: 'var(--paper-dim)' }}>
          No date is set for the bound edition, and none will be announced until it is decided. No count is
          shown until it is real. The first hundred readers are named in the Register itself, in the fiction,
          and whatever the bound edition costs when it is finally priced, they pay that and never more.
        </p>
        <div className="mt-10 max-w-xl">
          <Register />
        </div>
      </section>
    </>
  )
}
