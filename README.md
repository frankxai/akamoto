# Akamoto

The forgotten Prophecies of Darkness and Light. A work of fiction in the world of Arcanea, published at akamoto.io.

Next.js 16, TypeScript, pnpm. Waitlist runs on the estate's shared `demand-capture` package (vendored in `lib/demand-capture`, product id `akamoto-prophecies`). Needs `KV_REST_API_URL`, `KV_REST_API_TOKEN`, `RESEND_API_KEY`, and `RESEND_AUDIENCE_ID` to take names; without them the Register renders and reports that it is not taking names yet. Optionally, use `RESEND_AUDIENCE_ID__AKAMOTO_PROPHECIES` as a product-specific audience ID override. `NEXT_PUBLIC_SITE_URL` is an optional metadata/SEO configuration defaulting to https://akamoto.io.

```
pnpm install
pnpm dev
pnpm build
pnpm type-check
node --test
```
