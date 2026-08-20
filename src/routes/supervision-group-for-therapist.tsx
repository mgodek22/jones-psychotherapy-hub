import { createFileRoute, redirect } from "@tanstack/react-router";

/** 301 from the legacy Squarespace URL /supervision-group-for-therapist to /book. */
export const Route = createFileRoute("/supervision-group-for-therapist")({
  server: {
    handlers: {
      GET: () => new Response(null, { status: 301, headers: { Location: "/book" } }),
    },
  },
  beforeLoad: () => {
    throw redirect({ to: "/book", statusCode: 301 });
  },
});
