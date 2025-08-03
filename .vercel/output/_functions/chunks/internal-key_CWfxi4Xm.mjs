import { I as INTERNAL_API_KEY } from './client_DoJatobG.mjs';

function checkInternalKey(request) {
  const headerKey = request.headers.get("x-internal-access");
  return headerKey === INTERNAL_API_KEY;
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  checkInternalKey
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _, checkInternalKey as c };
