import { createFileRoute, redirect } from "@tanstack/react-router";

/** 301 from the legacy Squarespace URL /home to /. */
export const Route = createFileRoute("/home")({
  server: {
    handlers: {
      GET: () => new Response(null, { status: 301, headers: { Location: "/" } }),
    },
  },
  beforeLoad: () => {
    throw redirect({ to: "/", statusCode: 301 });
  },
});
