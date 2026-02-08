# lawncegoh.github.io

Dark digital garden for Lawrence Goh powered by Next.js, MDX, Tailwind CSS, and shadcn/ui. Notes and memory entries live next to the codebase and render through the App Router.

## Getting started

```bash
npm install
npm run dev
```

The site runs at `http://localhost:3000`. It ships as a static export (`out/`) so it can be deployed directly to GitHub Pages.

## Project structure

- `app/` – App Router routes for Home, Notes, Memory, Projects, Experience, and Accolades.
- `components/` – Reusable UI primitives, MDX renderer, note filters, and layout elements.
- `content/` – Source MDX for notes (`/notes`) and memory entries (`/memory`). Each file includes frontmatter.
- `data/projects.ts` – Placeholder card data for the projects index.
- `legacy_jekyll/` – Archived copy of the previous Jekyll site for reference.

## Writing notes & memories

1. Add a new `.mdx` file to `content/notes` or `content/memory`.
2. Include the required frontmatter fields:

   ```yaml
   ---
   title: New entry
   tags:
     - tag-one
     - tag-two
   created: 2024-06-01
   updated: 2024-06-01
   summary: Short blurb for list views.
   ---
   ```

3. Write MDX content below the frontmatter. Rendering happens through the lightweight parser in `lib/markdown.ts`.
4. Commit the change. Static pages regenerate during the next deploy.

## Deployment (GitHub Pages)

The workflow in `.github/workflows/deploy.yml` installs dependencies, builds, exports static HTML into `out/`, and publishes it to GitHub Pages. Push to `main` (or trigger manually) to deploy to `https://lawncegoh.github.io/`.

## Legacy site

The previous TechFolio/Jekyll implementation now lives under `legacy_jekyll/`. Nothing is deleted, so old content can be migrated into MDX over time.
