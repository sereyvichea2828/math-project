<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Math Tab state
const activeMathTab = ref('tab1')

// Decision Variable Inspector state (x1: Doctor/Checkups, x2: Nurse/Specialists, x3: Equipment/Emergency)
const selectedVariable = ref('x1')
</script>

<template>
  <div class="min-h-screen bg-072 text-slate-dark-900 transition-colors duration-300 font-sans">
    <!-- ================= 1. HERO BANNER (REFINED EDITORIAL SAAS STYLE) ================= -->
    <section
      class="w-full bg-072 relative pt-10 sm:pt-16 pb-16 sm:pb-24 overflow-hidden flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8"
    >
      <!-- Top Ambient Radiant Glow with User Sky Cyan Palette -->
      <div
        class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-medical-sky/40 via-medical-sky-deep/20 to-transparent opacity-40 sm:left-[calc(50%-30rem)] sm:w-288.75"
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "
        ></div>
      </div>

      <!-- Main Content Container with Floating Cards -->
      <div class="relative w-full max-w-5xl mx-auto flex flex-col items-center">
        <!-- Main Headline -->
        <h1
          class="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight sm:tracking-tighter text-slate-dark-900 leading-[1.16] sm:leading-[1.08] mb-4 sm:mb-6 max-w-4xl z-20 text-balance"
          v-html="t('home.hero.title')"
        ></h1>

        <!-- Subtitle -->
        <p
          class="max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 mb-7 sm:mb-9 leading-relaxed font-normal z-20 text-balance"
        >
          {{ t('home.hero.subtitle') }}
        </p>

        <!-- Feature Ticks (Elevated Pill Capsules with Micro-Interactions) -->
        <div
          class="flex flex-wrap justify-center items-center gap-2 sm:gap-3.5 mb-8 sm:mb-10 text-xs sm:text-sm font-bold text-slate-dark-900 z-20 max-w-full"
        >
          <!-- Feature 1: Overdetermined Systems -->
          <div
            class="group flex items-center gap-2 bg-white/90 hover:bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-slate-200/90 hover:border-medical-teal/40 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-default backdrop-blur-md"
          >
            <div
              class="w-5 h-5 rounded-full bg-medical-teal/15 flex items-center justify-center text-medical-teal group-hover:bg-medical-teal group-hover:text-white transition-all duration-300 shadow-2xs shrink-0"
            >
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <span class="whitespace-nowrap">{{ t('home.hero.features.f1') }}</span>
          </div>

          <!-- Feature 2: Least Squares Optimization -->
          <div
            class="group flex items-center gap-2 bg-white/90 hover:bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-slate-200/90 hover:border-medical-sky-deep/40 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-default backdrop-blur-md"
          >
            <div
              class="w-5 h-5 rounded-full bg-medical-sky/25 flex items-center justify-center text-medical-sky-deep group-hover:bg-medical-sky-deep group-hover:text-white transition-all duration-300 shadow-2xs shrink-0"
            >
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                ></path>
              </svg>
            </div>
            <span class="whitespace-nowrap">{{ t('home.hero.features.f2') }}</span>
          </div>

          <!-- Feature 3: Real-time Solving (Custom Accent 061/068) -->
          <div
            class="group flex items-center gap-2 bg-white/90 hover:bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-slate-200/90 hover:border-062/50 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-default backdrop-blur-md"
          >
            <div
              class="w-5 h-5 rounded-full bg-061/20 flex items-center justify-center text-068 group-hover:bg-068 group-hover:text-white transition-all duration-300 shadow-2xs shrink-0"
            >
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <span class="whitespace-nowrap">{{ t('home.hero.features.f3') }}</span>
          </div>
        </div>

        <!-- Action CTA Buttons -->
        <div
          class="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto z-20"
        >
          <RouterLink
            to="/calculate"
            class="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-bold text-white bg-medical-teal hover:bg-medical-teal-light/40 hover:text-medical-teal border border-medical-teal hover:border-medical-teal/40 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-medical-teal transition-all duration-300 shadow-xl shadow-medical-teal/25 hover:shadow-2xl hover:shadow-medical-teal/35 hover:-translate-y-0.5 flex items-center justify-center gap-2.5 group cursor-pointer active:scale-95"
          >
            <span>{{ t('home.hero.cta') }}</span>
            <svg
              class="w-4 h-4 transition-transform group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.5"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </RouterLink>
          <a
            href="#math-theory"
            class="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-bold text-slate-dark-800 bg-white/80 backdrop-blur-md border border-slate-200 rounded-full hover:bg-white hover:border-medical-sky-deep hover:text-medical-sky-deep focus:outline-none transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 group"
          >
            <span>{{ t('home.hero.secondaryCta') }}</span>
            <svg
              class="w-4 h-4 transition-transform group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.5"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- ================= 3. THE MATHEMATICAL THEORY & PROJECTION LAB ================= -->
    <section
      id="math-theory"
      class="w-full bg-071 py-14 sm:py-24 border-t border-slate-200/80 relative"
    >
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <!-- Section Header -->
        <div class="text-center mb-10 sm:mb-14">
          <div
            class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-medical-teal-light/40 text-medical-teal text-xs font-bold uppercase tracking-wider mb-3 border border-medical-teal/30 shadow-2xs"
          >
            {{ t('home.math.tag') }}
          </div>
          <h2
            class="text-2xl sm:text-4xl font-extrabold tracking-tight mb-2 sm:mb-3 text-slate-dark-900"
          >
            {{ t('home.math.title') }}
          </h2>
          <p
            class="text-slate-500 max-w-3xl mx-auto text-xs sm:text-base leading-relaxed"
            v-html="t('home.math.subtitle')"
          ></p>
        </div>

        <!-- 3 Modern Segmented Pill Tabs -->
        <div class="flex justify-center mb-8 sm:mb-12">
          <div
            class="p-1.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs backdrop-blur-md flex flex-wrap items-center justify-center gap-1.5 max-w-full"
          >
            <button
              @click="activeMathTab = 'tab1'"
              class="px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-2"
              :class="
                activeMathTab === 'tab1'
                  ? 'bg-medical-teal text-white shadow-md shadow-medical-teal/25'
                  : 'text-slate-600 hover:text-slate-dark-900 hover:bg-072'
              "
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
              <span>{{ t('home.math.tabs.tab1') }}</span>
            </button>
            <button
              @click="activeMathTab = 'tab2'"
              class="px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-2"
              :class="
                activeMathTab === 'tab2'
                  ? 'bg-medical-teal text-white shadow-md shadow-medical-teal/25'
                  : 'text-slate-600 hover:text-slate-dark-900 hover:bg-072'
              "
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
              <span>{{ t('home.math.tabs.tab2') }}</span>
            </button>
            <button
              @click="activeMathTab = 'tab3'"
              class="px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-2"
              :class="
                activeMathTab === 'tab3'
                  ? 'bg-medical-teal text-white shadow-md shadow-medical-teal/25'
                  : 'text-slate-600 hover:text-slate-dark-900 hover:bg-072'
              "
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <span>{{ t('home.math.tabs.tab3') }}</span>
            </button>
          </div>
        </div>

        <!-- Tab Content Display Area (3 Special Calculator Models) -->
        <div class="mb-12">
          <!-- TAB 1: MODEL 1 - UNIQUE SOLUTION (3x3) -->
          <div
            v-if="activeMathTab === 'tab1'"
            class="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-fadeIn"
          >
            <!-- Theory Explanation Card -->
            <div
              class="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between"
            >
              <div>
                <div class="flex items-center gap-2 mb-3">
                  <span class="w-2 h-2 rounded-full bg-medical-teal"></span>
                  <span class="text-xs font-bold text-medical-teal font-sans">{{
                    t('home.math.model1Badge')
                  }}</span>
                </div>
                <h3 class="text-xl sm:text-2xl font-black text-slate-dark-900 mb-3">
                  {{ t('home.math.model1Title') }}
                </h3>
                <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {{ t('home.math.model1Desc') }}
                </p>
              </div>

              <!-- Dimensional Badges (Clean Responsive Layout) -->
              <div
                class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-5 border-t border-slate-100"
              >
                <div
                  class="p-3 sm:p-3.5 rounded-2xl bg-072 border border-slate-200/80 text-center transition-all hover:border-medical-teal/40 flex flex-col justify-center items-center min-w-0"
                >
                  <div
                    class="text-[11px] sm:text-xs font-semibold text-slate-600 font-sans truncate w-full"
                  >
                    {{ t('home.math.model1Dim') }}
                  </div>
                  <div
                    class="text-xs sm:text-sm lg:text-base font-bold text-slate-dark-900 font-mono mt-1 tracking-tight whitespace-nowrap"
                  >
                    3 × 3
                  </div>
                  <div
                    class="text-[10px] sm:text-[11px] font-sans text-slate-400 mt-1 truncate w-full"
                  >
                    {{ t('home.math.model1DimSub') }}
                  </div>
                </div>
                <div
                  class="p-3 sm:p-3.5 rounded-2xl bg-072 border border-slate-200/80 text-center transition-all hover:border-medical-teal/40 flex flex-col justify-center items-center min-w-0"
                >
                  <div
                    class="text-[11px] sm:text-xs font-semibold text-slate-600 font-sans truncate w-full"
                  >
                    {{ t('home.math.model1DetLabel') }}
                  </div>
                  <div
                    class="text-xs sm:text-sm lg:text-base font-bold text-slate-dark-900 font-mono mt-1 tracking-tight whitespace-nowrap"
                  >
                    {{ t('home.math.model1DetVal') }}
                  </div>
                  <div
                    class="text-[10px] sm:text-[11px] font-sans text-slate-400 mt-1 truncate w-full"
                  >
                    {{ t('home.math.model1DetSub') }}
                  </div>
                </div>
                <div
                  class="p-3 sm:p-3.5 rounded-2xl bg-072 border border-slate-200/80 text-center transition-all hover:border-medical-teal/40 flex flex-col justify-center items-center min-w-0"
                >
                  <div
                    class="text-[11px] sm:text-xs font-semibold text-slate-600 font-sans truncate w-full"
                  >
                    {{ t('home.math.model1Status') }}
                  </div>
                  <div
                    class="text-xs sm:text-sm lg:text-base font-bold text-slate-dark-900 font-mono mt-1 tracking-tight whitespace-nowrap"
                  >
                    {{ t('home.math.model1StatusVal') }}
                  </div>
                  <div
                    class="text-[10px] sm:text-[11px] font-sans text-slate-400 mt-1 truncate w-full"
                  >
                    {{ t('home.math.model1StatusSub') }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Mathematical Model 1 System Card -->
            <div
              class="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 font-mono text-xs sm:text-sm flex flex-col justify-between"
            >
              <div>
                <div
                  class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-4 pb-3 border-b border-slate-100"
                >
                  <span class="text-xs font-bold text-slate-500 font-sans">{{
                    t('home.math.model1SysLabel')
                  }}</span>
                  <span class="text-xs text-medical-teal font-bold font-sans">{{
                    t('home.math.model1SysType')
                  }}</span>
                </div>

                <div class="space-y-2.5 font-mono text-slate-800 mb-4">
                  <div
                    class="p-3 rounded-2xl bg-072 border border-slate-200/80 flex items-center justify-between gap-2"
                  >
                    <span class="truncate">{{ t('home.math.model1Eq1') }}</span>
                    <span class="text-[11px] text-slate-400 font-sans shrink-0">{{
                      t('home.math.model1Eq1Label')
                    }}</span>
                  </div>
                  <div
                    class="p-3 rounded-2xl bg-072 border border-slate-200/80 flex items-center justify-between gap-2"
                  >
                    <span class="truncate">{{ t('home.math.model1Eq2') }}</span>
                    <span class="text-[11px] text-slate-400 font-sans shrink-0">{{
                      t('home.math.model1Eq2Label')
                    }}</span>
                  </div>
                  <div
                    class="p-3 rounded-2xl bg-072 border border-slate-200/80 flex items-center justify-between gap-2"
                  >
                    <span class="truncate">{{ t('home.math.model1Eq3') }}</span>
                    <span class="text-[11px] text-slate-400 font-sans shrink-0">{{
                      t('home.math.model1Eq3Label')
                    }}</span>
                  </div>
                </div>

                <!-- Solution Box (Clean 2-Tier Dashboard Card) -->
                <div
                  class="p-3.5 sm:p-4 rounded-2xl bg-medical-teal-light/30 border border-medical-teal/30 flex flex-col gap-2"
                >
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold font-sans text-slate-700">{{
                      t('home.math.model1SolLabel')
                    }}</span>
                    <span
                      class="text-[11px] font-mono text-medical-teal font-semibold px-2.5 py-0.5 rounded-full bg-medical-teal/10 border border-medical-teal/20"
                      >{{ t('home.math.model1SolBadge') }}</span
                    >
                  </div>
                  <div
                    class="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1 font-mono font-bold text-xs sm:text-sm"
                  >
                    <span class="text-slate-500 font-normal">{{
                      t('home.math.model1SolFormula')
                    }}</span>
                    <span class="text-medical-teal font-extrabold text-sm sm:text-base">{{
                      t('home.math.model1SolVal')
                    }}</span>
                  </div>
                </div>
              </div>

              <!-- Action Link -->
              <div class="pt-4 mt-4 border-t border-slate-100 flex items-center justify-end">
                <RouterLink
                  to="/calculate"
                  class="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-medical-teal hover:underline font-sans"
                >
                  <span>{{ t('home.math.model1Action') }}</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </RouterLink>
              </div>
            </div>
          </div>

          <!-- TAB 2: MODEL 2 - MULTIPLE SOLUTIONS (3x3 Singular) -->
          <div
            v-else-if="activeMathTab === 'tab2'"
            class="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-fadeIn"
          >
            <!-- Theory Explanation Card -->
            <div
              class="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between"
            >
              <div>
                <div class="flex items-center gap-2 mb-3">
                  <span class="w-2 h-2 rounded-full bg-medical-sky-deep"></span>
                  <span class="text-xs font-bold text-medical-sky-deep font-sans">{{
                    t('home.math.model2Badge')
                  }}</span>
                </div>
                <h3 class="text-xl sm:text-2xl font-black text-slate-dark-900 mb-3">
                  {{ t('home.math.model2Title') }}
                </h3>
                <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {{ t('home.math.model2Desc') }}
                </p>
              </div>

              <!-- Dimensional Badges -->
              <div
                class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-5 border-t border-slate-100"
              >
                <div
                  class="p-3 sm:p-3.5 rounded-2xl bg-072 border border-slate-200/80 text-center transition-all hover:border-medical-sky-deep/40 flex flex-col justify-center items-center min-w-0"
                >
                  <div
                    class="text-[11px] sm:text-xs font-semibold text-slate-600 font-sans truncate w-full"
                  >
                    {{ t('home.math.model2Dim') }}
                  </div>
                  <div
                    class="text-xs sm:text-sm lg:text-base font-bold text-slate-dark-900 font-mono mt-1 tracking-tight whitespace-nowrap"
                  >
                    3 × 3
                  </div>
                  <div
                    class="text-[10px] sm:text-[11px] font-sans text-slate-400 mt-1 truncate w-full"
                  >
                    {{ t('home.math.model2DimSub') }}
                  </div>
                </div>
                <div
                  class="p-3 sm:p-3.5 rounded-2xl bg-072 border border-slate-200/80 text-center transition-all hover:border-medical-sky-deep/40 flex flex-col justify-center items-center min-w-0"
                >
                  <div
                    class="text-[11px] sm:text-xs font-semibold text-slate-600 font-sans truncate w-full"
                  >
                    {{ t('home.math.model2DetLabel') }}
                  </div>
                  <div
                    class="text-xs sm:text-sm lg:text-base font-bold text-slate-dark-900 font-mono mt-1 tracking-tight whitespace-nowrap"
                  >
                    {{ t('home.math.model2DetVal') }}
                  </div>
                  <div
                    class="text-[10px] sm:text-[11px] font-sans text-slate-400 mt-1 truncate w-full"
                  >
                    {{ t('home.math.model2DetSub') }}
                  </div>
                </div>
                <div
                  class="p-3 sm:p-3.5 rounded-2xl bg-072 border border-slate-200/80 text-center transition-all hover:border-medical-sky-deep/40 flex flex-col justify-center items-center min-w-0"
                >
                  <div
                    class="text-[11px] sm:text-xs font-semibold text-slate-600 font-sans truncate w-full"
                  >
                    {{ t('home.math.model2Status') }}
                  </div>
                  <div
                    class="text-xs sm:text-sm lg:text-base font-bold text-slate-dark-900 font-mono mt-1 tracking-tight whitespace-nowrap"
                  >
                    {{ t('home.math.model2StatusVal') }}
                  </div>
                  <div
                    class="text-[10px] sm:text-[11px] font-sans text-slate-400 mt-1 truncate w-full"
                  >
                    {{ t('home.math.model2StatusSub') }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Mathematical Model 2 System Card -->
            <div
              class="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 font-mono text-xs sm:text-sm flex flex-col justify-between"
            >
              <div>
                <div
                  class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-4 pb-3 border-b border-slate-100"
                >
                  <span class="text-xs font-bold text-slate-500 font-sans">{{
                    t('home.math.model2SysLabel')
                  }}</span>
                  <span class="text-xs text-medical-sky-deep font-bold font-sans">{{
                    t('home.math.model2SysType')
                  }}</span>
                </div>

                <div class="space-y-2.5 font-mono text-slate-800 mb-4">
                  <div
                    class="p-3 rounded-2xl bg-072 border border-slate-200/80 flex items-center justify-between gap-2"
                  >
                    <span class="truncate">{{ t('home.math.model2Eq1') }}</span>
                    <span class="text-[11px] text-slate-400 font-sans shrink-0">{{
                      t('home.math.model2Eq1Label')
                    }}</span>
                  </div>
                  <div
                    class="p-3 rounded-2xl bg-072 border border-slate-200/80 flex items-center justify-between gap-2"
                  >
                    <span class="truncate">{{ t('home.math.model2Eq2') }}</span>
                    <span class="text-[11px] text-slate-400 font-sans shrink-0">{{
                      t('home.math.model2Eq2Label')
                    }}</span>
                  </div>
                  <div
                    class="p-3 rounded-2xl bg-072 border border-slate-200/80 flex items-center justify-between gap-2"
                  >
                    <span class="truncate">{{ t('home.math.model2Eq3') }}</span>
                    <span class="text-[11px] text-slate-400 font-sans shrink-0">{{
                      t('home.math.model2Eq3Label')
                    }}</span>
                  </div>
                </div>

                <!-- Solution Box (Clean 2-Tier Dashboard Card) -->
                <div
                  class="p-3.5 sm:p-4 rounded-2xl bg-medical-sky/20 border border-medical-sky/35 flex flex-col gap-2"
                >
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold font-sans text-slate-700">{{
                      t('home.math.model2SolLabel')
                    }}</span>
                    <span
                      class="text-[11px] font-mono text-medical-sky-deep font-semibold px-2.5 py-0.5 rounded-full bg-medical-sky-deep/10 border border-medical-sky-deep/20"
                      >{{ t('home.math.model2SolBadge') }}</span
                    >
                  </div>
                  <div
                    class="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1 font-mono font-bold text-xs sm:text-sm"
                  >
                    <span class="text-slate-500 font-normal">{{
                      t('home.math.model2SolFormula')
                    }}</span>
                    <span class="text-medical-sky-deep font-extrabold text-xs sm:text-sm">{{
                      t('home.math.model2SolVal')
                    }}</span>
                  </div>
                </div>
              </div>

              <!-- Action Link -->
              <div class="pt-4 mt-4 border-t border-slate-100 flex items-center justify-end">
                <RouterLink
                  to="/calculate"
                  class="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-medical-sky-deep hover:underline font-sans"
                >
                  <span>{{ t('home.math.model2Action') }}</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </RouterLink>
              </div>
            </div>
          </div>

          <!-- TAB 3: MODEL 3 - LEAST SQUARES OPTIMIZATION (4x3) -->
          <div
            v-else-if="activeMathTab === 'tab3'"
            class="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-fadeIn"
          >
            <!-- Theory Explanation Card -->
            <div
              class="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between"
            >
              <div>
                <div class="flex items-center gap-2 mb-3">
                  <span class="w-2 h-2 rounded-full bg-medical-teal"></span>
                  <span class="text-xs font-bold text-medical-teal font-sans">{{
                    t('home.math.model3Badge')
                  }}</span>
                </div>
                <h3 class="text-xl sm:text-2xl font-black text-slate-dark-900 mb-3">
                  {{ t('home.math.model3Title') }}
                </h3>
                <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {{ t('home.math.model3Desc') }}
                </p>
              </div>

              <!-- Dimensional Badges -->
              <div
                class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-5 border-t border-slate-100"
              >
                <div
                  class="p-3 sm:p-3.5 rounded-2xl bg-072 border border-slate-200/80 text-center transition-all hover:border-medical-teal/40 flex flex-col justify-center items-center min-w-0"
                >
                  <div
                    class="text-[11px] sm:text-xs font-semibold text-slate-600 font-sans truncate w-full"
                  >
                    {{ t('home.math.model3Dim') }}
                  </div>
                  <div
                    class="text-xs sm:text-sm lg:text-base font-bold text-slate-dark-900 font-mono mt-1 tracking-tight whitespace-nowrap"
                  >
                    4 × 3
                  </div>
                  <div
                    class="text-[10px] sm:text-[11px] font-sans text-slate-400 mt-1 truncate w-full"
                  >
                    {{ t('home.math.model3DimSub') }}
                  </div>
                </div>
                <div
                  class="p-3 sm:p-3.5 rounded-2xl bg-072 border border-slate-200/80 text-center transition-all hover:border-medical-teal/40 flex flex-col justify-center items-center min-w-0"
                >
                  <div
                    class="text-[11px] sm:text-xs font-semibold text-slate-600 font-sans truncate w-full"
                  >
                    {{ t('home.math.model3DetLabel') }}
                  </div>
                  <div
                    class="text-xs sm:text-sm lg:text-base font-bold text-slate-dark-900 font-mono mt-1 tracking-tight whitespace-nowrap"
                  >
                    {{ t('home.math.model3DetVal') }}
                  </div>
                  <div
                    class="text-[10px] sm:text-[11px] font-sans text-slate-400 mt-1 truncate w-full"
                  >
                    {{ t('home.math.model3DetSub') }}
                  </div>
                </div>
                <div
                  class="p-3 sm:p-3.5 rounded-2xl bg-072 border border-slate-200/80 text-center transition-all hover:border-medical-teal/40 flex flex-col justify-center items-center min-w-0"
                >
                  <div
                    class="text-[11px] sm:text-xs font-semibold text-slate-600 font-sans truncate w-full"
                  >
                    {{ t('home.math.model3Status') }}
                  </div>
                  <div
                    class="text-xs sm:text-sm lg:text-base font-bold text-slate-dark-900 font-mono mt-1 tracking-tight whitespace-nowrap"
                  >
                    {{ t('home.math.model3StatusVal') }}
                  </div>
                  <div
                    class="text-[10px] sm:text-[11px] font-sans text-slate-400 mt-1 truncate w-full"
                  >
                    {{ t('home.math.model3StatusSub') }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Mathematical Model 3 System Card -->
            <div
              class="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 font-mono text-xs sm:text-sm flex flex-col justify-between"
            >
              <div>
                <div
                  class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-4 pb-3 border-b border-slate-100"
                >
                  <span class="text-xs font-bold text-slate-500 font-sans">{{
                    t('home.math.model3SysLabel')
                  }}</span>
                  <span class="text-xs text-medical-teal font-bold font-sans">{{
                    t('home.math.model3SysType')
                  }}</span>
                </div>

                <div class="space-y-2.5 font-mono text-slate-800 mb-4">
                  <div
                    class="p-2.5 sm:p-3 rounded-2xl bg-072 border border-slate-200/80 flex items-center justify-between gap-2"
                  >
                    <span class="truncate">{{ t('home.math.model3Eq1') }}</span>
                    <span class="text-[11px] text-slate-400 font-sans shrink-0">{{
                      t('home.math.model3Eq1Label')
                    }}</span>
                  </div>
                  <div
                    class="p-2.5 sm:p-3 rounded-2xl bg-072 border border-slate-200/80 flex items-center justify-between gap-2"
                  >
                    <span class="truncate">{{ t('home.math.model3Eq2') }}</span>
                    <span class="text-[11px] text-slate-400 font-sans shrink-0">{{
                      t('home.math.model3Eq2Label')
                    }}</span>
                  </div>
                  <div
                    class="p-2.5 sm:p-3 rounded-2xl bg-072 border border-slate-200/80 flex items-center justify-between gap-2"
                  >
                    <span class="truncate">{{ t('home.math.model3Eq3') }}</span>
                    <span class="text-[11px] text-slate-400 font-sans shrink-0">{{
                      t('home.math.model3Eq3Label')
                    }}</span>
                  </div>
                  <div
                    class="p-2.5 sm:p-3 rounded-2xl bg-072 border border-slate-200/80 flex items-center justify-between gap-2"
                  >
                    <span class="truncate">{{ t('home.math.model3Eq4') }}</span>
                    <span class="text-[11px] text-slate-400 font-sans shrink-0">{{
                      t('home.math.model3Eq4Label')
                    }}</span>
                  </div>
                </div>

                <!-- Solution Box (Clean 2-Tier Dashboard Card) -->
                <div
                  class="p-3.5 sm:p-4 rounded-2xl bg-medical-teal-light/30 border border-medical-teal/30 flex flex-col gap-2"
                >
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold font-sans text-slate-700">{{
                      t('home.math.model3SolLabel')
                    }}</span>
                    <span
                      class="text-[11px] font-mono text-medical-teal font-semibold px-2.5 py-0.5 rounded-full bg-medical-teal/10 border border-medical-teal/20"
                      >{{ t('home.math.model3SolBadge') }}</span
                    >
                  </div>
                  <div
                    class="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1 font-mono font-bold text-xs sm:text-sm"
                  >
                    <span class="text-slate-500 font-normal">{{
                      t('home.math.model3SolFormula')
                    }}</span>
                    <span class="text-medical-teal font-extrabold text-sm sm:text-base">{{
                      t('home.math.model3SolVal')
                    }}</span>
                  </div>
                </div>
              </div>

              <!-- Action Link -->
              <div class="pt-4 mt-4 border-t border-slate-100 flex items-center justify-end">
                <RouterLink
                  to="/calculate"
                  class="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-medical-teal hover:underline font-sans"
                >
                  <span>{{ t('home.math.model3Action') }}</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Interactive Decision Variables & Matrix Inspector -->
        <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/80">
          <!-- Section Header -->
          <div
            class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100"
          >
            <div>
              <h4 class="text-lg sm:text-xl font-extrabold text-slate-dark-900 tracking-tight">
                {{ t('home.math.varInspectorTitle') }}
              </h4>
              <p class="text-xs sm:text-sm text-slate-500 mt-0.5">
                {{ t('home.math.varInspectorSubtitle') }}
              </p>
            </div>
            <span
              class="self-start sm:self-auto text-xs font-bold font-mono px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 shadow-2xs"
            >
              {{ t('home.math.varInspectorTag') }}
            </span>
          </div>

          <!-- Variable Selector Tabs (Clean 3-Pill Switcher) -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            <!-- Tab x1 (Doctor) -->
            <button
              @click="selectedVariable = 'x1'"
              class="flex items-center gap-3 p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer shadow-xs active:scale-[0.98] text-left"
              :class="
                selectedVariable === 'x1'
                  ? 'bg-medical-teal text-white border-medical-teal shadow-md ring-2 ring-medical-teal/20 scale-[1.01]'
                  : 'bg-072 text-slate-700 border-slate-200/80 hover:border-medical-teal/40 hover:bg-slate-50'
              "
            >
              <div
                class="w-10 h-10 rounded-xl flex items-center justify-center font-mono text-base font-black shrink-0 transition-colors"
                :class="
                  selectedVariable === 'x1'
                    ? 'bg-white/20 text-white'
                    : 'bg-white text-medical-teal border border-slate-200 shadow-2xs'
                "
              >
                x₁
              </div>
              <div class="min-w-0 flex-1">
                <div
                  class="text-xs font-extrabold truncate"
                  :class="selectedVariable === 'x1' ? 'text-white' : 'text-slate-900'"
                >
                  {{ t('home.math.variables.x1.name') }}
                </div>
                <div
                  class="text-[11px] truncate mt-0.5"
                  :class="selectedVariable === 'x1' ? 'text-white/80' : 'text-slate-500'"
                >
                  {{ t('home.math.variables.x1.role') }}
                </div>
              </div>
            </button>

            <!-- Tab x2 (Nurse) -->
            <button
              @click="selectedVariable = 'x2'"
              class="flex items-center gap-3 p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer shadow-xs active:scale-[0.98] text-left"
              :class="
                selectedVariable === 'x2'
                  ? 'bg-medical-sky-deep text-white border-medical-sky-deep shadow-md ring-2 ring-medical-sky-deep/20 scale-[1.01]'
                  : 'bg-072 text-slate-700 border-slate-200/80 hover:border-medical-sky-deep/40 hover:bg-slate-50'
              "
            >
              <div
                class="w-10 h-10 rounded-xl flex items-center justify-center font-mono text-base font-black shrink-0 transition-colors"
                :class="
                  selectedVariable === 'x2'
                    ? 'bg-white/20 text-white'
                    : 'bg-white text-medical-sky-deep border border-slate-200 shadow-2xs'
                "
              >
                x₂
              </div>
              <div class="min-w-0 flex-1">
                <div
                  class="text-xs font-extrabold truncate"
                  :class="selectedVariable === 'x2' ? 'text-white' : 'text-slate-900'"
                >
                  {{ t('home.math.variables.x2.name') }}
                </div>
                <div
                  class="text-[11px] truncate mt-0.5"
                  :class="selectedVariable === 'x2' ? 'text-white/80' : 'text-slate-500'"
                >
                  {{ t('home.math.variables.x2.role') }}
                </div>
              </div>
            </button>

            <!-- Tab x3 (Equipment - Coral 068) -->
            <button
              @click="selectedVariable = 'x3'"
              class="flex items-center gap-3 p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer shadow-xs active:scale-[0.98] text-left"
              :class="
                selectedVariable === 'x3'
                  ? 'bg-068 text-white border-068 shadow-md ring-2 ring-068/20 scale-[1.01]'
                  : 'bg-072 text-slate-700 border-slate-200/80 hover:border-068/40 hover:bg-slate-50'
              "
            >
              <div
                class="w-10 h-10 rounded-xl flex items-center justify-center font-mono text-base font-black shrink-0 transition-colors"
                :class="
                  selectedVariable === 'x3'
                    ? 'bg-white/20 text-white'
                    : 'bg-white text-068 border border-slate-200 shadow-2xs'
                "
              >
                x₃
              </div>
              <div class="min-w-0 flex-1">
                <div
                  class="text-xs font-extrabold truncate"
                  :class="selectedVariable === 'x3' ? 'text-white' : 'text-slate-900'"
                >
                  {{ t('home.math.variables.x3.name') }}
                </div>
                <div
                  class="text-[11px] truncate mt-0.5"
                  :class="selectedVariable === 'x3' ? 'text-white/80' : 'text-slate-500'"
                >
                  {{ t('home.math.variables.x3.role') }}
                </div>
              </div>
            </button>
          </div>

          <!-- Main 2-Column Content Layout (Equal Height & Perfectly Aligned) -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <!-- Left Panel: Variable Operational Profile (5 Cols) -->
            <div
              class="lg:col-span-5 bg-072 rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between"
            >
              <div>
                <!-- Active Variable Title & Badge -->
                <div
                  class="flex items-center justify-center sm:justify-start gap-3 mb-3.5 pb-3 border-b border-slate-200/60 text-center sm:text-left"
                >
                  <span
                    class="font-mono text-lg font-black px-3.5 py-1.5 rounded-xl shadow-2xs text-white shrink-0"
                    :class="{
                      'bg-medical-teal': selectedVariable === 'x1',
                      'bg-medical-sky-deep': selectedVariable === 'x2',
                      'bg-068': selectedVariable === 'x3',
                    }"
                  >
                    {{ t(`home.math.variables.${selectedVariable}.symbol`) }}
                  </span>
                  <div class="min-w-0 text-left">
                    <div class="text-sm sm:text-base font-bold text-slate-dark-900 truncate">
                      {{ t(`home.math.variables.${selectedVariable}.name`) }}
                    </div>
                    <div class="text-xs text-slate-500 truncate">
                      {{ t(`home.math.variables.${selectedVariable}.role`) }}
                    </div>
                  </div>
                </div>

                <!-- Description Text Box -->
                <p
                  class="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs mb-4 text-center sm:text-left"
                >
                  {{ t(`home.math.variables.${selectedVariable}.desc`) }}
                </p>
              </div>

              <!-- Metrics Stats (Centered on phone, left-aligned on tablet/desktop) -->
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                <div
                  class="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs text-center sm:text-left"
                >
                  <div class="text-[11px] font-semibold text-slate-500 font-sans mb-1">
                    {{ t('home.math.varRateLabel') }}
                  </div>
                  <div class="text-xs font-bold font-mono text-slate-800 leading-snug">
                    {{ t(`home.math.variables.${selectedVariable}.rate`) }}
                  </div>
                </div>
                <div
                  class="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs text-center sm:text-left"
                >
                  <div class="text-[11px] font-semibold text-slate-500 font-sans mb-1">
                    {{ t('home.math.varMetricLabel') }}
                  </div>
                  <div
                    class="text-xs font-bold font-sans leading-snug"
                    :class="{
                      'text-medical-teal': selectedVariable === 'x1',
                      'text-medical-sky-deep': selectedVariable === 'x2',
                      'text-068': selectedVariable === 'x3',
                    }"
                  >
                    {{ t(`home.math.variables.${selectedVariable}.metric`) }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Panel: Hospital Constraint Matrix A (7 Cols) -->
            <div
              class="lg:col-span-7 bg-072 rounded-3xl p-4 sm:p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between"
            >
              <div>
                <!-- Matrix Header (Centered on mobile) -->
                <div
                  class="flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-2 mb-3.5 pb-3 border-b border-slate-200/60"
                >
                  <div>
                    <div
                      class="text-xs font-extrabold uppercase tracking-wider text-slate-700 font-sans"
                    >
                      {{ t('home.math.varTableTitle') }}
                    </div>
                    <div class="text-[11px] text-slate-500 font-sans mt-0.5">
                      {{ t('home.math.varTableConstraint') }}
                    </div>
                  </div>
                  <span
                    class="px-2.5 py-1 rounded-full bg-white border border-slate-200/80 text-slate-600 font-mono text-xs font-bold shadow-2xs shrink-0"
                  >
                    Matrix A (4 × 3)
                  </span>
                </div>

                <!-- 4x3 Table inside a Clean White Container with horizontal scroll on mobile -->
                <div
                  class="bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden"
                >
                  <div class="overflow-x-auto w-full">
                    <table class="w-full text-left text-xs font-mono min-w-85 sm:min-w-full">
                      <thead>
                        <tr
                          class="border-b border-slate-100 bg-slate-50/70 text-slate-600 font-sans"
                        >
                          <th class="py-2.5 px-2.5 sm:px-3 font-bold text-[10px] sm:text-xs">
                            {{ t('home.math.varTableConstraint') }}
                          </th>
                          <th
                            @click="selectedVariable = 'x1'"
                            class="py-2.5 px-1.5 sm:px-3 text-center font-bold font-mono cursor-pointer transition-colors text-[10px] sm:text-xs whitespace-nowrap"
                            :class="
                              selectedVariable === 'x1'
                                ? 'bg-medical-teal-light/50 text-medical-teal font-extrabold border-b-2 border-medical-teal'
                                : 'text-slate-600 hover:bg-slate-100'
                            "
                          >
                            x₁ (Doctor)
                          </th>
                          <th
                            @click="selectedVariable = 'x2'"
                            class="py-2.5 px-1.5 sm:px-3 text-center font-bold font-mono cursor-pointer transition-colors text-[10px] sm:text-xs whitespace-nowrap"
                            :class="
                              selectedVariable === 'x2'
                                ? 'bg-medical-sky/40 text-medical-sky-deep font-extrabold border-b-2 border-medical-sky-deep'
                                : 'text-slate-600 hover:bg-slate-100'
                            "
                          >
                            x₂ (Nurse)
                          </th>
                          <th
                            @click="selectedVariable = 'x3'"
                            class="py-2.5 px-1.5 sm:px-3 text-center font-bold font-mono cursor-pointer transition-colors text-[10px] sm:text-xs whitespace-nowrap"
                            :class="
                              selectedVariable === 'x3'
                                ? 'bg-068/20 text-068 font-extrabold border-b-2 border-068'
                                : 'text-slate-600 hover:bg-slate-100'
                            "
                          >
                            x₃ (Device)
                          </th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-slate-100">
                        <!-- Row 1: Doctor Hours -->
                        <tr class="hover:bg-slate-50/50 transition-colors">
                          <td
                            class="py-2.5 px-2.5 sm:px-3 font-sans font-medium text-slate-700 text-[11px] sm:text-xs"
                          >
                            {{ t('home.math.varTableRow1') }}
                          </td>
                          <td
                            class="py-2.5 px-1.5 sm:px-3 text-center font-mono font-bold transition-colors text-xs"
                            :class="
                              selectedVariable === 'x1'
                                ? 'bg-medical-teal-light/30 text-medical-teal font-extrabold'
                                : 'text-slate-600'
                            "
                          >
                            0.5 hr
                          </td>
                          <td
                            class="py-2.5 px-1.5 sm:px-3 text-center font-mono font-bold transition-colors text-xs"
                            :class="
                              selectedVariable === 'x2'
                                ? 'bg-medical-sky/25 text-medical-sky-deep font-extrabold'
                                : 'text-slate-600'
                            "
                          >
                            1.0 hr
                          </td>
                          <td
                            class="py-2.5 px-1.5 sm:px-3 text-center font-mono font-bold transition-colors text-xs"
                            :class="
                              selectedVariable === 'x3'
                                ? 'bg-068/15 text-068 font-extrabold'
                                : 'text-slate-400'
                            "
                          >
                            0.0 hr
                          </td>
                        </tr>

                        <!-- Row 2: Nurse Hours -->
                        <tr class="hover:bg-slate-50/50 transition-colors">
                          <td
                            class="py-2.5 px-2.5 sm:px-3 font-sans font-medium text-slate-700 text-[11px] sm:text-xs"
                          >
                            {{ t('home.math.varTableRow2') }}
                          </td>
                          <td
                            class="py-2.5 px-1.5 sm:px-3 text-center font-mono font-bold transition-colors text-xs"
                            :class="
                              selectedVariable === 'x1'
                                ? 'bg-medical-teal-light/30 text-medical-teal font-extrabold'
                                : 'text-slate-600'
                            "
                          >
                            0.2 hr
                          </td>
                          <td
                            class="py-2.5 px-1.5 sm:px-3 text-center font-mono font-bold transition-colors text-xs"
                            :class="
                              selectedVariable === 'x2'
                                ? 'bg-medical-sky/25 text-medical-sky-deep font-extrabold'
                                : 'text-slate-600'
                            "
                          >
                            0.5 hr
                          </td>
                          <td
                            class="py-2.5 px-1.5 sm:px-3 text-center font-mono font-bold transition-colors text-xs"
                            :class="
                              selectedVariable === 'x3'
                                ? 'bg-068/15 text-068 font-extrabold'
                                : 'text-slate-400'
                            "
                          >
                            0.0 hr
                          </td>
                        </tr>

                        <!-- Row 3: General Checkup Demand -->
                        <tr class="hover:bg-slate-50/50 transition-colors">
                          <td
                            class="py-2.5 px-2.5 sm:px-3 font-sans font-medium text-slate-700 text-[11px] sm:text-xs"
                          >
                            {{ t('home.math.varTableRow3') }}
                          </td>
                          <td
                            class="py-2.5 px-1.5 sm:px-3 text-center font-mono font-bold transition-colors text-xs"
                            :class="
                              selectedVariable === 'x1'
                                ? 'bg-medical-teal-light/30 text-medical-teal font-extrabold'
                                : 'text-slate-600'
                            "
                          >
                            1.0
                          </td>
                          <td
                            class="py-2.5 px-1.5 sm:px-3 text-center font-mono font-bold transition-colors text-xs"
                            :class="
                              selectedVariable === 'x2'
                                ? 'bg-medical-sky/25 text-medical-sky-deep font-extrabold'
                                : 'text-slate-400'
                            "
                          >
                            0.0
                          </td>
                          <td
                            class="py-2.5 px-1.5 sm:px-3 text-center font-mono font-bold transition-colors text-xs"
                            :class="
                              selectedVariable === 'x3'
                                ? 'bg-068/15 text-068 font-extrabold'
                                : 'text-slate-400'
                            "
                          >
                            0.0
                          </td>
                        </tr>

                        <!-- Row 4: Emergency & Equipment -->
                        <tr class="hover:bg-slate-50/50 transition-colors">
                          <td
                            class="py-2.5 px-2.5 sm:px-3 font-sans font-medium text-slate-700 text-[11px] sm:text-xs"
                          >
                            {{ t('home.math.varTableRow4') }}
                          </td>
                          <td
                            class="py-2.5 px-1.5 sm:px-3 text-center font-mono font-bold transition-colors text-xs"
                            :class="
                              selectedVariable === 'x1'
                                ? 'bg-medical-teal-light/30 text-medical-teal font-extrabold'
                                : 'text-slate-400'
                            "
                          >
                            0.0
                          </td>
                          <td
                            class="py-2.5 px-1.5 sm:px-3 text-center font-mono font-bold transition-colors text-xs"
                            :class="
                              selectedVariable === 'x2'
                                ? 'bg-medical-sky/25 text-medical-sky-deep font-extrabold'
                                : 'text-slate-400'
                            "
                          >
                            0.0
                          </td>
                          <td
                            class="py-2.5 px-1.5 sm:px-3 text-center font-mono font-bold transition-colors text-xs"
                            :class="
                              selectedVariable === 'x3'
                                ? 'bg-068/15 text-068 font-extrabold'
                                : 'text-slate-600'
                            "
                          >
                            1.0
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <!-- Helpful hint footer -->
              <div
                class="text-[11px] sm:text-xs text-slate-500 font-sans text-center mt-3 pt-2.5 border-t border-slate-200/60 leading-relaxed"
              >
                {{ t('home.math.clickCellHint') }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= 4. IMPACT: BEFORE VS AFTER COMPARISON ================= -->
    <!-- <section class="w-full bg-072 py-14 sm:py-20 border-t border-slate-200/80">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <div
            class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-medical-teal-light/40 text-medical-teal text-xs font-bold uppercase tracking-wider mb-3 border border-medical-teal/30 shadow-2xs"
          >
            {{ t('home.impact.tag') }}
          </div>
          <h3 class="text-2xl sm:text-4xl font-extrabold text-slate-dark-900 tracking-tight mb-2">
            {{ t('home.impact.title') }}
          </h3>
          <p class="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto">
            {{ t('home.impact.subtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          // Card 1: Traditional Method (Diagnostic Alert 068)
          <div
            class="bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:shadow-068/10 hover:-translate-y-1.5 border border-slate-200/80 hover:border-068/60 relative overflow-hidden transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div
                class="w-10 h-10 rounded-2xl bg-068/15 text-068 flex items-center justify-center font-bold mb-4 border border-068/30 shadow-2xs group-hover:scale-110 transition-transform"
              >
                ✕
              </div>
              <h4
                class="text-lg font-bold text-slate-dark-900 mb-2 group-hover:text-068 transition-colors"
              >
                {{ t('home.impact.traditionalTitle') }}
              </h4>
              <p class="text-xs sm:text-sm text-slate-500 mb-6 leading-relaxed">
                {{ t('home.impact.traditionalDesc') }}
              </p>
              <ul class="space-y-3 text-xs sm:text-sm text-slate-600 font-medium">
                <li class="flex items-center gap-2.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-068 shrink-0"></span>
                  <span>{{ t('home.impact.traditionalPoint1') }}</span>
                </li>
                <li class="flex items-center gap-2.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-068 shrink-0"></span>
                  <span>{{ t('home.impact.traditionalPoint2') }}</span>
                </li>
                <li class="flex items-center gap-2.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-068 shrink-0"></span>
                  <span>{{ t('home.impact.traditionalPoint3') }}</span>
                </li>
              </ul>
            </div>
          </div>

          // Card 2: Least Squares Optimization (Medical Teal)
          <div
            class="bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:shadow-medical-teal/10 hover:-translate-y-1.5 border border-slate-200/80 hover:border-medical-teal/60 relative overflow-hidden transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div
                class="w-10 h-10 rounded-2xl bg-medical-teal-light/40 text-medical-teal flex items-center justify-center font-bold mb-4 border border-medical-teal/30 shadow-2xs group-hover:scale-110 transition-transform"
              >
                ✓
              </div>
              <h4
                class="text-lg font-bold text-slate-dark-900 mb-2 group-hover:text-medical-teal transition-colors"
              >
                {{ t('home.impact.leastTitle') }}
              </h4>
              <p class="text-xs sm:text-sm text-slate-500 mb-6 leading-relaxed">
                {{ t('home.impact.leastDesc') }}
              </p>
              <ul class="space-y-3 text-xs sm:text-sm text-slate-600 font-medium">
                <li class="flex items-center gap-2.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-medical-teal shrink-0"></span>
                  <span>{{ t('home.impact.leastPoint1') }}</span>
                </li>
                <li class="flex items-center gap-2.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-medical-teal shrink-0"></span>
                  <span>{{ t('home.impact.leastPoint2') }}</span>
                </li>
                <li class="flex items-center gap-2.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-medical-teal shrink-0"></span>
                  <span>{{ t('home.impact.leastPoint3') }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section> -->
  </div>
</template>

<style scoped>
.floating-card-left {
  animation: floatLeft 6s ease-in-out infinite;
}
.floating-card-right {
  animation: floatRight 7s ease-in-out infinite;
}
@keyframes floatLeft {
  0%,
  100% {
    transform: translateY(0) rotate(-4deg);
  }
  50% {
    transform: translateY(-15px) rotate(-1deg);
  }
}
@keyframes floatRight {
  0%,
  100% {
    transform: translateY(0) rotate(3deg);
  }
  50% {
    transform: translateY(-12px) rotate(0deg);
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fadeIn {
  animation: fadeIn 0.3s ease-out forwards;
}
</style>
