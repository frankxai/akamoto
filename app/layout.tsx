import type { Metadata } from 'next'
import { Baskervville } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const baskervville = Baskervville({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-baskervville',
  display: 'swap',
})

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://akamoto.io'

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: 'Akamoto — The forgotten Prophecies of Darkness and Light',
    template: '%s — Akamoto',
  },
  description:
    'Three prophecies struck from the teaching, readable in full. A work of fiction in the world of Arcanea. The Register of Readers is open.',
  openGraph: {
    type: 'website',
    siteName: 'Akamoto',
    title: 'Akamoto — The forgotten Prophecies of Darkness and Light',
    description: 'Three prophecies struck from the teaching, readable in full. A work of fiction in the world of Arcanea.',
    url: SITE,
  },
  twitter: { card: 'summary' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={baskervville.variable}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-3 focus:py-2"
        >
          Skip to the text
        </a>
        <header className="mx-auto flex w-full max-w-3xl flex-wrap items-baseline justify-between gap-x-8 gap-y-3 px-6 pt-8 sm:px-8">
          <Link href="/" className="smallcaps" style={{ color: 'var(--paper)' }}>
            Akamoto
          </Link>
          <nav aria-label="Primary" className="flex gap-5 sm:gap-6">
            <Link href="/#prophecies" className="smallcaps hover:text-paper">
              Prophecies
            </Link>
            <Link href="/#register" className="smallcaps hover:text-paper">
              Register
            </Link>
            <Link href="#colophon" className="smallcaps hover:text-paper">
              Colophon
            </Link>
          </nav>
        </header>
        <main id="main" className="mx-auto w-full max-w-3xl px-6 sm:px-8">
          {children}
        </main>
        <footer id="colophon" className="mx-auto w-full max-w-3xl px-6 pb-16 sm:px-8" aria-labelledby="colophon-title">
          <div className="hairline" aria-hidden="true" />
          <h2 id="colophon-title" className="smallcaps pt-14">
            Colophon
          </h2>
          <div className="measure mt-6 space-y-3 text-[1rem]" style={{ color: 'var(--paper-dim)' }}>
            <p>Set in Baskervville, after Baskerville. Ground of ink, ink of paper. The green is jade, the house colour.</p>
            <p>
              Akamoto carries the texts. Nonakamito and Jade Green are the other voices of the house; their channels are
              their own.
            </p>
            <p>
              An independent work of fiction. Arcanea is the world it belongs to. Nothing here is a prediction of
              anything, which is rather the point.
            </p>
            <p>
              The Register keeps an address and, if given, three answers. Nothing is sold or shared, and every letter
              from the house carries a way to leave.{' '}
              <Link href="/#register" className="hover:text-paper" style={{ color: 'var(--jade)' }}>
                Enter the Register
              </Link>
              .
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
