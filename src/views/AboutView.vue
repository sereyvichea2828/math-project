<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'

const { t } = useI18n()

// All 10 Team Members Data
const teamMembers = computed(() => [
  {
    id: 4,
    nameKey: 'about.team.m4Name',
    // category: 'research',
    roleKey: 'about.team.m4Role',
    bioKey: 'about.team.m4Bio',
    image: '/images/Meas.jpeg',
    avatarBg: 'from-violet-600 to-purple-700',
    initials: 'TT',
    // tags: ['Utilization Ratios', 'Feasibility', 'Bottlenecks'],
    telegram: 'https://t.me/Sameas_Tuy',
  },
  {
    id: 10,
    nameKey: 'about.team.m10Name',
    // category: 'math',
    roleKey: 'about.team.m10Role',
    bioKey: 'about.team.m10Bio',
    image: '/images/Chea.jpeg',
    avatarBg: 'from-purple-600 to-indigo-600',
    initials: 'TS',
    // tags: ['Project Lead', 'Linear Algebra', 'Normal Eq'],
    telegram: 'https://t.me/IsMeeHorng999',
  },
  {
    id: 21,
    nameKey: 'about.team.m21Name',
    // category: 'dev',
    roleKey: 'about.team.m21Role',
    bioKey: 'about.team.m21Bio',
    image: '/images/Seth.jpeg',
    avatarBg: 'from-fuchsia-600 to-pink-600',
    initials: 'PP',
    // tags: ['UI/UX', 'Tailwind CSS', 'Design Systems'],
    telegram: 'https://t.me/+85569306904',
  },
  {
    id: 23,
    nameKey: 'about.team.m23Name',
    // category: 'dev',
    roleKey: 'about.team.m23Role',
    bioKey: 'about.team.m23Bio',
    image: '/images/Nang.jpg',
    avatarBg: 'from-amber-600 to-orange-600',
    initials: 'PS',
    // tags: ['Pinia Store', 'Local Persistence', 'Vue Router'],
    telegram: 'https://t.me/dinothunhnas',
  },
  {
    id: 24,
    nameKey: 'about.team.m24Name',
    // category: 'dev',
    roleKey: 'about.team.m24Role',
    bioKey: 'about.team.m24Bio',
    image: '/images/Seng.jpeg',
    avatarBg: 'from-cyan-600 to-blue-600',
    initials: 'BC',
    // tags: ['vue-i18n', 'Khmer Localization', 'English'],
    telegram: 'https://t.me/bychongseng',
  },
  {
    id: 25,
    nameKey: 'about.team.m25Name',
    // category: 'dev',
    roleKey: 'about.team.m25Role',
    bioKey: 'about.team.m25Bio',
    image: '/images/Vid.jpg',
    avatarBg: 'from-emerald-600 to-teal-600',
    initials: 'BD',
    // tags: ['Vue 3 Composition API', 'Reactivity', 'Vite'],
    telegram: 'https://t.me/Vxdddd',
  },
  {
    id: 28,
    nameKey: 'about.team.m28Name',
    // category: 'math',
    roleKey: 'about.team.m28Role',
    bioKey: 'about.team.m28Bio',
    image: '/images/Sela.jpeg',
    avatarBg: 'from-pink-600 to-rose-600',
    initials: 'BS',
    // tags: ['Column Rank', 'Orthogonal Space', 'Derivations'],
    telegram: 'https://t.me/YABOiFinn',
  },
  {
    id: 30,
    nameKey: 'about.team.m30Name',
    // category: 'research',
    roleKey: 'about.team.m30Role',
    bioKey: 'about.team.m30Bio',
    image: '/images/Yan.jpg',
    avatarBg: 'from-teal-600 to-emerald-700',
    initials: 'BB',
    // tags: ['Clinical Ops', 'Hospital Constraints', 'Healthcare'],
    telegram: 'https://t.me/YAN_Still_Learning',
  },
  {
    id: 32,
    nameKey: 'about.team.m32Name',
    // category: 'math',
    roleKey: 'about.team.m32Role',
    bioKey: 'about.team.m32Bio',
    image: '/images/Tra.jpg',
    avatarBg: 'from-indigo-600 to-violet-600',
    initials: 'BP',
    // tags: ['Regression', 'Residual Norm', 'Math Proofs'],
    telegram: 'https://t.me/Pheaktra_Barang',
  },
  {
    id: 57,
    nameKey: 'about.team.m57Name',
    // category: 'math',
    roleKey: 'about.team.m57Role',
    bioKey: 'about.team.m57Bio',
    image: '/images/Heng.jpeg',
    avatarBg: 'from-blue-600 to-cyan-600',
    initials: 'PS',
    // tags: ['Matrix Inversion', 'Least Squares', 'Algorithms'],
    telegram: 'https://t.me/Sovann_henggg',
  },
])

