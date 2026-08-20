import { createFileRoute } from "@tanstack/react-router";

const DOMAIN = "https://www.jonespsychotherapy.com";

const PAGES = [
  "/",
  "/about",
  "/individual",
  "/couples",
  "/group",
  "/explore",
  "/fees",
  "/faq",
  "/book",
  "/guide",
  "/arlington",
  "/mclean",
  "/resources",
  "/what-is-lcsw",
  "/what-is-emdr",
  "/what-is-ifs",
  "/what-is-group-therapy",
  "/blog",
  "/blog/how-couples-therapy-works",
  "/blog/how-to-find-a-therapist-northern-virginia",
  "/blog/how-to-support-a-struggling-partner",
  "/blog/what-is-emdr",
  "/blog/what-is-group-therapy",
  "/blog/what-is-ifs",
  "/blog/what-to-expect-first-session",
  "/blog/what-to-expect-trauma-therapy",
  "/blog/why-high-functioning-anxiety",
  "/blog/why-out-of-network-therapy",
  "/privacy-policy",
  "/good-faith-estimate",
  "/no-surprises-act",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const urls = PAGES.map(
          (path) =>
            `  <url><loc>${DOMAIN}${path}</loc><changefreq>monthly</changefreq><priority>${
              path === "/" ? "1.0" : "0.8"
            }</priority></url>`,
        ).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml; charset=utf-8" },
        });
      },
    },
  },
});
