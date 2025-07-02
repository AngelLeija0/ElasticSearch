import { INTERNAL_API_KEY } from "astro:env/client"

export function checkInternalKey(request) {
  const headerKey = request.headers.get("x-internal-access");
  return headerKey === INTERNAL_API_KEY;
}