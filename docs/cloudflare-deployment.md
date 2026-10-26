# Deploy SHAMS Technology on Cloudflare

This branch keeps Next.js and the existing Resend contact form. It uses the
OpenNext adapter for Cloudflare Workers. Content pages are prerendered and use
the read-only static asset cache; no database, R2 bucket, queue, or ISR service
is required. Publish content changes by rebuilding the site.

## Account setup

1. Create your own account at https://dash.cloudflare.com/.
2. Open Workers & Pages, create a Worker, and connect GitHub.
3. Grant Cloudflare access to `ferial29/shams-technology`.
4. Select the migration branch for the initial test, then use `main` after merging.
5. Use Node.js 22 or newer (set `NODE_VERSION=22` in build variables).
6. Set the build command to `npm run build:cloudflare` and the deploy command
   to `npm run deploy:cloudflare`. This is a **Worker**, not a Pages static site.
7. Before building, set `NEXT_PUBLIC_SITE_URL` in build variables to the actual
   public HTTPS URL. You can use the assigned workers.dev URL before buying a
   domain. Rebuild whenever changing this value: it is baked into robots.txt
   and sitemap.xml.

## Contact form

In the Worker's runtime Variables and Secrets settings, configure:

- `RESEND_API_KEY`: a secret containing your existing Resend API key.
- `CONTACT_FROM_EMAIL`: the sender address verified in Resend.

These are runtime secrets, not public build variables. Never put a real key in
GitHub or this document. Existing Vercel variables do not transfer automatically.
The recipient remains the address already configured in the contact route.
Until both settings are present, valid submissions return HTTP 503.
When using your new domain as the sender, add the DNS verification records
provided by Resend and wait for verification before changing the sender.

## Preview locally

```bash
npm ci
cp .env.example .env.local
cp .dev.vars.example .dev.vars
# Fill in local settings if testing email; do not commit either file.
npm run typecheck
npm run preview:cloudflare
```

Preview runs the built application in Cloudflare's Workers runtime. For a CLI
deployment, run `npx wrangler login`, `npm run build:cloudflare`, then
`npm run deploy:cloudflare`. Deployment changes the public Worker.

## Cost and limits

- Try the free Workers plan first. The dry-run bundle is about 5.3 MiB
  uncompressed, within the current 64 MiB limit. CPU time, startup time, and
  request limits still need checking on the live account; Workers Free allows
  10 ms CPU per request and 100,000 Worker requests per day.
- Workers Paid starts at $5/month before tax, with usage charges above included
  allowances. This is a base price, not an unlimited or guaranteed total.
- Next Image uses the `IMAGES` binding. Check Cloudflare Images allowances and
  pricing separately; enabling Workers Paid does not make all image operations free.
- Domain registration, business email, and Resend usage are separate costs.
- Review usage after launch and configure available billing notifications.

## Domain and launch checks

1. Buy the domain in your own account with Cloudflare Registrar or another registrar.
2. If bought elsewhere, add the domain to Cloudflare and follow its nameserver setup.
3. In the Worker, open Settings > Domains & Routes and add the custom domain.
4. Configure both root and www, redirecting one to the chosen primary address.
5. Update `NEXT_PUBLIC_SITE_URL` to the primary HTTPS address and rebuild.
6. Verify home, about, services, work, Beauty Hub, blog articles, and a missing URL.
7. Verify project images, `/robots.txt`, and `/sitemap.xml`.
8. Submit a real contact inquiry yourself and confirm receipt and reply-to behavior.
   This sends email and has intentionally not been done by the migration checks.
9. Keep the Vercel deployment until Cloudflare and the new domain pass these checks.

No Cloudflare deployment, subscription purchase, domain registration, or DNS change
is performed merely by merging this branch.

## Migration verification

- TypeScript check and full OpenNext production build passed.
- Wrangler deployment dry run passed: 5,379 KiB uncompressed, 1,105 KiB gzip.
- Local Workers runtime returned HTTP 200 for the main pages, Beauty Hub,
  a blog article, robots.txt, and sitemap.xml; an unknown URL returned 404.
- Contact validation returned 400 for invalid input and 503 for valid input
  without email secrets. No email was sent.
- Live image optimization, actual email delivery, CPU usage, and custom-domain
  HTTPS still require verification on the Cloudflare account after deployment.
