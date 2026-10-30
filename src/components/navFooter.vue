<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const { t } = useI18n()
const currentYear = new Date().getFullYear()

const footerNavLinks = [
  { name: 'home', labelKey: 'nav.home', path: '/' },
  { name: 'about', labelKey: 'nav.about', path: '/about' },
  // { name: 'blogs', labelKey: 'nav.blogs', path: '/blogs' },
  { name: 'calculate', labelKey: 'nav.calculate', path: '/calculate' },
]

const isRouteActive = (path) => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path === path || route.path.startsWith(`${path}/`)
}
</script>
<template>
  <footer class="w-full bg-nav border-t border-slate-200/80">
    <div class="w-full max-w-7xl mx-auto mb-20 md:mb-8 pb-safe md:pb-0 select-none">
      <div class="p-4 sm:p-7 transition-colors duration-300">
        <!-- Row 1: Brand Logo, Navigation Links & Social Media -->
        <div
          class="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 pb-5 border-b border-slate-200/80"
        >
          <!-- Brand Logo -->
          <RouterLink
            to="/"
            exact-active-class=""
            class="flex items-center gap-2.5 group select-none transition-transform active:scale-95"
          >
            <img
              src="/logo.png"
              alt="ITE Logo"
              class="w-8 h-8 sm:w-9 sm:h-9 object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div class="flex flex-col text-left">
              <span
                class="text-xs sm:text-sm font-black tracking-wider text-slate-dark-900 uppercase leading-tight"
              >
                ITE <span class="text-medical-sky-deep">Boys</span>
              </span>
              <span class="text-xs font-bold text-slate-500 uppercase tracking-wider leading-none">
                {{ t('footer.subtitle') }}
              </span>
            </div>
          </RouterLink>

          <!-- Center Horizontal Navigation Links -->
          <nav
            class="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs sm:text-sm font-bold"
            aria-label="Footer Navigation"
          >
            <RouterLink
              v-for="link in footerNavLinks"
              :key="link.name"
              :to="link.path"
              class="transition-colors relative py-0.5"
              :class="
                isRouteActive(link.path)
                  ? 'text-medical-sky-deep font-bold'
                  : 'text-slate-dark-800 hover:text-medical-sky-deep'
              "
            >
              {{ t(link.labelKey) }}
            </RouterLink>
          </nav>

          <!-- Social Media Badges (Telegram, YouTube, GitHub) -->
          <div class="flex items-center gap-2 sm:gap-2.5">
            <!-- Telegram -->
            <a
              href="#"
              class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-slate-200/80 text-slate-dark-800 hover:bg-[#24A1DE] hover:border-[#24A1DE] hover:text-white hover:shadow-md hover:shadow-[#24A1DE]/25 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-2xs"
              aria-label="Telegram"
            >
              <svg class="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current" viewBox="0 0 24 24">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"
                />
              </svg>
            </a>

            <!-- YouTube -->
            <a
              href="https://www.youtube.com/@ITEY1"
              class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-slate-200/80 text-slate-dark-800 hover:bg-[#FF0000] hover:border-[#FF0000] hover:text-white hover:shadow-md hover:shadow-[#FF0000]/25 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-2xs"
              aria-label="YouTube"
            >
              <svg class="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current" viewBox="0 0 24 24">
                <path
                  d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                />
              </svg>
            </a>

            <!-- GitHub -->
            <a
              href="https://github.com/sereyvichea2828/math-project"
              target="_blank"
              class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-slate-200/80 text-slate-dark-800 hover:bg-slate-dark-800 hover:border-slate-dark-800 hover:text-white hover:shadow-md hover:shadow-slate-900/25 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-2xs"
              aria-label="GitHub"
            >
              <svg class="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current" viewBox="0 0 24 24">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Row 2: Bottom Legal, Copyright & Lecturer Info -->
        <div
          class="pt-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-medium text-slate-500"
        >
          <!-- Copyright & Lecturer Info -->
          <div
            class="flex flex-wrap items-center justify-center md:justify-start gap-x-2 gap-y-1 text-center text-xs"
          >
            <span>
              &copy; {{ currentYear }} <strong class="text-slate-dark-800">ITE Boys</strong>.
            </span>
            <span>&bull;</span>
            <span>{{ t('footer.copyright') }}</span>
            <span class="hidden sm:inline">&bull;</span>
            <span
              class="inline-flex items-center gap-1.5 bg-white px-2.5 py-0.5 rounded-full border border-slate-200/80 shadow-2xs"
            >
              <span class="text-slate-500 font-medium">{{ t('footer.lecturerLabel') }}:</span>
              <span class="text-medical-sky-deep font-bold">{{ t('footer.lecturerName') }}</span>
            </span>
          </div>

          <!-- Secondary Legal Links -->
          <div class="flex items-center gap-4 text-xs text-slate-600">
            <a href="#" class="hover:text-medical-sky-deep transition-colors">{{
              t('footer.privacy')
            }}</a>
            <span>&bull;</span>
            <a href="#" class="hover:text-medical-sky-deep transition-colors">{{
              t('footer.terms')
            }}</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
