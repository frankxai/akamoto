import { test } from 'node:test'
import assert from 'node:assert'
import fs from 'node:fs'
import path from 'node:path'

test('SEO metadata and discoverability files', async (t) => {
  const SITE = 'https://akamoto.io'

  const contentFile = fs.readFileSync(path.join(process.cwd(), 'content/prophecies.ts'), 'utf8')
  const slugRegex = /slug: '([^']+)'/g

  const slugs = []
  let match
  while ((match = slugRegex.exec(contentFile)) !== null) {
    slugs.push(match[1])
  }

  await t.test('metadata includes unique canonical, title, and openGraph properties', async () => {
    const pageContent = fs.readFileSync(path.join(process.cwd(), 'app/page.tsx'), 'utf8')
    assert(pageContent.includes(`alternates: { canonical: '/' }`), 'Home page missing canonical')
    assert(pageContent.includes(`openGraph: {`), 'Home page missing openGraph')
    assert(pageContent.includes(`url: '/'`), 'Home page missing openGraph url')
    assert(pageContent.includes(`title:`), 'Home page missing title')
    assert(pageContent.includes(`description:`), 'Home page missing description')
    assert(pageContent.includes(`'@type': 'WebSite'`), 'Home page missing WebSite JSON-LD')
    assert(!pageContent.includes(`'@type': 'Product'`), 'Home page missing Product JSON-LD')

    const prophecyContent = fs.readFileSync(path.join(process.cwd(), 'app/prophecies/[slug]/page.tsx'), 'utf8')
    assert(prophecyContent.includes(`alternates: { canonical: url }`), 'Prophecy page missing canonical')
    assert(prophecyContent.includes(`openGraph: { title`), 'Prophecy page missing openGraph title')
    assert(prophecyContent.includes(`'@type': 'WebPage'`), 'Prophecy page missing WebPage JSON-LD')
  })

  await t.test('sitemap includes all valid routes', () => {
    const sitemapContent = fs.readFileSync(path.join(process.cwd(), 'app/sitemap.ts'), 'utf8')
    assert(sitemapContent.includes(`url: \`\${SITE}/\``), 'Sitemap missing home route')
    assert(sitemapContent.includes(`url: \`\${SITE}/prophecies/\${p.slug}\``), 'Sitemap missing prophecy routes')
  })

  await t.test('llms.txt includes all valid routes', async () => {
    const llmsRouteContent = fs.readFileSync(path.join(process.cwd(), 'app/llms.txt/route.ts'), 'utf8')
    assert(llmsRouteContent.includes(`- [Home]`), 'llms.txt missing home route')
    assert(llmsRouteContent.includes(`\${p.slug}`), 'llms.txt missing prophecy routes')
  })
})
