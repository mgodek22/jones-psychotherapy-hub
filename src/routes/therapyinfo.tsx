import { createFileRoute, redirect } from "@tanstack/react-router";

/** 301 from the legacy Squarespace URL /therapyinfo to /explore. */
export const Route = createFileRoute("/therapyinfo")({
  server: {
    handlers: {
      GET: () => new Response(null, { status: 301, headers: { Location: "/explore" } }),
    },
  },
  beforeLoad: () => {
    throw redirect({ to: "/explore", statusCode: 301 });
  },
});
