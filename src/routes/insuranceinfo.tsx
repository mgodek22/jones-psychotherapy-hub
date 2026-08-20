import { createFileRoute, redirect } from "@tanstack/react-router";

/** 301 from the legacy Squarespace URL /insuranceinfo to /fees. */
export const Route = createFileRoute("/insuranceinfo")({
  server: {
    handlers: {
      GET: () => new Response(null, { status: 301, headers: { Location: "/fees" } }),
    },
  },
  beforeLoad: () => {
    throw redirect({ to: "/fees", statusCode: 301 });
  },
});
