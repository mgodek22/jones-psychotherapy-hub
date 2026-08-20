import { createFileRoute, redirect } from "@tanstack/react-router";

/** 301 from the legacy Squarespace URL /individual-therapy to /individual. */
export const Route = createFileRoute("/individual-therapy")({
  server: {
    handlers: {
      GET: () => new Response(null, { status: 301, headers: { Location: "/individual" } }),
    },
  },
  beforeLoad: () => {
    throw redirect({ to: "/individual", statusCode: 301 });
  },
});
