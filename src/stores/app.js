import { ref } from 'vue'
import { defineStore } from 'pinia'
import i18n from '@/i18n'

export const useAppStore = defineStore('app', () => {
  // ----------------------------------------------------
  // i18n / Locale State & Actions (with localStorage)
  // ----------------------------------------------------
  const currentLocale = ref(localStorage.getItem('locale') || 'km')

  const setLocale = (lang) => {
    currentLocale.value = lang
    i18n.global.locale.value = lang
    localStorage.setItem('locale', lang)
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang
    }
  }

  // Keep vue-i18n instance and document lang in sync on initialization
  if (i18n.global.locale.value !== currentLocale.value) {
    i18n.global.locale.value = currentLocale.value
  }
  if (typeof document !== 'undefined') {
    document.documentElement.lang = currentLocale.value
  }

  return {
    currentLocale,
    setLocale,
  }
})
