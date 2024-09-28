// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-04-03',
  devtools: {enabled: true},
  modules: ["@nuxt/ui", '@nuxtjs/i18n'],
  i18n: {
    vueI18n: './i18n.config.ts'
  },
  colorMode: {
    preference: 'light'
  },
  app: {
    baseURL: '/'
  },
  plugins: [
    './plugins/axios.ts'
  ],
  runtimeConfig: {
    public: {
      isDev: process.env.NODE_ENV === 'development',
    },
  },
})