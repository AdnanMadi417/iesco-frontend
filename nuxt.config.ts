// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-04-03',
  devtools: {enabled: true},
  modules: ["@nuxt/ui", '@nuxtjs/i18n', '@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Nunito: [300, 400, 600, 700] // Add the weights you need
    }
  },
  i18n: {
    locales: [
      {code: 'en', iso: 'en-US', file: 'translations/en.js'},
      {code: 'ar', iso: 'ar-SA', file: 'translations/ar.js'}
    ],
    defaultLocale: 'en',
    detectBrowserLanguage: false,
    strategy: 'prefix_except_default'
  },
  colorMode: {
    preference: 'light'
  },
  app: {
    baseURL: '',
    head: {
      link: [
        { rel: 'canonical', href: 'https://iesco.my/how-to-apply-for-scholarships/' }
      ]
    }
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

