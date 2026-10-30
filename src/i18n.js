// src/i18n.js
import { watch } from 'vue'
import { createI18n } from 'vue-i18n'
import en from '@/locales/en'
import km from '@/locales/km'

const savedLocale = localStorage.getItem('locale') || 'km'

const i18n = createI18n({
  legacy: false, // Composition API mode
  locale: savedLocale,
  fallbackLocale: 'en',
  messages: {
    en,
    km,
  },
})

// Automatically save to localStorage whenever language changes anywhere
watch(i18n.global.locale, (newLang) => {
  localStorage.setItem('locale', newLang)
})

export default i18n
