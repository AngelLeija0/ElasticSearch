<template>
    <section id="search" class="w-full flex flex-col">
        <div class="w-full h-full max-w-100 mx-auto mb-20 flex justify-center select-none">
            <input @input="onInput" placeholder="Search a movie" class="text-sm w-full px-4 py-3 rounded-lg background-blur focus:border-none"
                autocomplete="off" />
        </div>
        <div class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <MovieCard v-for="(movie, i) in moviesList" :movie="movie" :key="movie.id" @select="openMovieModal" />
        </div>

        <MovieModal :movie="selectedMovie" @close="selectedMovie = null" />
    </section>
</template>

<script>
import { ref, onMounted, nextTick } from 'vue';
import MovieCard from './MovieCard.vue';
import MovieModal from './MovieModal.vue';

import { gsap } from 'gsap';
import { Flip } from 'gsap/dist/Flip';
gsap.registerPlugin(Flip);

export default {
    name: "Movies",
    components: {
        MovieCard,
        MovieModal
    },
    setup() {
        const moviesList = ref([]);
        const selectedMovie = ref(null);

        const getMovies = async () => {
            const response = await fetch(`${window.location.origin}/api/movies.json?pageSize=24`);
            moviesList.value = await response.json();
        };

        const searchMovies = async (query) => {
            if (!query) {
                await getMovies();
                return;
            }
            const response = await fetch(`${window.location.origin}/api/search.json?q=${encodeURIComponent(query)}`);
            moviesList.value = await response.json();
        };

        const onInput = (e) => {
            const value = e.target.value;
            if (!value.trim()) {
                getMovies();
            } else {
                searchMovies(value.trim());
            }
        };

        const openMovieModal = (movie) => {
            selectedMovie.value = movie;
        }

        onMounted(async () => {
            await getMovies();
        });

        return {
            moviesList,
            onInput,
            selectedMovie,
            openMovieModal
        };
    }
}
</script>