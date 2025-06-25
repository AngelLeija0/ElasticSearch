<template>
    <div v-if="movie?.id" class="hidden lg:block w-full h-full fixed inset-0 z-50 bg-black/70" />
    <Transition name="modal">
        <div v-if="movie?.id" :id="`movie-modal-${movie.id}`"
            class="fixed inset-0 z-50 flex items-center justify-center lg:p-4" @click.self="handleClose">
            <button
                class="absolute top-4 right-5 z-70 size-5 text-white hover:text-zinc-200 cursor-pointer"
                @click="handleClose">
                <svg class="w-full h-full" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M18 6l-12 12" />
                    <path d="M6 6l12 12" />
                </svg>
            </button>
            <div
                class="background-blur-no-hover flex flex-col md:flex-row gap-6 lg:gap-8 w-full lg:w-auto h-full lg:h-auto p-4 lg:p-0 lg:pr-8 rounded-xl overflow-hidden relative">
                <div class="lg:w-[450px] h-1/2 mx-auto lg:mx-none lg:h-full flex items-center justify-center relative aspect-[9/14]">
                    <div v-if="!imageLoaded"
                        class="w-full h-full absolute inset-0 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 animate-pulse rounded-lg">
                        <div class="w-full h-full bg-zinc-200 dark:bg-zinc-700 rounded-lg"></div>
                    </div>
                    <img :src="imageUrl" :alt="movie.title" width="100" height="100"
                        class="w-full h-full object-cover object-top lg:object-center aspect-auto"
                        crossorigin="anonymous" @load="handleImageLoad"
                        :style="{ visibility: imageLoaded ? 'visible' : 'hidden' }" />
                </div>
                <div class="w-full md:w-2/3 lg:w-120 flex flex-col lg:py-6 h-full">
                    <div class="flex flex-col mb-4">
                        <h2 class="text-5xl font-semibold mb-4">
                            {{ movie.title }}
                        </h2>
                        <h3 class="text-base text-zinc-700 dark:text-zinc-300 mb-1">
                            Original title: {{ movie.original_title }}
                        </h3>
                        <p class="text-base text-zinc-700 dark:text-zinc-300">
                            {{ formatDateToMonthYear(movie.release_date) }}&nbsp; • &nbsp; {{
                                formatRuntime(movie.runtime)
                            }}
                            &nbsp; • &nbsp;{{ String(movie.original_language).toUpperCase() }}
                        </p>
                    </div>
                    <div v-if="genresList.length > 0" class="flex flex-wrap gap-1.5">
                        <span v-for="(genre, i) in genresList" :key="i + 1"
                            class="text-sm text-zinc-700 dark:text-zinc-300 border border-zinc-400 dark:border-zinc-700 py-1 px-3 rounded-full">
                            {{ genre }}
                        </span>
                    </div>
                    <p class="text-base text-zinc-700 dark:text-zinc-300 mt-2 mb-4">{{ movie.overview }}</p>
                    <a :href="`https://www.imdb.com/es/title/${movie.imdb_id}`" class="w-fit">
                        <img src="/imdb-logo.svg" alt="IMDb Logo" srcset="">
                    </a>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import { formatDateToMonthYear, formatRuntime } from '@/lib/utils';

export default {
    name: "MovieModal",
    props: {
        movie: {
            type: Object,
            default: {}
        },
        fromElement: {
            type: [Object, null],
            default: null
        }
    },
    emits: ["close"],
    setup(props) {
        const movie = ref(props.movie);
        const imageLoaded = ref(false);
        const imageUrl = ref("");
        const genresList = ref([]);

        function handleImageLoad() {
            imageLoaded.value = true;
        }

        function playAnimation() {
            const fromElement = document.querySelector(`#movie-card-${movie.id}`);
            const currentElement = document.querySelector(`#movie-modal-${movie.id}`);

            console.log({ fromElement, currentElement })

            if (!fromElement || !currentElement) return;

            const state = Flip.getState(fromElement);
            let timeLine = Flip.from(state, {
                duration: 0.5,
                ease: "power2.inOut",
                absolute: true,
                scale: true,
            });
            timeLine.play();
        }

        watch(
            () => props.movie,
            (newMovie) => {
                if (imageLoaded.value) {
                    imageLoaded.value = false;
                }
                movie.value = newMovie;
                imageUrl.value = `api/images.json?path=${newMovie?.poster_path}`;
                genresList.value = newMovie?.genres.split(',').map(g => g.trim()) || [];
                if (newMovie?.id) {
                    playAnimation();
                }
            },
            { immediate: true }
        );

        return {
            movie,
            imageUrl,
            genresList,
            formatDateToMonthYear,
            formatRuntime,
            imageLoaded,
            handleImageLoad,
            playAnimation
        }
    },
    methods: {
        handleClose() {
            this.$emit('close');
        }
    }
}
</script>