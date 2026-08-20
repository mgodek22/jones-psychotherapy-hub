Port the existing Jones Psychotherapy static site into the TanStack Start project.

## Goals
- Recreate every page from the current source (GitHub HTML files) as a TanStack Start route.
- Preserve all text content, metadata, and URL structure as closely as possible.
- Replace the Squarespace HTML/CSS with a clean, maintainable React/Tailwind design system.
- Keep SEO intact via route-level `head()` metadata, redirects, and a regenerated sitemap/robots.txt.

## Pages to port
From the provided list, create routes for:
- Home: `/`
- About: `/about`
- Arlington: `/arlington`
- McLean: `/mclean`
- Couples: `/couples`
- Individual: `/individual`
- Group: `/group`
- EMDR: `/what-is-emdr`
- Group therapy: `/what-is-group-therapy`
- IFS: `/what-is-ifs`
- LCSW: `/what-is-lcsw`
- FAQ: `/faq`
- Fees: `/fees`
- Good Faith Estimate: `/good-faith-estimate`
- No Surprises Act: `/no-surprises-act`
- Book: `/book`
- Blog index: `/blog`
- Blog posts: `/blog/how-couples-therapy-works`, `/blog/how-to-find-a-therapist-northern-virginia`, etc. (all posts listed)
- Resources: `/resources`
- Guide: `/guide`
- Explore: `/explore`
- Privacy Policy: `/privacy-policy`

## Technical approach
1. **Acquire source content**
   - The user will provide the GitHub repository URL, or
   - I will fetch the equivalent HTML from the public pages if available.
2. **Extract content and metadata**
   - Parse each HTML file for text, headings, images, links, and `<title>`/meta description.
3. **Build routes and components**
   - Create one route file per page under `src/routes/`.
   - Add a shared site layout with header, footer, and navigation in `__root.tsx`.
   - Use Tailwind CSS design tokens and shadcn/ui components for the new UI.
4. **SEO / redirects**
   - Define `head()` metadata for every route.
   - Decide on URL strategy: clean paths (`/about`) vs. original `.html` paths.
   - If clean paths are chosen, implement redirects from the old `.html` URLs using TanStack Start route loaders or a server function.
   - Update `public/robots.txt` and create `src/routes/sitemap.xml.ts` reflecting all routes.
5. **Images and assets**
   - Copy images (including `og-image.jpg`) into `public/` or `src/assets/` and update references.

## Open decisions
- URL path strategy (clean vs. `.html` vs. clean + redirects).
- Whether to make the blog posts dynamic or static.
- If a backend (Lovable Cloud) is needed for any forms (contact, booking, etc.)

## Success criteria
- The site preview shows all requested pages with the original content intact.
- Each route has its own title, description, and Open Graph metadata.
- Internal links use TanStack `<Link>`.
- Build completes with no errors.