import { B as BonsaiSearch } from '../../chunks/BonsaiSearch_DxCyUKBv.mjs';
import { c as checkInternalRequest } from '../../chunks/origin_TOhBSMaK.mjs';
import { c as checkInternalKey } from '../../chunks/internal-key_CWfxi4Xm.mjs';
export { renderers } from '../../renderers.mjs';

async function GET({ url, request }) {
  const authError = checkInternalRequest(request);
  if (authError) return authError;

  if (!checkInternalKey(request)) {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    const pageSize = url.searchParams.get("pageSize");
    const status = url.searchParams.get("status") || null;
    const language = url.searchParams.get("language") || null;
    const genres = url.searchParams.get("genres") || null;

    const movies = await BonsaiSearch.getMovies({ pageSize, status, language, genres });

    return new Response(JSON.stringify(movies), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Error fetching movies" }), {
      status: 500,
    });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
