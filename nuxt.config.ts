// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-04-03',
  devtools: {enabled: true},
  modules: ["@nuxt/ui"],
  colorMode: {
    preference: 'light'
  },
  app: {
    baseURL: '/iesco-frontend/'
  }
})