import { a as IMAGE_SERVICE } from '../../chunks/client_DoJatobG.mjs';
import { c as checkInternalRequest } from '../../chunks/origin_TOhBSMaK.mjs';
export { renderers } from '../../renderers.mjs';

async function GET({ url, request }) {
  const authError = checkInternalRequest(request);
  if (authError) return authError;

  const path = new URL(url).searchParams.get("path");

  if (!path) {
    return new Response("Missing path", { status: 400 });
  }

  const res = await fetch(`${IMAGE_SERVICE}${path}`);
  const contentType = res.headers.get("content-type");

  return new Response(res.body, {
    status: res.status,
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=86400",
    },
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
