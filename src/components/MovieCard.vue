<template>
  <article :id="`movie-card-${movie.id}`" class="movie-card relative cursor-pointer hover:scale-105 transition-transform duration-300 aspect-[9/12]" @click="$emit('select', movie)">
    <div class="relative select-none">
      <div v-if="!imageLoaded" class="w-full h-full bg-zinc-700 animate-pulse rounded-lg"></div>
      <img
        v-show="imageLoaded"
        :src="imageUrl(movie.poster_path)"
        :alt="movie.title"
        width="100"
        height="150"
        class="movie-card-image w-full h-auto rounded-lg shadow-lg object-cover"
        @load="onImageLoad"
      />
      <div class="absolute bottom-0 left-0 w-full h-1/2 rounded-b-lg bg-gradient-to-t from-zinc-300 dark:from-black via-white/80 dark:via-black/80 to-transparent z-10"></div>
    </div>
    <div class="absolute bottom-0 left-0 w-full px-6 pb-8 z-20 flex flex-col">
      <h2 class="text-xl font-semibold text-black dark:text-white drop-shadow-md">
        {{ movie.title }}
      </h2>
    </div>
  </article>
</template>

<script>
import { ref } from 'vue';
import { IMAGE_SERVICE } from 'astro:env/client';

export default {
  name: "MovieCard",
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  setup() {
    const imageLoaded = ref(false);
    function onImageLoad() {
      imageLoaded.value = true;
    }
    function imageUrl(path) {
      return `${IMAGE_SERVICE}${path}`;
    }
    return { imageLoaded, onImageLoad, imageUrl };
  }
};
</script>