const filteredMembers = computed(() => {
  // let list = teamMembers.value
  // if (activeTeamFilter.value !== 'all') {
  //   list = list.filter((m) => m.category === activeTeamFilter.value)
  // }
  // if (searchQuery.value.trim()) {
  //   const q = searchQuery.value.toLowerCase()
  //   list = list.filter(
  //     (m) =>
  //       t(m.nameKey).toLowerCase().includes(q) ||
  //       t(m.roleKey).toLowerCase().includes(q) ||
  //       t(m.bioKey).toLowerCase().includes(q) ||
  //       m.tags.some((tag) => tag.toLowerCase().includes(q)),
  //   )
  // }
  return teamMembers.value
})
</script>

<template>
  <div class="min-h-screen bg-072 text-slate-dark-900 transition-colors duration-300">
    <!-- ================= 1. HERO SECTION ================= -->
    <section
      class="relative pt-10 sm:pt-16 pb-12 sm:pb-20 overflow-hidden flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto"
    >
      <!-- Top Ambient Glow -->
      <div
        class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-medical-sky/30 to-medical-teal/20 opacity-40 sm:left-[calc(50%-30rem)] sm:w-288.75"
        ></div>
      </div>

      <!-- Main Headline -->
      <h1
        class="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-dark-900 leading-[1.2] sm:leading-[1.12] mb-6 sm:mb-8 max-w-4xl z-20 text-balance"
        v-html="t('about.hero.title')"
      ></h1>

      <!-- Subtitle Blockquote matching blog quote style -->
      <blockquote
        class="border-l-4 border-medical-teal bg-072 py-3.5 sm:py-4 px-4 sm:px-8 rounded-r-xl max-w-3xl mx-auto mb-8 sm:mb-12 text-left not-italic font-medium text-slate-700 text-sm sm:text-base md:text-lg leading-relaxed shadow-sm z-20"
      >
        "{{ t('about.hero.subtitle') }}"
      </blockquote>

      <!-- Key Project Statistics Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-5 w-full max-w-2xl mx-auto z-20">
        <!-- Stat Card 1: Linear Constraints (m) -->
        <!-- <div
          class="relative bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden text-left"
        >
          <div
            class="absolute -top-10 -right-10 w-24 h-24 bg-medical-sky/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          ></div>
          <div class="flex items-center justify-between mb-4">
            <div
              class="w-10 h-10 rounded-xl bg-medical-sky/20 text-medical-sky-deep flex items-center justify-center border border-medical-sky/30 shadow-2xs group-hover:scale-110 transition-transform"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                ></path>
              </svg>
            </div>
            <span
              class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-medical-sky/15 text-medical-sky-deep border border-medical-sky/20"
            >
              m = 4
            </span>
          </div>
          <div
            class="text-2xl sm:text-3xl font-black font-mono text-slate-dark-900 tracking-tight mb-1 group-hover:text-medical-sky-deep transition-colors"
          >
            4
          </div>
          <div class="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
            {{ t('about.hero.stats.constraints') }}
          </div>
          <div class="text-[11px] font-medium text-slate-400 mt-0.5">
            {{ t('about.hero.stats.constraintsSub') }}
          </div>
        </div> -->

        <!-- Stat Card 2: Decision Variables (n) -->
        <!-- <div
          class="relative bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden text-left"
        >
          <div
            class="absolute -top-10 -right-10 w-24 h-24 bg-medical-teal/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          ></div>
          <div class="flex items-center justify-between mb-4">
            <div
              class="w-10 h-10 rounded-xl bg-medical-teal/15 text-medical-teal flex items-center justify-center border border-medical-teal/30 shadow-2xs group-hover:scale-110 transition-transform"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                ></path>
              </svg>
            </div>
            <span
              class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-medical-teal/15 text-medical-teal border border-medical-teal/20"
            >
              n = 2
            </span>
          </div>
          <div
            class="text-2xl sm:text-3xl font-black font-mono text-slate-dark-900 tracking-tight mb-1 group-hover:text-medical-teal transition-colors"
          >
            2
          </div>
          <div class="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
            {{ t('about.hero.stats.variables') }}
          </div>
          <div class="text-[11px] font-medium text-slate-400 mt-0.5">
            {{ t('about.hero.stats.variablesSub') }}
          </div>
        </div> -->

        <!-- Stat Card 3: Solver Latency -->
        <div
          class="relative bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden text-left"
        >
          <div
            class="absolute -top-10 -right-10 w-24 h-24 bg-cyan-400/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          ></div>
          <div class="flex items-center justify-between mb-4">
            <div
              class="w-10 h-10 rounded-xl bg-cyan-500/15 text-cyan-600 flex items-center justify-center border border-cyan-500/30 shadow-2xs group-hover:scale-110 transition-transform"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <span
              class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-cyan-500/15 text-cyan-700 border border-cyan-500/20"
            >
              Real-time
            </span>
          </div>
          <div
            class="text-2xl sm:text-3xl font-black font-mono text-slate-dark-900 tracking-tight mb-1 group-hover:text-cyan-600 transition-colors"
          >
            &lt; 1ms
          </div>
          <div class="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
            {{ t('about.hero.stats.runtime') }}
          </div>
          <div class="text-[11px] font-medium text-slate-400 mt-0.5">
            {{ t('about.hero.stats.runtimeSub') }}
          </div>
        </div>

        <!-- Stat Card 4: Team Members -->
        <div
          class="relative bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden text-left"
        >
          <div
            class="absolute -top-10 -right-10 w-24 h-24 bg-indigo-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          ></div>
          <div class="flex items-center justify-between mb-4">
            <div
              class="w-10 h-10 rounded-xl bg-indigo-500/15 text-indigo-600 flex items-center justify-center border border-indigo-500/30 shadow-2xs group-hover:scale-110 transition-transform"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
            </div>
            <span
              class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-indigo-500/15 text-indigo-700 border border-indigo-500/20"
            >
              10 Pax
            </span>
          </div>
          <div
            class="text-2xl sm:text-3xl font-black font-mono text-slate-dark-900 tracking-tight mb-1 group-hover:text-indigo-600 transition-colors"
          >
            10
          </div>
          <div class="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
            {{ t('about.hero.stats.members') }}
          </div>
          <div class="text-[11px] font-medium text-slate-400 mt-0.5">
            {{ t('about.hero.stats.membersSub') }}
          </div>
        </div>
      </div>
    </section>

    <!-- ================= 2. CORE PILLARS ================= -->
    <section
      class="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80"
    >
      <div class="text-center mb-8 sm:mb-14">
        <div
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-medical-teal-light/40 text-medical-teal text-xs font-bold uppercase tracking-wider mb-3 border border-medical-teal/30"
        >
          {{ t('about.pillars.tag') }}
        </div>
        <h2 class="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-dark-900 mb-3">
          {{ t('about.pillars.title') }}
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <!-- Pillar 1 -->
        <div
          class="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow relative overflow-hidden group flex flex-col justify-between"
        >
          <div
            class="w-12 h-12 rounded-2xl bg-072 text-medical-teal flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-slate-200/80 font-bold"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              ></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-slate-dark-900 mb-3">
            {{ t('about.pillars.p1Title') }}
          </h3>
          <p class="text-sm text-slate-600 leading-relaxed">
            {{ t('about.pillars.p1Desc') }}
          </p>
        </div>

        <!-- Pillar 2 -->
        <div
          class="bg-white rounded-3xl p-8 shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow relative overflow-hidden group"
        >
          <div
            class="w-12 h-12 rounded-2xl bg-072 text-medical-sky-deep flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-slate-200/80 font-bold"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              ></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-slate-dark-900 mb-3">
            {{ t('about.pillars.p2Title') }}
          </h3>
          <p class="text-sm text-slate-600 leading-relaxed">
            {{ t('about.pillars.p2Desc') }}
          </p>
        </div>
      </div>
    </section>

    <!-- ================= 3. ALL 10 TEAM MEMBERS SHOWCASE ================= -->
    <section
      class="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80"
    >
      <div class="text-center mb-8 sm:mb-10">
        <div
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-medical-teal-light/40 text-medical-teal text-xs font-bold uppercase tracking-wider mb-3 border border-medical-teal/30"
        >
          {{ t('about.team.tag') }}
        </div>
        <h2
          class="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-dark-900 mb-2 sm:mb-3"
        >
          {{ t('about.team.title') }}
        </h2>
        <p class="text-slate-600 max-w-2xl mx-auto text-xs sm:text-base">
          {{ t('about.team.subtitle') }}
        </p>
      </div>

      <!-- Team Members Card Responsive Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        <div
          v-for="member in filteredMembers"
          :key="member.id"
          class="bg-white rounded-3xl p-5 sm:p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group h-full"
        >
          <div>
            <!-- Header Avatar & Info -->
            <div class="flex items-center gap-3.5 mb-4">
              <!-- Real Profile Avatar with graceful initials fallback -->
              <div
                class="relative w-14 h-14 rounded-2xl overflow-hidden shadow-md shrink-0 group-hover:scale-105 transition-transform border border-slate-200/80 bg-linear-to-br flex items-center justify-center text-white font-black text-base"
                :class="member.avatarBg"
              >
                <span>{{ member.initials }}</span>
                <img
                  v-if="member.image"
                  :src="member.image"
                  :alt="t(member.nameKey)"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  style="image-rendering: -webkit-optimize-contrast"
                  loading="lazy"
                  @error="(e) => (e.target.style.display = 'none')"
                />
              </div>
              <div>
                <h3 class="text-base font-black text-slate-dark-900 leading-tight">
                  {{ t(member.nameKey) }}
                </h3>
                <span class="text-[11px] font-bold text-medical-teal block mt-0.5 leading-snug">
                  {{ t(member.roleKey) }}
                </span>
              </div>
            </div>

            <!-- Member Bio -->
            <p class="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-4">
              {{ t(member.bioKey) }}
            </p>

            <!-- Skill Tags -->
            <!-- <div class="flex flex-wrap gap-1 mb-4">
              <span
                v-for="tag in member.tags"
                :key="tag"
                class="px-2 py-0.5 rounded-md bg-072 border border-slate-200/60 text-[10px] font-bold text-slate-dark-800"
              >
                {{ tag }}
              </span>
            </div> -->
          </div>

          <!-- Bottom Links -->
          <div class="pt-3 border-t border-slate-100 flex items-center justify-between">
            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">
              ID: {{ member.id < 10 ? '0' + member.id : member.id }}
            </span>
            <a
              :href="member.telegram || 'https://t.me/sereyvichea2828'"
              target="_blank"
              rel="noopener noreferrer"
              class="text-xs font-bold text-slate-500 hover:text-[#24A1DE] flex items-center gap-1.5 transition-colors group/tg"
            >
              <svg
                class="w-3.5 h-3.5 fill-current text-[#24A1DE] group-hover/tg:scale-110 transition-transform"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"
                />
              </svg>
              <span>Telegram</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Empty State if search finds no results -->
      <!-- <div v-if="filteredMembers.length === 0" class="text-center py-16">
        <p class="text-sm font-bold text-slate-400">
          No members found matching "{{ searchQuery }}".
        </p>
      </div> -->
    </section>

    <!-- ================= 4. RESEARCH ROADMAP & TIMELINE ================= -->
    <!-- <section class="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-slate-200/80">
      <div class="text-center mb-14">
        <div
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-medical-teal-light/40 text-medical-teal text-xs font-bold uppercase tracking-wider mb-3 border border-medical-teal/30"
        >
          {{ t('about.roadmap.tag') }}
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-dark-900 mb-3">
          {{ t('about.roadmap.title') }}
        </h2>
      </div>

      <div class="space-y-6">
        <div
          class="flex items-start gap-4 p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs"
        >
          <div
            class="w-10 h-10 rounded-2xl bg-072 text-medical-teal font-mono font-bold flex items-center justify-center shrink-0 border border-slate-200/80"
          >
            01
          </div>
          <div>
            <h3 class="text-base font-bold text-slate-dark-900 mb-1">
              {{ t('about.roadmap.step1Title') }}
            </h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {{ t('about.roadmap.step1Desc') }}
            </p>
          </div>
        </div>

        <div
          class="flex items-start gap-4 p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs"
        >
          <div
            class="w-10 h-10 rounded-2xl bg-072 text-medical-sky-deep font-mono font-bold flex items-center justify-center shrink-0 border border-slate-200/80"
          >
            02
          </div>
          <div>
            <h3 class="text-base font-bold text-slate-dark-900 mb-1">
              {{ t('about.roadmap.step2Title') }}
            </h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {{ t('about.roadmap.step2Desc') }}
            </p>
          </div>
        </div>

        <div
          class="flex items-start gap-4 p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs"
        >
          <div
            class="w-10 h-10 rounded-2xl bg-072 text-medical-teal font-mono font-bold flex items-center justify-center shrink-0 border border-slate-200/80"
          >
            03
          </div>
          <div>
            <h3 class="text-base font-bold text-slate-dark-900 mb-1">
              {{ t('about.roadmap.step3Title') }}
            </h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {{ t('about.roadmap.step3Desc') }}
            </p>
          </div>
        </div>

        <div
          class="flex items-start gap-4 p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs"
        >
          <div
            class="w-10 h-10 rounded-2xl bg-072 text-medical-sky-deep font-mono font-bold flex items-center justify-center shrink-0 border border-slate-200/80"
          >
            04
          </div>
          <div>
            <h3 class="text-base font-bold text-slate-dark-900 mb-1">
              {{ t('about.roadmap.step4Title') }}
            </h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {{ t('about.roadmap.step4Desc') }}
            </p>
          </div>
        </div>
      </div>
    </section> -->

    <!-- ================= 6. FAQ ACCORDION ================= -->
    <!-- <section class="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-slate-200/80">
      <div class="text-center mb-12">
        <div
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-medical-teal-light/40 text-medical-teal text-xs font-bold uppercase tracking-wider mb-3 border border-medical-teal/30"
        >
          {{ t('about.faq.tag') }}
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-dark-900 mb-3">
          {{ t('about.faq.title') }}
        </h2>
      </div>

      <div class="space-y-4"> -->
    <!-- FAQ Item 1 -->
    <!-- <div class="rounded-2xl bg-white border border-slate-200/80 overflow-hidden shadow-xs">
          <button
            @click="toggleFaq(0)"
            class="w-full p-5 text-left font-bold text-sm sm:text-base text-slate-dark-900 flex items-center justify-between gap-4 cursor-pointer"
          >
            <span>{{ t('about.faq.q1') }}</span>
            <svg
              class="w-4 h-4 shrink-0 transition-transform duration-300 text-medical-teal"
              :class="openFaq === 0 ? 'rotate-180' : 'rotate-0'"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.5"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <div
            v-if="openFaq === 0"
            class="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3"
          >
            {{ t('about.faq.a1') }}
          </div>
        </div> -->

    <!-- FAQ Item 2 -->
    <!-- <div class="rounded-2xl bg-white border border-slate-200/80 overflow-hidden shadow-xs">
          <button
            @click="toggleFaq(1)"
            class="w-full p-5 text-left font-bold text-sm sm:text-base text-slate-dark-900 flex items-center justify-between gap-4 cursor-pointer"
          >
            <span>{{ t('about.faq.q2') }}</span>
            <svg
              class="w-4 h-4 shrink-0 transition-transform duration-300 text-medical-teal"
              :class="openFaq === 1 ? 'rotate-180' : 'rotate-0'"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.5"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <div
            v-if="openFaq === 1"
            class="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3"
          >
            {{ t('about.faq.a2') }}
          </div>
        </div> -->

    <!-- FAQ Item 3 -->
    <!-- <div class="rounded-2xl bg-white border border-slate-200/80 overflow-hidden shadow-xs">
          <button
            @click="toggleFaq(2)"
            class="w-full p-5 text-left font-bold text-sm sm:text-base text-slate-dark-900 flex items-center justify-between gap-4 cursor-pointer"
          >
            <span>{{ t('about.faq.q3') }}</span>
            <svg
              class="w-4 h-4 shrink-0 transition-transform duration-300 text-medical-teal"
              :class="openFaq === 2 ? 'rotate-180' : 'rotate-0'"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.5"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <div
            v-if="openFaq === 2"
            class="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3"
          >
            {{ t('about.faq.a3') }}
          </div>
        </div>
      </div>
    </section> -->

    <!-- ================= 7. BOTTOM CALL TO ACTION ================= -->
    <section
      class="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center border-t border-slate-200/80"
    >
      <div class="p-6 sm:p-12 rounded-3xl bg-white border border-slate-200/80 shadow-md">
        <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-dark-900 mb-3 sm:mb-4">
          {{ t('about.cta.title') }}
        </h2>
        <p class="text-xs sm:text-base text-slate-600 max-w-xl mx-auto mb-6 sm:mb-8">
          {{ t('about.cta.subtitle') }}
        </p>
        <div
          class="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-xs sm:max-w-none mx-auto"
        >
          <RouterLink
            to="/calculate"
            class="w-full sm:w-auto px-6 sm:px-8 py-3.5 text-sm font-bold text-white bg-medical-teal hover:bg-medical-teal-light/40 hover:text-medical-teal border border-medical-teal hover:border-medical-teal/40 rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <span>{{ t('about.cta.launchBtn') }}</span
            ><svg
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
          <RouterLink
            to="/"
            class="w-full sm:w-auto px-6 sm:px-8 py-3.5 text-sm font-bold text-slate-dark-800 bg-white/90 hover:bg-white border border-slate-200 hover:border-medical-sky-deep/60 hover:text-medical-sky-deep rounded-full transition-all duration-300 shadow-xs hover:shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95 group"
          >
            <span>{{ t('about.cta.homeBtn') }}</span>
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
        </div>
      </div>
    </section>
  </div>
</template>
