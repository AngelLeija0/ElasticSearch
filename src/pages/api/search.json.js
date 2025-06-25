import BonsaiSearch from "./services/BonsaiSearch";

export async function GET({ url }) {
  const query = url.searchParams.get('q');

  if (!query) {
    return new Response(JSON.stringify({ error: 'Missing search query' }), {
      status: 400,
    });
  }
  
  try {
    const movies = await BonsaiSearch.searchMovies(query);

    return new Response(JSON.stringify(movies), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: 'Search failed' }), {
      status: 500,
    });
  }
}
