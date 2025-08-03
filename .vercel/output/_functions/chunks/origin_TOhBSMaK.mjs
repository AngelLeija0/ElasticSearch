import { A as APP_URL } from './server_HtIMc0Z2.mjs';

function checkInternalRequest(request) {
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  checkInternalRequest
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _, checkInternalRequest as c };
