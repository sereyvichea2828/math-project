<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { useAppStore } from '@/stores/app'

const route = useRoute()
const appStore = useAppStore()

const navLinks = [
  { name: 'home', labelKey: 'nav.home', path: '/', icon: 'home' },
  { name: 'about', labelKey: 'nav.about', path: '/about', icon: 'info' },
  // { name: 'blogs', labelKey: 'nav.blogs', path: '/blogs', icon: 'blog' },
  { name: 'calculate', labelKey: 'nav.calculate', path: '/calculate', icon: 'calc' },
]

const isRouteActive = (path) => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path === path || route.path.startsWith(`${path}/`)
}
</script>

<template>
  <header class="w-full sticky top-0 z-40">
    <nav
      class="w-full bg-nav border-b border-slate-200/80 shadow-2xs transition-all flex items-center justify-between relative overflow-hidden"
      aria-label="Main Navigation"
    >
      <div
        class="flex items-center justify-between gap-2 sm:gap-3 max-w-7xl mx-auto w-full min-w-0"
      >
        <!-- Left Section: Brand Logo + Desktop Nav Links -->
        <div
          class="flex items-center gap-4 sm:gap-6 lg:gap-10 pl-3 sm:pl-6 lg:pl-7 py-2.5 sm:py-3 min-w-0"
        >
          <!-- Brand Logo -->
          <RouterLink
            to="/"
            exact-active-class=""
            class="flex items-center gap-2 sm:gap-2.5 group select-none transition-transform active:scale-95 shrink-0"
          >
            <!-- Brand Logo Image -->
            <img
              src="/logo.png"
              alt="ITE Logo"
              class="w-8 h-8 sm:w-9 sm:h-9 object-contain rounded-lg transition-transform duration-300 group-hover:scale-105 shrink-0"
            />

            <!-- Logo Typography Stack -->
            <div
              class="flex flex-col text-xs font-black leading-tight tracking-wider text-slate-dark-900 uppercase whitespace-nowrap"
            >
              <span>ITE <span class="text-medical-sky-deep">Boys</span></span>
            </div>
          </RouterLink>

          <!-- Desktop Navigation Links (Iterated from routes) -->
          <div class="hidden md:flex items-center gap-5 lg:gap-8" aria-label="Desktop Navigation">
            <RouterLink
              v-for="link in navLinks"
              :key="link.name"
              :to="link.path"
              class="text-sm transition-colors relative py-1"
              :class="
                isRouteActive(link.path)
                  ? 'font-bold text-medical-sky-deep border-b-2 border-medical-sky-deep pb-0.5'
                  : 'font-semibold text-slate-dark-800 hover:text-medical-sky-deep'
              "
            >
              {{ $t(link.labelKey) }}
            </RouterLink>
          </div>
        </div>

        <!-- Right Section: Slanted Banner Controls (Phone + Desktop) -->
        <div class="flex items-stretch self-stretch shrink-0">
          <div
            class="slanted-purple-bg flex items-center gap-2 sm:gap-3.5 pl-6 sm:pl-12 lg:pl-16 pr-2.5 sm:pr-5 lg:pr-7 select-none"
          >
            <!-- Language Switcher [ 🇬🇧 EN | 🇰🇭 KM ] -->
            <div
              class="relative flex items-center bg-black/25 backdrop-blur-md border border-white/30 rounded-full p-0.5 sm:p-1 h-8 sm:h-9 shadow-inner select-none"
              role="group"
              aria-label="Language selector"
            >
              <!-- Sliding Capsule Indicator -->
              <div
                class="absolute top-0.5 sm:top-1 bottom-0.5 sm:bottom-1 w-10 sm:w-11 rounded-full bg-white shadow-sm border border-black/5 transition-transform duration-300 ease-out"
                :class="
                  appStore.currentLocale === 'en'
                    ? 'translate-x-0'
                    : 'translate-x-10 sm:translate-x-11'
                "
              ></div>

              <button
                type="button"
                @click="appStore.setLocale('en')"
                class="relative z-10 w-10 sm:w-11 h-full flex items-center justify-center gap-1 rounded-full text-xs font-black tracking-wide transition-colors duration-200 cursor-pointer focus:outline-none"
                :class="
                  appStore.currentLocale === 'en'
                    ? 'text-slate-dark-900'
                    : 'text-white/90 hover:text-white'
                "
                aria-label="Switch to English"
              >
                <svg class="w-3.5 h-3.5 rounded-full shrink-0 shadow-xs" viewBox="0 0 32 32">
                  <clipPath id="uk-flag-circ">
                    <circle cx="16" cy="16" r="16" />
                  </clipPath>
                  <g clip-path="url(#uk-flag-circ)">
                    <rect width="32" height="32" fill="#012169" />
                    <path d="M0 0L32 32M32 0L0 32" stroke="#fff" stroke-width="4.5" />
                    <path d="M0 0L32 32M32 0L0 32" stroke="#C8102E" stroke-width="1.8" />
                    <path d="M16 0V32M0 16H32" stroke="#fff" stroke-width="8" />
                    <path d="M16 0V32M0 16H32" stroke="#C8102E" stroke-width="4.5" />
                  </g>
                </svg>
                <span>EN</span>
              </button>

              <button
                type="button"
                @click="appStore.setLocale('km')"
                class="relative z-10 w-10 sm:w-11 h-full flex items-center justify-center gap-1 rounded-full text-xs font-black tracking-wide transition-colors duration-200 cursor-pointer focus:outline-none"
                :class="
                  appStore.currentLocale === 'km'
                    ? 'text-slate-dark-900'
                    : 'text-white/90 hover:text-white'
                "
                aria-label="Switch to Khmer"
              >
                <svg class="w-3.5 h-3.5 rounded-full shrink-0 shadow-xs" viewBox="0 0 32 32">
                  <clipPath id="km-flag-circ">
                    <circle cx="16" cy="16" r="16" />
                  </clipPath>
                  <g clip-path="url(#km-flag-circ)">
                    <rect width="32" height="8" fill="#032EA6" />
                    <rect y="8" width="32" height="16" fill="#E00025" />
                    <rect y="24" width="32" height="8" fill="#032EA6" />
                    <path
                      d="M11 20h10v-1h-1.5v-3h-.8v-1.5h-.8v1.5h-1.5v-3h-.8v-1.5h-1.6v1.5h-.8v3h-1.5v-1.5h-.8v1.5h-.8v3h-1.5v1z"
                      fill="#fff"
                    />
                  </g>
                </svg>
                <span>KM</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <!-- ================= MOBILE BOTTOM NAVIGATION DOCK ================= -->
  <nav
    class="fixed bottom-0 left-0 right-0 bg-nav/95 backdrop-blur-xl border-t border-slate-200/80 px-2 sm:px-4 pt-1.5 pb-safe flex items-center justify-around z-50 md:hidden select-none"
    aria-label="Mobile Bottom Navigation"
  >
    <RouterLink
      v-for="r in navLinks"
      :key="r.name"
      :to="r.path"
      class="mob-bottom-tab relative flex items-center gap-1.5 py-1.5 px-2 sm:px-3 rounded-xl transition-all duration-200"
      :class="
        isRouteActive(r.path)
          ? 'text-medical-sky-deep font-bold'
          : 'text-slate-dark-800 hover:text-medical-sky-deep font-medium'
      "
    >
      <!-- Active Top Indicator Stroke Line -->
      <span
        class="active-indicator absolute -top-1.5 left-2 right-2 h-0.5 bg-medical-sky-deep rounded-full transition-opacity duration-200"
        :class="isRouteActive(r.path) ? 'opacity-100' : 'opacity-0'"
      ></span>

      <!-- Dynamic Route Icon -->
      <div
        v-if="isRouteActive(r.path)"
        class="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-medical-sky-deep text-white flex items-center justify-center shadow-xs shrink-0"
      >
        <!-- Home Icon -->
        <svg v-if="r.icon === 'home'" class="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
          <path
            d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
          />
        </svg>
        <!-- About / Info Icon -->
        <svg v-else-if="r.icon === 'info'" class="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd"
          />
        </svg>
        <!-- Blog Icon (Active BookOpen Solid) -->
        <svg v-else-if="r.icon === 'blog'" class="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path
            d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.995 0 1.954.177 2.75.502a.75.75 0 001-.707V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z"
          />
        </svg>
        <!-- Calc Icon -->
        <svg v-else class="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
          <path
            fill-rule="evenodd"
            d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
            clip-rule="evenodd"
          />
        </svg>
      </div>

      <!-- Inactive Icons -->
      <svg
        v-else-if="r.icon === 'home'"
        class="w-5 h-5 fill-none stroke-current shrink-0"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
      <svg
        v-else-if="r.icon === 'info'"
        class="w-5 h-5 fill-none stroke-current shrink-0"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>
      <svg
        v-else-if="r.icon === 'blog'"
        class="w-5 h-5 fill-none stroke-current shrink-0"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
      </svg>
      <svg
        v-else
        class="w-5 h-5 fill-none stroke-current shrink-0"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        viewBox="0 0 24 24"
      >
        <rect x="4" y="2" width="16" height="20" rx="2"></rect>
        <line x1="8" y1="6" x2="16" y2="6"></line>
        <line x1="16" y1="14" x2="16" y2="18"></line>
        <path d="M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M8 18h.01M12 18h.01"></path>
      </svg>

      <!-- Tab Title Label (Only on active tab) -->
      <span
        class="text-xs font-bold whitespace-nowrap leading-none"
        :class="isRouteActive(r.path) ? 'block' : 'hidden'"
      >
        {{ $t(r.labelKey) }}
      </span>
    </RouterLink>
  </nav>
</template>

<style scoped>
.slanted-purple-bg {
  background: linear-gradient(
    135deg,
    oklch(48% 0.16 215) 0%,
    oklch(60% 0.14 215) 50%,
    oklch(75% 0.1 215) 100%
  );
  clip-path: polygon(16px 0%, 100% 0%, 100% 100%, 0% 100%);
}

@media (min-width: 640px) {
  .slanted-purple-bg {
    clip-path: polygon(32px 0%, 100% 0%, 100% 100%, 0% 100%);
  }
}
</style>
