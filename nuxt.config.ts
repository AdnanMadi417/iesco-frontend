// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-04-03',
  devtools: {enabled: true},
  modules: ["@nuxt/ui", '@nuxtjs/i18n','@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Nunito: [300, 400, 600, 700],
      Almarai: [300, 400, 700]
    },
    display: 'swap',
  },
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

