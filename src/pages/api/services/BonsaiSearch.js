import { BONSAI_URL, BONSAI_USERNAME, BONSAI_PASSWORD } from "astro:env/server";

class BonsaiSearch {
  constructor() {
    this.API_URL = `${BONSAI_URL}/movies/_search`;
  }

  _getAuthHeaders() {
    try {
      const credentials = btoa(`${BONSAI_USERNAME}:${BONSAI_PASSWORD}`);
      return {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/json",
      };
    } catch (error) {
      throw new Error("Error generating auth headers");
    }
  }

  async getMovies({ pageSize = 24, status = "", language = "", genres = "" } = {}) {
    try {
      const filters = [];

      if (status) {
        filters.push({ term: { status } });
      }

      if (language) {
        filters.push({ term: { original_language: language } });
      }

      const should = [];

      if (genres) {
        const genresArray = genres.split(",").map((g) => g.trim());

        genresArray.forEach((genre) => {
          should.push({
            match_phrase: {
              genres: genre,
            },
          });
        });
      }

      const body = {
        query: {
          bool: {
            filter: filters,
            ...(should.length > 0 && {
              should,
              minimum_should_match: 1,
            }),
          },
        },
        sort: [{ popularity: "desc" }],
        size: pageSize || 24,
      };

      const result = await fetch(this.API_URL, {
        method: "POST",
        headers: this._getAuthHeaders(),
        body: JSON.stringify(body),
      });

      const data = await result.json();
      const dataFormatted = data.hits.hits.map((hit) => hit._source);

      return dataFormatted;
    } catch (err) {
      console.error(err);
      return new Response(JSON.stringify({ error: "Error fetching movies" }), {
        status: 500,
      });
    }
  }

  async getMovieById(id) {
    try {
      if (!id) throw new Error("No ID provided");
      const body = {
        query: {
          term: { id: id }
        },
        size: 1
      };
      const result = await fetch(this.API_URL, {
        method: "POST",
        headers: this._getAuthHeaders(),
        body: JSON.stringify(body),
      });
      const data = await result.json();
      if (data.hits.hits.length === 0) {
        return null;
      }
      return data.hits.hits[0]._source;
    } catch (error) {
      throw new Error("Error fetching movie by ID: " + error.message);
    }
  }

  async searchMovies(query = "") {
    if (!query) {
      return [];
    }

    try {
      const result = await fetch(`${this.API_URL}?q=${query}&size=${10}`, {
        method: "GET",
        headers: this._getAuthHeaders(),
      });

      const data = await result.json();
      const dataFormatted = data.hits.hits.map((hit) => hit._source);

      return dataFormatted;
    } catch (err) {
      throw new Error("Error searching movies: " + err.message);
    }
  }
}

export default new BonsaiSearch();