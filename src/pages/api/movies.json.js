import BonbasiSearch from "./services/BonsaiSearch";
import { checkInternalRequest } from "./middlewares/origin";
import { checkInternalKey } from "./middlewares/internal-key";

export async function GET({ url, request }) {
  const authError = checkInternalRequest(request);
  if (authError) return authError;

  if (!checkInternalKey(request)) {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    const pageSize = url.searchParams.get("pageSize")
    const status = url.searchParams.get("status") || null;
    const language = url.searchParams.get("language") || null;
    const genres = url.searchParams.get("genres") || null;

    const movies = await BonbasiSearch.getMovies({ pageSize, status, language, genres });

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
