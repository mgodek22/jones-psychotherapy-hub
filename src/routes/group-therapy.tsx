import { createFileRoute, redirect } from "@tanstack/react-router";

/** 301 from the legacy Squarespace URL /group-therapy to /group. */
export const Route = createFileRoute("/group-therapy")({
  server: {
    handlers: {
      GET: () => new Response(null, { status: 301, headers: { Location: "/group" } }),
    },
  },
  beforeLoad: () => {
    throw redirect({ to: "/group", statusCode: 301 });
  },
});
