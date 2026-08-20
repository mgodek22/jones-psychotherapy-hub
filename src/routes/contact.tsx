import { createFileRoute, redirect } from "@tanstack/react-router";

/** 301 from the legacy Squarespace URL /contact to /book. */
export const Route = createFileRoute("/contact")({
  server: {
    handlers: {
      GET: () => new Response(null, { status: 301, headers: { Location: "/book" } }),
    },
  },
  beforeLoad: () => {
    throw redirect({ to: "/book", statusCode: 301 });
  },
});
