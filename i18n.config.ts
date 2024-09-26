export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      welcome: 'Welcome',
      arabicStudentName: 'Arabic Student Name',
    },
    fr: {
      welcome: 'Bienvenue'
    },
    ar: {
      welcome: 'مرحبا',
      arabicStudentName: 'الاسم بالعربي',
    }
  }
}))
