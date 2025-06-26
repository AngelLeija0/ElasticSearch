<template>
    <section id="search" class="w-full flex flex-col">
        <div class="w-full h-full max-w-100 mx-auto mb-20 flex justify-center select-none">
            <input v-model="searchQuery" @input="onInput" placeholder="Search a movie"
                class="text-sm w-full px-4 py-3 rounded-lg background-blur focus:border-none" autocomplete="off" />
        </div>
        <div v-if="!loading" class="flex flex-col w-full gap-8">
            <div class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <MovieCard v-for="(movie, i) in moviesList" :movie="movie" :key="movie.id" @select="openMovieModal" />
            </div>
            <div class="col-span-4 flex justify-center">
                <button type="button"
                    class="bg-black dark:bg-white dark:hover:bg-zinc-200 px-8 py-2.5 cursor-pointer text-base rounded-lg text-white dark:text-black font-medium select-none disabled:opacity-50 disabled:cursor-not-allowed"
                    @click="incrementMoviesQuantity" :disabled="moviesQuantity >= 100000">Load more</button>
            </div>
        </div>
        <div v-else class="w-full flex flex-col items-center min-h-80 py-10">
            <svg class="animate-spin [animation-duration:1.5s] size-10" width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 6l0 -3" />
                <path d="M16.25 7.75l2.15 -2.15" />
                <path d="M18 12l3 0" />
                <path d="M16.25 16.25l2.15 2.15" />
                <path d="M12 18l0 3" />
                <path d="M7.75 16.25l-2.15 2.15" />
                <path d="M6 12l-3 0" />
                <path d="M7.75 7.75l-2.15 -2.15" />
            </svg>
            <p class="text-sm text-zinc-800 dark:text-zinc-200 mt-8">Loading movies</p>
        </div>
        <MovieModal :movie="selectedMovie" @close="selectedMovie = null" />
    </section>
</template>

<script>
import { ref, onMounted } from 'vue';
import MovieCard from './MovieCard.vue';
import MovieModal from './MovieModal.vue';

export default {
    name: "Movies",
    components: {
        MovieCard,
        MovieModal
    },
    setup() {
        const loading = ref(true);
        const moviesList = ref([]);
        const moviesQuantity = ref(40);
        const selectedMovie = ref(null);
        const searchQuery = ref("");

        const getMovies = async () => {
            if (moviesList.lenght == 0) loading.value = true;
            const response = await fetch(`${window.location.origin}/api/movies.json?pageSize=${moviesQuantity.value}`);
            moviesList.value = await response.json();
            loading.value = false;
        };

        const searchMovies = async () => {
            const query = searchQuery.value;
            if (!query) {
                await getMovies();
                return;
            }
            const response = await fetch(`${window.location.origin}/api/search.json?q=${encodeURIComponent(query)}&pageSize=${moviesQuantity.value}`);
            moviesList.value = await response.json();
        };

        const onInput = async (e) => {
            const value = e.target.value;
            if (!value.trim()) {
                await getMovies();
            } else {
                searchQuery.value = value;
                await searchMovies();
            }
        };

        const openMovieModal = (movie) => {
            selectedMovie.value = movie;
        };

        const incrementMoviesQuantity = async () => {
            const currentQuantity = Number(moviesQuantity.value) || 0;
            const newQuantity = currentQuantity + 24;

            moviesQuantity.value = newQuantity;

            if (searchQuery.value && searchQuery.value.trim()) {
                await searchMovies();
            } else {
                await getMovies();
            }
        }

        onMounted(async () => {
            await getMovies();
        });

        return {
            loading,
            moviesList,
            moviesQuantity,
            onInput,
            selectedMovie,
            openMovieModal,
            searchQuery,
            incrementMoviesQuantity
        };
    }
}
</script>