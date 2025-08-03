import { c as createComponent, m as maybeRenderHead, r as renderScript, b as renderTemplate, e as createAstro, f as addAttribute, g as renderComponent, h as renderHead, i as renderSlot } from '../chunks/astro/server_ER5m5TVx.mjs';
import 'kleur/colors';
/* empty css                                 */
import 'clsx';
import { a as IMAGE_SERVICE, I as INTERNAL_API_KEY } from '../chunks/client_DoJatobG.mjs';
import { ref, mergeProps, useSSRContext, watch, resolveComponent, computed, onMounted } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrIncludeBooleanAttr } from 'vue/server-renderer';
export { renderers } from '../renderers.mjs';

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 -left-0 w-full z-30 px-4"> <div class="background-blur rounded-lg mt-3 flex items-center justify-between max-w-300 mx-auto px-4 py-2"> <h1 class="text-xl font-semibold">ElasticWatch</h1> <div class="flex gap-2 items-center"> <button id="go-to-search-button" type="button" class="flex items-center justify-center p-2.5 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg cursor-pointer transition-colors"> <svg class="size-4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path><path d="M21 21l-6 -6"></path></svg> </button> <button id="theme-button" type="button" class="flex items-center justify-center p-2 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg cursor-pointer transition-colors"> <svg class="hidden dark:block size-5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path></svg> <svg class="block dark:hidden size-5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-moon"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path></svg> </button> </div> </div> </header> <button id="to-top-button" aria-label="Go up" class="hidden fixed bottom-4 right-4 z-20 text-white bg-blue-500 hover:bg-blue-600 p-2 rounded-lg cursor-pointer"> <svg class="size-5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6 15l6 -6l6 6"></path></svg> </button> ${renderScript($$result, "C:/Users/angel/Documents/04 Projects VSCode/04 ElasticWatch/elastic-watch-app/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/angel/Documents/04 Projects VSCode/04 ElasticWatch/elastic-watch-app/src/components/Navbar.astro", void 0);

const $$Astro$2 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/angel/Documents/04 Projects VSCode/04 ElasticWatch/elastic-watch-app/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/angel/Documents/04 Projects VSCode/04 ElasticWatch/elastic-watch-app/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title} - ElasticWatch</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body class="bg-white dark:bg-zinc-900 text-black dark:text-white"> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/angel/Documents/04 Projects VSCode/04 ElasticWatch/elastic-watch-app/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="w-full md:max-w-200 mx-auto mt-20 p-4 flex flex-col items-center"> <div class="flex flex-col items-center mb-4"> <h2 class="text-lg font-semibold mb-2 text-zinc-700 dark:text-zinc-300">ElasticWatch</h2> <p class="text-sm text-zinc-700 dark:text-zinc-300 text-center">
A web application to search for movies using an ElasticSearch-like search
      engine. Built with Astro, Vue.js, and Tailwind CSS. Movie data provided by <a href="https://www.themoviedb.org/" target="_blank" class="underline hover:text-blue-600 dark:hover:text-blue-400">TMDb</a>.
