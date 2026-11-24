# Himalayan Cafe website

React 19 + Vite + Tailwind CSS v4 single-page site with routes `/`, `/menu` and `/gallery`.

## Local development

```bash
pnpm install
pnpm dev          # dev server on $PORT (default 8443)
pnpm typecheck    # TypeScript check
pnpm build        # production build into dist/
pnpm preview      # serve dist/ locally
```

No pnpm? Use `npx pnpm@10.34.3 <command>`. Node 22 or newer.

## Deploying

The build is a static site in `dist/`. Because routing happens in the browser, the host must
send unknown paths (such as `/menu`) to `index.html`. That is already configured for:

- **Vercel**: `vercel.json`. Import the folder or repo; settings are picked up automatically.
- **Netlify**: `netlify.toml`. Build command `pnpm run build`, publish directory `dist`.
- **Figma Make**: `.figma/make/deploy` publishes with `figma make deploy`.

For any other static host (Cloudflare Pages, S3 + CloudFront, nginx), set the build command to
`pnpm run build`, the output directory to `dist`, and a fallback from all paths to `/index.html`.

## Site settings

Page title, description, social image and search-engine indexing live in
`.figma/make/site.json` and are injected into `index.html` at build time.

Once the site has its own domain, change `openGraph.image` to the full URL
(for example `https://yourdomain.com/images/og-image.jpg`): some social networks ignore
relative image links in link previews.

`design-originals/` keeps the full-size source PNGs. It is not deployed.
