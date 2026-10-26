import { prophecies } from '@/content/prophecies'

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://akamoto.io'

export async function GET() {
  const lines = [
    '# Akamoto',
    '',
    '> The forgotten Prophecies of Darkness and Light.',
    '',
    '## Routes',
    '',
    `- [Home](${SITE}/)`,
  ]

  for (const p of prophecies) {
    lines.push(`- [${p.numeral}. ${p.title}](${SITE}/prophecies/${p.slug})`)
  }

  return new Response(lines.join('\n') + '\n', {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
