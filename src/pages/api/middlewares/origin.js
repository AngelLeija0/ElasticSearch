export function checkInternalRequest(request) {
  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");

  const allowedOrigin = "https://elastic-search-gray.vercel.app";

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

  return null; // Si pasa, no hay error
}