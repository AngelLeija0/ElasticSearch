import { APP_URL } from "astro:env/server"

export function checkInternalRequest(request) {
  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");

  const allowedOrigin = APP_URL;

  if (
    origin && origin !== allowedOrigin ||
    referer && !referer.startsWith(allowedOrigin)
  ) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return null;
}