// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import vue from '@astrojs/vue';

export default defineConfig({
  output: "server",
  vite: {
    plugins: [tailwindcss()]
  },

  adapter: vercel(),
  integrations: [vue()],
  env: {
    schema: {
      BONSAI_URL: envField.string({ context: "server", access: "secret" }),
      BONSAI_USERNAME: envField.string({ context: "server", access: "secret" }),
      BONSAI_PASSWORD: envField.string({ context: "server", access: "secret" }),
      IMAGE_SERVICE: envField.string({ context: "client", access: "public" }),
      INTERNAL_API_KEY: envField.string({ context: "client", access: "public" })
    }
  },
  image: {
    domains: ["image.tmdb.org"],
  },
});