</p> </div> <div class="flex justify-center mb-2"> <h1 class="text-sm text-zinc-700 dark:text-zinc-300 font-medium">
&nbsp;
</h1> </div> </footer>`;
}, "C:/Users/angel/Documents/04 Projects VSCode/04 ElasticWatch/elastic-watch-app/src/components/Footer.astro", void 0);

const $$Home = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="w-full flex flex-col items-center relative mt-24"> <div class="flex flex-col items-center"> <h1 class="text-5xl font-bold mb-6 text-center">Search movies</h1> <p class="text-base text-center text-zinc-600 dark:text-zinc-400 font-medium mb-8">
Find among more than 200,000 movies using ElasticSearch.
</p> </div> </section> ${renderScript($$result, "C:/Users/angel/Documents/04 Projects VSCode/04 ElasticWatch/elastic-watch-app/src/components/Home.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/angel/Documents/04 Projects VSCode/04 ElasticWatch/elastic-watch-app/src/components/Home.astro", void 0);

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main$2 = {
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

function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<article${ssrRenderAttrs(mergeProps({
    id: `movie-card-${$props.movie.id}`,
    class: "movie-card relative cursor-pointer hover:scale-105 transition-transform duration-300 aspect-[9/12]"
  }, _attrs))}><div class="relative select-none">`);
  if (!$setup.imageLoaded) {
    _push(`<div class="w-full h-full bg-zinc-700 animate-pulse rounded-lg"></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<img style="${
    ssrRenderStyle(($setup.imageLoaded) ? null : { display: "none" })
  }"${
    ssrRenderAttr("src", $setup.imageUrl($props.movie.poster_path))
  }${
    ssrRenderAttr("alt", $props.movie.title)
  } width="100" height="150" class="movie-card-image w-full h-auto rounded-lg shadow-lg object-cover"><div class="absolute bottom-0 left-0 w-full h-1/2 rounded-b-lg bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div></div><div class="absolute bottom-0 left-0 w-full px-6 pb-8 z-20 flex flex-col"><h2 class="text-xl font-semibold text-white drop-shadow-md">${
    ssrInterpolate($props.movie.title)
  }</h2></div></article>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/MovieCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined
};
const MovieCard = /*#__PURE__*/_export_sfc(_sfc_main$2, [['ssrRender',_sfc_ssrRender$2]]);

function formatRuntime(minutes) {
  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;

  if (hrs > 0 && mins > 0) {
    return `${hrs}h ${mins} minutes`;
  } else if (hrs > 0) {
    return `${hrs}h`;
  } else {
    return `${mins} minutes`;
  }
}

function formatDateToMonthYear(dateString) {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "short" };
  return date.toLocaleDateString("en-US", options);
}

const _sfc_main$1 = {
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

            console.log({ fromElement, currentElement });

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
};

function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[-->`);
  if ($setup.movie?.id) {
    _push(`<div class="hidden lg:block w-full h-full fixed inset-0 z-40 bg-black/20"></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($setup.movie?.id) {
    _push(`<div${ssrRenderAttr("id", `movie-modal-${$setup.movie.id}`)} class="fixed inset-0 z-50 flex items-center justify-center lg:p-4"><button class="absolute top-4 right-5 z-70 size-5 text-black hover:text-zinc-800 dark:text-white dark:hover:text-zinc-200 cursor-pointer"><svg class="w-full h-full" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M18 6l-12 12"></path><path d="M6 6l12 12"></path></svg></button><div class="background-blur-no-hover flex flex-col md:flex-row gap-6 lg:gap-8 w-full lg:w-auto h-full lg:h-auto p-4 lg:p-0 lg:pr-8 rounded-xl overflow-hidden relative"><div class="lg:w-[450px] h-[45%] mx-auto lg:mx-none lg:h-full flex items-center justify-center relative aspect-[9/14]">`);
    if (!$setup.imageLoaded) {
      _push(`<div class="w-full h-full absolute inset-0 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 animate-pulse rounded-lg"><div class="w-full h-full bg-zinc-200 dark:bg-zinc-700 rounded-lg"></div></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<img${
      ssrRenderAttr("src", $setup.imageUrl)
    }${
      ssrRenderAttr("alt", $setup.movie.title)
    } width="100" height="100" class="w-full h-full object-cover object-top lg:object-center aspect-auto rounded-lg lg:rounded-none" crossorigin="anonymous" style="${
      ssrRenderStyle({ visibility: $setup.imageLoaded ? 'visible' : 'hidden' })
    }"></div><div class="w-full md:w-2/3 lg:w-120 flex flex-col lg:py-6 h-full"><div class="flex flex-col mb-4"><h2 class="text-5xl font-semibold mb-4 text-black dark:text-white">${
      ssrInterpolate($setup.movie.title)
    }</h2><h3 class="text-base text-zinc-900 dark:text-zinc-200 mb-1"> Original title: ${
      ssrInterpolate($setup.movie.original_title)
    }</h3><p class="text-base text-zinc-900 dark:text-zinc-200">`);
    if (String($setup.movie.status).toLocaleLowerCase() === 'released') {
      _push(`<!--[-->${ssrInterpolate($setup.formatDateToMonthYear($setup.movie.release_date))}<!--]-->`);
    } else {
      _push(`<span class="text-xs px-2 py-0.5 rounded-md text-white bg-red-500">Not released</span>`);
    }
    _push(`   •  ${
      ssrInterpolate($setup.formatRuntime($setup.movie.runtime))
    }   •  ${
      ssrInterpolate(String($setup.movie.original_language).toUpperCase())
    }</p></div>`);
    if ($setup.genresList.length > 0) {
      _push(`<div class="flex flex-wrap gap-1.5"><!--[-->`);
      ssrRenderList($setup.genresList, (genre, i) => {
        _push(`<span class="text-sm text-zinc-900 dark:text-zinc-200 border border-zinc-600 dark:border-zinc-300 py-1 px-3 rounded-full">${ssrInterpolate(genre)}</span>`);
      });
      _push(`<!--]--></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<p class="text-base text-zinc-900 dark:text-zinc-200 mt-2 mb-4 line-clamp-5 sm:line-clamp-6 md:line-clamp-none">${
      ssrInterpolate($setup.movie.overview)
    }</p><a${
      ssrRenderAttr("href", `https://www.imdb.com/es/title/${$setup.movie.imdb_id}`)
    } class="w-fit"><img src="/imdb-logo.svg" alt="IMDb Logo" srcset=""></a></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/MovieModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined
};
const MovieModal = /*#__PURE__*/_export_sfc(_sfc_main$1, [['ssrRender',_sfc_ssrRender$1]]);

const requestConfig = {
    headers: {
        "X-Internal-Access": INTERNAL_API_KEY
    }
};

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

const _sfc_main = {
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
            const response = await fetch(`/api/movies.json?pageSize=${moviesQuantity.value}${genreFilter.value.length > 0 ? `&genres=${genreFilterString.value}` : ''}`, requestConfig);
            if (response.status != 200) return loading.value = false;
            moviesList.value = await response.json();
            loading.value = false;
        };

        const searchMovies = async () => {
            const query = searchQuery.value;
            if (!query) {
                await getMovies();
                return;
            }
            const response = await fetch(`/api/search.json?q=${encodeURIComponent(query)}&pageSize=${moviesQuantity.value}`, requestConfig);
            if (response.status != 200) return loading.value = false;
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
        };

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
};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_MovieCard = resolveComponent("MovieCard");
  const _component_MovieModal = resolveComponent("MovieModal");

  _push(`<section${
    ssrRenderAttrs(mergeProps({
      id: "search",
      class: "w-full flex flex-col min-h-100"
    }, _attrs))
  }><div class="w-full h-full max-w-100 mx-auto mb-6 flex justify-center select-none"><input${
    ssrRenderAttr("value", $setup.searchQuery)
  } placeholder="Search a movie" class="text-sm w-full px-4 py-3 rounded-lg background-blur border border-zinc-400/50 dark:border-zinc-700/50 transition-colors" autocomplete="off"></div><div class="w-full flex flex-wrap justify-center gap-1.5 px-2 mb-8"><!--[-->`);
  ssrRenderList($setup.movieGenres, (genre, i) => {
    _push(`<button type="button" class="${
      ssrRenderClass(`${$setup.isGenreActive(genre) ? 'text-white bg-black dark:text-black dark:bg-white border-transparent pl-2 pr-1.5' : 'text-zinc-800 dark:text-zinc-200 border-zinc-400/50 dark:border-zinc-600/50 px-4'} flex items-center gap-1.5 cursor-pointer text-sm text-nowrap py-1 rounded-lg border transition-colors`)
    }">${
      ssrInterpolate(genre)
    } `);
    if ($setup.isGenreActive(genre)) {
      _push(`<svg class="size-3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M18 6l-12 12"></path><path d="M6 6l12 12"></path></svg>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</button>`);
  });
  _push(`<!--]--></div>`);
  if (!$setup.loading) {
    _push(`<div class="flex flex-col w-full">`);
    if ($setup.moviesList.length > 0) {
      _push(`<div class="flex flex-col w-full gap-8"><div class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"><!--[-->`);
      ssrRenderList($setup.moviesList, (movie, i) => {
        _push(ssrRenderComponent(_component_MovieCard, {
          movie: movie,
          key: movie.id,
          onSelect: $setup.openMovieModal
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="col-span-4 flex justify-center"><button type="button" class="bg-black dark:bg-white dark:hover:bg-zinc-200 px-8 py-2.5 cursor-pointer text-base rounded-lg text-white dark:text-black font-medium select-none disabled:opacity-50 disabled:cursor-not-allowed"${(ssrIncludeBooleanAttr($setup.moviesQuantity >= 100000)) ? " disabled" : ""}>Load more</button></div></div>`);
    } else {
      _push(`<div class="flex justify-center w-full"><p class="text-sm text-zinc-800 dark:text-zinc-200 mt-8">No movies found</p></div>`);
    }
    _push(`</div>`);
  } else {
    _push(`<div class="w-full flex flex-col items-center min-h-80 py-10"><svg class="animate-spin [animation-duration:1.5s] size-10" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 6l0 -3"></path><path d="M16.25 7.75l2.15 -2.15"></path><path d="M18 12l3 0"></path><path d="M16.25 16.25l2.15 2.15"></path><path d="M12 18l0 3"></path><path d="M7.75 16.25l-2.15 2.15"></path><path d="M6 12l-3 0"></path><path d="M7.75 7.75l-2.15 -2.15"></path></svg><p class="text-sm text-zinc-800 dark:text-zinc-200 mt-8">Loading movies</p></div>`);
  }
  _push(ssrRenderComponent(_component_MovieModal, {
    movie: $setup.selectedMovie,
    onClose: $event => ($setup.selectedMovie = null)
  }, null, _parent));
  _push(`</section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Movies.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const Movies = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender]]);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="w-full flex flex-col max-w-300 mx-auto mt-16 px-4 xl:px-0"> ${renderComponent($$result2, "Home", $$Home, {})} ${renderComponent($$result2, "Movies", Movies, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/Movies.vue", "client:component-export": "default" })} ${renderComponent($$result2, "Footer", $$Footer, {})} </main> <div class="absolute inset-0 -z-10 w-full bg-[linear-gradient(to_right,#11111111_1px,transparent_1px),linear-gradient(to_bottom,#11111111_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#44444444_1px,transparent_1px),linear-gradient(to_bottom,#44444444_1px,transparent_1px)] bg-[size:14px_24px]"> <div class="absolute bottom-0 left-0 w-full h-50 -z-10
      bg-gradient-to-t from-white via-white/50 to-transparent
      dark:from-zinc-900 dark:via-zinc-900/50 dark:to-transparent"></div> </div> ` })}`;
}, "C:/Users/angel/Documents/04 Projects VSCode/04 ElasticWatch/elastic-watch-app/src/pages/index.astro", void 0);

const $$file = "C:/Users/angel/Documents/04 Projects VSCode/04 ElasticWatch/elastic-watch-app/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
