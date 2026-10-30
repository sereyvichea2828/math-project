<script setup>
import { useRouter } from 'vue-router'
import { useAppStore } from '@/stores/app'

const router = useRouter()
const appStore = useAppStore()

const goBack = () => {
  if (window.history.length > 1) {
    router.back()
  } else {
    router.push('/')
  }
}
</script>

<template>
  <div
    class="relative min-h-screen md:h-screen md:max-h-screen w-full bg-slate-950 text-slate-100 flex flex-col justify-between overflow-x-hidden md:overflow-hidden font-sans selection:bg-medical-sky-deep selection:text-white"
  >
    <!-- Background Subtle Math Grid & Radial Spotlight -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <!-- Radial linear center glow -->
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-160 h-80 sm:h-112 bg-medical-sky-deep/15 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-80 h-44 sm:h-56 bg-cyan-400/10 rounded-full blur-2xl"
      ></div>

      <!-- Coordinate Grid lines -->
      <svg
        class="absolute inset-0 w-full h-full opacity-5"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern id="grid-pattern" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" stroke-width="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>

      <!-- Floating Math Symbols (Decorations) -->
      <div class="absolute top-20 left-12 text-slate-600/20 text-3xl font-mono select-none">
        AᵀA x = Aᵀb
      </div>
      <div class="absolute top-40 right-20 text-slate-600/20 text-2xl font-mono select-none">
        det(A) = 0
      </div>
      <div class="absolute bottom-28 left-20 text-slate-600/20 text-2xl font-mono select-none">
        b ∉ Col(A)
      </div>
      <div class="absolute bottom-32 right-16 text-slate-600/20 text-3xl font-mono select-none">
        ‖b - Ax‖ = ∞
      </div>
    </div>

    <!-- Minimal Header with Brand Logo and Language Switcher -->
    <header
      class="relative z-20 w-full max-w-6xl mx-auto px-6 py-6 flex items-center justify-between"
    >
      <!-- Brand Logo -->
      <router-link
        to="/"
        class="flex items-center gap-2.5 group select-none transition-transform active:scale-95"
      >
        <img
          src="/logo.png"
          alt="Logo"
          class="w-8 h-8 sm:w-9 sm:h-9 object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
        />
        <div
          class="flex flex-col text-xs font-black leading-tight tracking-wider text-slate-100 uppercase"
        >
          <span>ITE <span class="text-medical-sky">Boys</span></span>
        </div>
      </router-link>

      <!-- Language Selector (EN / KM) -->
      <div
        class="relative flex items-center bg-slate-900/80 backdrop-blur-md border border-slate-700/80 rounded-full p-1 h-9 shadow-inner select-none"
        role="group"
        aria-label="Language selector"
      >
        <div
          class="absolute top-1 bottom-1 w-11 rounded-full bg-medical-sky-deep shadow-sm transition-transform duration-300 ease-out"
          :class="appStore.currentLocale === 'en' ? 'translate-x-0' : 'translate-x-11'"
        ></div>

        <button
          type="button"
          @click="appStore.setLocale('en')"
          class="relative z-10 w-11 h-full flex items-center justify-center gap-1 rounded-full text-xs font-bold transition-colors duration-200 cursor-pointer focus:outline-none"
          :class="
            appStore.currentLocale === 'en' ? 'text-white' : 'text-slate-400 hover:text-slate-200'
          "
        >
          <svg class="w-3.5 h-3.5 rounded-full shrink-0 shadow-xs" viewBox="0 0 32 32">
            <clipPath id="uk-flag-404">
              <circle cx="16" cy="16" r="16" />
            </clipPath>
            <g clip-path="url(#uk-flag-404)">
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
          class="relative z-10 w-11 h-full flex items-center justify-center gap-1 rounded-full text-xs font-bold transition-colors duration-200 cursor-pointer focus:outline-none"
          :class="
            appStore.currentLocale === 'km' ? 'text-white' : 'text-slate-400 hover:text-slate-200'
          "
        >
          <svg class="w-3.5 h-3.5 rounded-full shrink-0 shadow-xs" viewBox="0 0 32 32">
            <clipPath id="km-flag-404">
              <circle cx="16" cy="16" r="16" />
            </clipPath>
            <g clip-path="url(#km-flag-404)">
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
    </header>

    <!-- Main Content Area -->
    <main
      class="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-8 max-w-4xl mx-auto w-full text-center"
    >
      <!-- Status Badge -->
      <div
        class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-medical-sky-deep/40 shadow-lg text-xs font-mono text-cyan-300 mb-6"
      >
        <span class="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
        <span>{{ $t('notFound.badge') }}</span>
      </div>

      <!-- Hero Visual: Clean, High-Tech 404 Display -->
      <div class="relative flex items-center justify-center mb-6 select-none">
        <!-- Circular Radar Grid Orbit behind number -->
        <div
          class="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-cyan-500/20 animate-spin-slow pointer-events-none"
        >
          <div
            class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full shadow-sm shadow-cyan-400"
          ></div>
        </div>
        <div
          class="absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full border border-dashed border-medical-sky/20 pointer-events-none"
        ></div>

        <!-- 404 Typography with Clean linear Fill and Subtle Glow -->
        <div
          class="relative z-10 text-8xl sm:text-9xl font-black tracking-tight leading-none bg-linear-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent drop-shadow-2xl"
        >
          404
        </div>
      </div>

      <!-- Headline & Description -->
      <h1 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">
        {{ $t('notFound.title') }}
      </h1>
      <p
        class="text-slate-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-6 leading-relaxed"
      >
        {{ $t('notFound.description') }}
      </p>

      <!-- Matrix Diagnostic Pill -->
      <div
        class="bg-slate-900/80 border border-slate-800 rounded-xl px-4 py-2.5 mb-8 max-w-md w-full flex items-center justify-center gap-2 text-xs font-mono text-slate-400 shadow-inner"
      >
        <svg
          class="w-4 h-4 text-cyan-400 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span class="truncate">{{ $t('notFound.status') }}</span>
      </div>

      <!-- Action Buttons -->
      <div class="flex flex-wrap items-center justify-center gap-4 w-full max-w-md">
        <!-- Return Home Button (Primary) -->
        <router-link
          to="/"
          class="flex-1 min-w-40 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-linear-to-r from-medical-sky-deep to-cyan-600 hover:from-sky-600 hover:to-cyan-500 shadow-lg shadow-sky-950 hover:shadow-xl hover:shadow-cyan-900/50 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
        >
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span>{{ $t('notFound.backToHome') }}</span>
        </router-link>

        <!-- Go Back Button (Secondary) -->
        <button
          type="button"
          @click="goBack"
          class="flex-1 min-w-36 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-300 bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700 hover:border-slate-600 hover:text-white transition-all duration-200 cursor-pointer"
        >
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span>{{ $t('notFound.backPrev') }}</span>
        </button>
      </div>

      <!-- Quick Navigation Links (Accessible fallback) -->
      <div class="mt-8 flex items-center justify-center gap-4 text-xs font-medium text-slate-400">
        <router-link to="/" class="hover:text-cyan-400 transition-colors">{{
          $t('notFound.homeLink')
        }}</router-link>
        <span class="text-slate-700">•</span>
        <router-link to="/about" class="hover:text-cyan-400 transition-colors">{{
          $t('notFound.aboutLink')
        }}</router-link>
        <span class="text-slate-700">•</span>
        <router-link to="/calculate" class="hover:text-cyan-400 transition-colors">{{
          $t('notFound.calculateLink')
        }}</router-link>
      </div>
    </main>

    <!-- Minimal Footer Note -->
    <footer
      class="relative z-20 w-full max-w-6xl mx-auto px-6 py-4 text-center text-xs text-slate-400 border-t border-slate-800/50"
    >
      <span>Hospital Appointment Scheduling Optimization System &bull; Least Squares</span>
    </footer>
  </div>
</template>

<style scoped>
@keyframes spinSlow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spinSlow 20s linear infinite;
}
</style>
