import { defineNuxtConfig } from 'nuxt/config'
import { resolve } from 'node:path';
import svgLoader from 'vite-svg-loader';

const isDev = process.env.NODE_ENV === 'development';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: isDev },

  modules: ['@pinia/nuxt'],
  
  app: {
    baseURL: '/',
  },

  css: [
    "@/node_modules/ress/dist/ress.min.css",
    "@/assets/scss/main.scss"
  ],

  
  devServer: {
    port: parseInt(process.env.DEV_PORT),
    https: false,
  },

  

  runtimeConfig: {
    public: {
    },
  },

  vite: {
    plugins: [
        svgLoader({}),
    ],
    esbuild: { drop: !isDev ? ['console', 'debugger'] : [] },

    css: {
      preprocessorOptions: {
          scss: {
              additionalData: `
              @import "@/assets/scss/_vars.scss";
              `,
          },
      },
  },
  },
})
