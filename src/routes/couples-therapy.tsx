import { createFileRoute, redirect } from "@tanstack/react-router";

/** 301 from the legacy Squarespace URL /couples-therapy to /couples. */
export const Route = createFileRoute("/couples-therapy")({
  server: {
    handlers: {
      GET: () => new Response(null, { status: 301, headers: { Location: "/couples" } }),
    },
  },
  beforeLoad: () => {
    throw redirect({ to: "/couples", statusCode: 301 });
  },
});
