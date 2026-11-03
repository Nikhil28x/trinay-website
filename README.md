# Trinay Services & Solutions

The active website project is `/Users/nwork/cosol/website`.

SvelteKit website rebuilt around the supplied Field Notes concept, the updated Trinay deck and the requested service structure. The design uses cream, forest and gold, a professional sans-serif family, responsive layouts, an animated infrastructure hero and light centered logo silhouettes.

## Local development

```sh
cd /Users/nwork/cosol/website
npm run dev -- --host 127.0.0.1 --port 5173
```

Open `http://127.0.0.1:5173/`.

## Verification and production build

```sh
npm run check
npm run build
```

The existing Cloudflare adapter stages output into `dist/`. The Vercel environment retains its existing adapter path.

## Pages

- Home, About Trinay, Services, Capabilities, Contact
- Six service detail pages: IT Consulting, Cybersecurity, Information Security Audit, System Integration DC-WAN-IS, Corporate Training, AI & Data Engineering
- Existing privacy and terms pages
- Legacy security service URLs redirect to `/services/cybersecurity`

Capabilities cover customized training based on customer problems, AI enablement workshops, product walkthroughs, custom training decks and knowledge transfer.

## Content and assets

- `src/lib/data.ts`: service catalog, credential portfolio and existing Trinay contacts
- `src/routes/`: page content
- `src/app.css`: design system and centered watermarks
- `static/brand/trinay-logo.png`: original supplied logo
- `static/media/`: enterprise imagery from the earlier concepts
- `research/content-and-design.md`: research, sources and content decisions
- `research/verification.md`: verification record

The enquiry form prepares a message in the visitor’s email application. The visitor reviews and sends it. No backend email submission is configured.

Contact details were preserved from the original Trinay project. They were not independently reverified during this rebuild.
