import BonsaiSearch from "./services/BonsaiSearch";
import { checkInternalRequest } from "./middlewares/origin";
import { checkInternalKey } from "./middlewares/internal-key";

export async function GET({ url, request }) {
  const authError = checkInternalRequest(request);
  if (authError) return authError;

  if (!checkInternalKey(request)) {
    return new Response("Unauthorized", { status: 401 });
  }

  const query = url.searchParams.get("q");
  const pageSize = url.searchParams.get("pageSize") || 24;

  if (!query) {
    return new Response(JSON.stringify({ error: "Missing search query" }), {
      status: 400,
    });
  }

  try {
    const movies = await BonsaiSearch.searchMovies({ query, pageSize });

    return new Response(JSON.stringify(movies), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Search failed" }), {
      status: 500,
    });
  }
}
