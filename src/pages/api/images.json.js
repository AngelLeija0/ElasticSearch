import { IMAGE_SERVICE } from "astro:env/client";
import { checkInternalRequest } from "./middlewares/origin";

export async function GET({ url, request }) {
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
