<template>
    <section id="search" class="w-full flex flex-col min-h-100">
        <div class="w-full h-full max-w-100 mx-auto mb-6 flex justify-center select-none">
            <input v-model="searchQuery" @input="onInput" placeholder="Search a movie"
                class="text-sm w-full px-4 py-3 rounded-lg background-blur border border-zinc-400/50 dark:border-zinc-700/50 transition-colors"
                autocomplete="off" />
        </div>
        <div class="w-full flex flex-wrap justify-center gap-1.5 px-2 mb-8">
            <button v-for="(genre, i) in movieGenres" :key="i + 1" type="button" @click="handleGenreFilter(genre)"
                :class="`${isGenreActive(genre) ? 'text-white bg-black dark:text-black dark:bg-white border-transparent pl-2 pr-1.5' : 'text-zinc-800 dark:text-zinc-200 border-zinc-400/50 dark:border-zinc-600/50 px-4'} flex items-center gap-1.5 cursor-pointer text-sm text-nowrap py-1 rounded-lg border transition-colors`">
                {{ genre }}
                <svg v-if="isGenreActive(genre)" class="size-3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M18 6l-12 12" />
                    <path d="M6 6l12 12" />
                </svg> 
                </button>
        </div>
        <div v-if="!loading" class="flex flex-col w-full">
            <div v-if="moviesList.length > 0" class="flex flex-col w-full gap-8">
                <div class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <MovieCard v-for="(movie, i) in moviesList" :movie="movie" :key="movie.id"
                        @select="openMovieModal" />
                </div>
                <div class="col-span-4 flex justify-center">
                    <button type="button"
                        class="bg-black dark:bg-white dark:hover:bg-zinc-200 px-8 py-2.5 cursor-pointer text-base rounded-lg text-white dark:text-black font-medium select-none disabled:opacity-50 disabled:cursor-not-allowed"
                        @click="incrementMoviesQuantity" :disabled="moviesQuantity >= 100000">Load more</button>
                </div>
            </div>
            <div v-else class="flex justify-center w-full">
                <p class="text-sm text-zinc-800 dark:text-zinc-200 mt-8">No movies found</p>
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
import { ref, onMounted, computed } from 'vue';
import MovieCard from './MovieCard.vue';
import MovieModal from './MovieModal.vue';

const movieGenres = [
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "History",
    "Horror",
    "Music",
    "Mystery",
    "Romance",
    "Science Fiction",
    "TV Movie",
    "Thriller",
    "War",
    "Western"
];

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
        const genreFilter = ref([]);
        const genreFilterString = computed(() => genreFilter.value.join(','));

        const getMovies = async () => {
            if (moviesList.length == 0) loading.value = true;
            const response = await fetch(`${window.location.origin}/api/movies.json?pageSize=${moviesQuantity.value}${genreFilter.value.length > 0 ? `&genres=${genreFilterString.value}` : ''}`);
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
        };

        const handleGenreFilter = async (genre) => {
            if (!isGenreActive(genre)) {
                genreFilter.value.push(genre);
            } else {
                genreFilter.value = genreFilter.value.filter(g => g !== genre);
            }
            await getMovies();
        };

        const isGenreActive = (genre) => {
            return genreFilter.value.includes(genre);
        }

        onMounted(async () => {
            await getMovies();
        });

        return {
            loading,
            moviesList,
            moviesQuantity,
            movieGenres,
            onInput,
            selectedMovie,
            openMovieModal,
            searchQuery,
            incrementMoviesQuantity,
            handleGenreFilter,
            genreFilterString,
            isGenreActive
        };
    }
}
</script>