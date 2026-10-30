<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import { useToast } from '@/composables/useToast'

const { t } = useI18n()
const { showToast } = useToast()

const email = ref('')
const commentName = ref('')
const commentEmail = ref('')
const commentText = ref('')

const subscribe = () => {
  if (email.value) {
    showToast(email.value ? `បានជាវដោយជោគជ័យជាមួយ ${email.value}!` : 'Subscribed successfully!')
    email.value = ''
  }
}

const submitComment = () => {
  if (commentName.value && commentText.value) {
    showToast(`បានបញ្ជូនមតិដោយ ${commentName.value} រួចរាល់!`)
    commentName.value = ''
    commentEmail.value = ''
    commentText.value = ''
  }
}

const articles = [
  {
    id: '1',
    formula: 'AᵀAx = Aᵀb',
    iconBg: 'bg-medical-sky-deep/10 text-medical-sky-deep border-medical-sky-deep/20',
  },
  {
    id: '2',
    formula: 'v-memo & Proxy',
    iconBg: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
  },
  {
    id: '3',
    formula: 'min ||b - Ax||₂',
    iconBg: 'bg-indigo-500/10 text-indigo-600 border-indigo-500/20',
  },
]
</script>

<template>
  <div
    class="relative min-h-screen bg-072 text-slate-dark-900 pb-24 transition-colors duration-300 overflow-hidden"
  >
    <!-- Soft Ambient Top Glow -->
    <div
      class="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl pointer-events-none"
      aria-hidden="true"
    >
      <div
        class="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-medical-sky/20 to-medical-teal/15 opacity-50 sm:left-[calc(50%-25rem)] sm:w-240"
      ></div>
    </div>

    <!-- ================= 1. PAGE HERO HEADER ================= -->
    <header class="pt-16 pb-12 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div
        class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md text-medical-sky-deep text-xs font-black uppercase tracking-wider mb-6 shadow-xs border border-medical-sky-deep/25"
      >
        <span class="w-1.5 h-1.5 rounded-full bg-medical-sky-deep animate-pulse"></span>
        {{ t('blogs.header.tag') }}
      </div>

      <h1
        class="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-dark-900 mb-5 leading-tight"
        v-html="t('blogs.header.title')"
      ></h1>

      <p
        class="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed"
      >
        {{ t('blogs.header.subtitle') }}
      </p>
    </header>

    <!-- ================= 2. MAIN LAYOUT ================= -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-10 lg:gap-12">
      <!-- Main Content Area (Left Column) -->
      <div class="lg:w-2/3 xl:w-3/4 w-full">
        <!-- Featured Article Hero Card -->
        <RouterLink
          :to="{ name: 'blog-post', params: { id: 'featured' } }"
          class="group block bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(2,132,199,0.12)] hover:border-medical-sky-deep/40 transition-all duration-300 relative overflow-hidden"
        >
          <!-- Metadata Row -->
          <div class="flex flex-wrap items-center gap-2.5 text-xs font-bold text-slate-500 mb-4">
            <span
              class="bg-medical-sky-deep text-white px-3 py-0.5 rounded-full font-black text-[11px] uppercase tracking-wider shadow-xs"
            >
              {{ t('blogsData.articles.featured.category') }}
            </span>
            <span class="text-slate-300">&bull;</span>
            <span class="inline-flex items-center gap-1 text-slate-500">
              <svg
                class="w-3.5 h-3.5 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {{ t('blogsData.articles.featured.readTime') }}
            </span>
            <span class="text-slate-300">&bull;</span>
            <span class="text-slate-400 font-mono text-[11px] font-medium">
              {{ t('blogsData.articles.featured.date') }}
            </span>
          </div>

          <!-- Featured Title -->
          <h2
            class="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-dark-900 mb-4 leading-snug group-hover:text-medical-sky-deep transition-colors"
          >
            {{ t('blogsData.articles.featured.title') }}
          </h2>

          <!-- Featured Excerpt -->
          <p
            class="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 line-clamp-3 font-normal"
          >
            {{ t('blogs.featured.desc') }}
          </p>

          <!-- Footer Actions & Formula Badge -->
          <div
            class="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-100"
          >
            <div class="flex items-center gap-3">
              <div
                class="w-9 h-9 rounded-xl bg-medical-sky-deep/10 border border-medical-sky-deep/20 text-medical-sky-deep flex items-center justify-center font-black text-xs"
              >
                IB
              </div>
              <div>
                <p class="text-xs font-black text-slate-dark-900 leading-tight">
                  {{ t('blogsData.articles.featured.author') }}
                </p>
                <p class="text-[11px] text-slate-400 font-medium">ITE Boys Research Lab</p>
              </div>
            </div>

            <span
              class="inline-flex items-center gap-1.5 text-xs font-black text-medical-sky-deep group-hover:translate-x-1 transition-transform"
            >
              <span>{{ t('blogs.article.readArticle') }}</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </div>
        </RouterLink>

        <!-- ================= 3. LATEST RESEARCH GRID ================= -->
        <div class="mt-14">
          <div class="flex items-center gap-3 mb-6">
            <h2 class="text-xl sm:text-2xl font-black text-slate-dark-900 tracking-tight">
              {{ t('blogs.latest.title') }}
            </h2>
            <div class="flex-1 h-px bg-slate-200/80"></div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RouterLink
              v-for="article in articles"
              :key="article.id"
              :to="{ name: 'blog-post', params: { id: article.id } }"
              class="group bg-white rounded-3xl p-6 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-medical-sky-deep/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <!-- Card Header Visual Formula Banner -->
                <div
                  class="w-full h-32 rounded-2xl mb-5 border flex flex-col items-center justify-center relative overflow-hidden transition-all duration-300"
                  :class="article.iconBg"
                >
                  <!-- Soft mathematical background grid -->
                  <div
                    class="absolute inset-0 opacity-15 bg-[radial-gradient(#000_1px,transparent_1px)] bg-size-[12px_12px]"
                  ></div>
                  <span
                    class="font-mono text-xs font-black uppercase tracking-wider relative z-10 px-3 py-1 rounded-lg bg-white/80 backdrop-blur-xs shadow-xs border border-current/10"
                  >
                    {{ article.formula }}
                  </span>
                </div>

                <!-- Category & Read Time -->
                <div class="flex items-center gap-2 text-[11px] font-bold text-slate-500 mb-3">
                  <span
                    class="text-medical-sky-deep bg-medical-sky-deep/10 px-2.5 py-0.5 rounded-full font-black uppercase tracking-wider text-[10px]"
                  >
                    {{ t(`blogsData.articles.${article.id}.category`) }}
                  </span>
                  <span class="text-slate-300">&bull;</span>
                  <span>{{ t(`blogsData.articles.${article.id}.readTime`) }}</span>
                </div>

                <!-- Article Title -->
                <h3
                  class="text-lg font-black text-slate-dark-900 mb-3 leading-snug group-hover:text-medical-sky-deep transition-colors"
                >
                  {{ t(`blogsData.articles.${article.id}.title`) }}
                </h3>

                <!-- Excerpt -->
                <p class="text-xs sm:text-sm text-slate-600 mb-6 line-clamp-3 leading-relaxed">
                  {{ t(`blogsData.articles.${article.id}.excerpt`) }}
                </p>
              </div>

              <!-- Card Bottom Metadata -->
              <div class="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                <span class="text-xs font-bold text-slate-700">
                  {{ t(`blogsData.articles.${article.id}.author`) }}
                </span>
                <span class="text-xs font-mono text-slate-400">
                  {{ t(`blogsData.articles.${article.id}.date`) }}
                </span>
              </div>
            </RouterLink>
          </div>
        </div>

        <!-- ================= 4. ARTICLE COMMENTS / DISCUSSION ================= -->
        <div class="mt-14 pt-8 border-t border-slate-200/80">
          <div class="mb-6">
            <h3 class="text-xl sm:text-2xl font-black text-slate-dark-900">
              {{ t('blogs.comments.title') }}
            </h3>
          </div>

          <form
            @submit.prevent="submitComment"
            class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.03)] space-y-5"
          >
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  for="name"
                  class="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2"
                >
                  {{ t('blogs.comments.name') }}
                </label>
                <input
                  type="text"
                  id="name"
                  v-model="commentName"
                  required
                  class="block w-full rounded-2xl border border-slate-200/90 bg-slate-50/70 shadow-xs focus:bg-white focus:border-medical-sky-deep focus:ring-2 focus:ring-medical-sky-deep/20 text-slate-dark-900 sm:text-sm px-4 py-3 transition-all placeholder:text-slate-400 outline-none"
                  :placeholder="t('blogs.comments.namePlace')"
                />
              </div>

              <div>
                <label
                  for="commentEmail"
                  class="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2"
                >
                  {{ t('blogs.comments.email') }}
                </label>
                <input
                  type="email"
                  id="commentEmail"
                  v-model="commentEmail"
                  class="block w-full rounded-2xl border border-slate-200/90 bg-slate-50/70 shadow-xs focus:bg-white focus:border-medical-sky-deep focus:ring-2 focus:ring-medical-sky-deep/20 text-slate-dark-900 sm:text-sm px-4 py-3 transition-all placeholder:text-slate-400 outline-none"
                  :placeholder="t('blogs.comments.emailPlace')"
                />
              </div>
            </div>

            <div>
              <label
                for="comment"
                class="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2"
              >
                {{ t('blogs.comments.comment') }}
              </label>
              <textarea
                id="comment"
                rows="4"
                v-model="commentText"
                required
                class="block w-full rounded-2xl border border-slate-200/90 bg-slate-50/70 shadow-xs focus:bg-white focus:border-medical-sky-deep focus:ring-2 focus:ring-medical-sky-deep/20 text-slate-dark-900 sm:text-sm px-4 py-3 transition-all resize-none placeholder:text-slate-400 outline-none"
                :placeholder="t('blogs.comments.commentPlace')"
              ></textarea>
            </div>

            <div class="flex justify-end">
              <button
                type="submit"
                class="px-8 py-3 rounded-full shadow-md text-xs font-black text-white bg-medical-sky-deep hover:bg-sky-600 hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all cursor-pointer"
              >
                {{ t('blogs.comments.submit') }}
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- ================= 5. SIDEBAR ================= -->
      <aside class="lg:w-1/3 xl:w-1/4 w-full flex flex-col gap-8">
        <!-- Author Profile Card -->
        <div
          class="bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-200/90 text-center"
        >
          <div
            class="w-18 h-18 mx-auto rounded-full bg-linear-to-tr from-medical-sky-deep to-medical-teal p-1 shadow-md mb-4"
          >
            <div
              class="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-white font-black text-lg"
            >
              IB
            </div>
          </div>

          <h3 class="text-lg font-black text-slate-dark-900">
            {{ t('blogs.sidebar.authorTitle') }}
          </h3>
          <p class="text-[11px] text-medical-sky-deep font-bold uppercase tracking-wider mb-3">
            {{ t('blogs.sidebar.authorTag') }}
          </p>
          <p class="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
            {{ t('blogs.sidebar.authorDesc') }}
          </p>
          <RouterLink
            to="/about"
            class="inline-block w-full py-2.5 rounded-full border border-slate-200 bg-slate-50 text-xs font-bold text-slate-700 hover:bg-medical-sky-deep hover:border-medical-sky-deep hover:text-white transition-all shadow-xs"
          >
            {{ t('blogs.sidebar.meetTeam') }}
          </RouterLink>
        </div>

        <!-- Newsletter Subscription Card -->
        <div
          class="bg-linear-to-br from-slate-900 via-slate-900 to-slate-950 rounded-3xl p-6 shadow-xl border border-slate-800 text-white relative overflow-hidden group"
        >
          <div
            class="absolute top-0 right-0 -mt-4 -mr-4 w-28 h-28 bg-medical-sky-deep/20 rounded-full blur-2xl pointer-events-none"
          ></div>

          <h3 class="text-lg font-black mb-2 relative z-10">{{ t('blogs.sidebar.newsTitle') }}</h3>
          <p class="text-xs text-slate-300 mb-5 relative z-10 leading-relaxed">
            {{ t('blogs.sidebar.newsDesc') }}
          </p>

          <form @submit.prevent="subscribe" class="relative z-10 space-y-3.5">
            <div>
              <label for="subscribeEmail" class="sr-only">Email address</label>
              <input
                type="email"
                id="subscribeEmail"
                v-model="email"
                required
                class="block w-full rounded-xl border border-slate-700 bg-slate-800/90 shadow-inner focus:border-medical-sky-deep focus:ring-1 focus:ring-medical-sky-deep text-white text-xs px-4 py-3 placeholder:text-slate-400 outline-none transition-colors"
                :placeholder="t('blogs.sidebar.emailPlace')"
              />
            </div>

            <div class="flex items-start gap-2">
              <div class="flex items-center h-4">
                <input
                  id="privacy"
                  type="checkbox"
                  required
                  class="h-3.5 w-3.5 rounded border-slate-700 bg-slate-800 text-medical-sky-deep focus:ring-medical-sky-deep cursor-pointer"
                />
              </div>
              <label
                for="privacy"
                class="text-[10.5px] text-slate-300 leading-tight cursor-pointer"
              >
                {{ t('blogs.sidebar.privacy') }}
              </label>
            </div>

            <button
              type="submit"
              class="w-full flex justify-center py-2.5 px-4 rounded-xl shadow-md text-xs font-black text-white bg-medical-sky-deep hover:bg-sky-600 active:scale-95 transition-all cursor-pointer"
            >
              {{ t('blogs.sidebar.subscribe') }}
            </button>
          </form>
        </div>

        <!-- Topics Categories -->
        <div
          class="bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-200/90"
        >
          <h3
            class="text-xs font-black uppercase tracking-wider mb-4 border-b border-slate-100 pb-3 text-slate-500"
          >
            {{ t('blogs.sidebar.topics') }}
          </h3>
          <ul class="space-y-2">
            <li>
              <a
                href="#"
                class="group flex items-center justify-between py-2 text-xs font-semibold text-slate-600 hover:text-medical-sky-deep transition-colors"
              >
                <span>{{ t('blogs.sidebar.topicsList.math') }}</span>
                <span
                  class="bg-slate-100 px-2 py-0.5 rounded-md text-[11px] group-hover:bg-medical-sky-deep/10 group-hover:text-medical-sky-deep font-mono font-bold"
                  >12</span
                >
              </a>
            </li>
            <li>
              <a
                href="#"
                class="group flex items-center justify-between py-2 text-xs font-semibold text-slate-600 hover:text-medical-sky-deep transition-colors"
              >
                <span>{{ t('blogs.sidebar.topicsList.vue') }}</span>
                <span
                  class="bg-slate-100 px-2 py-0.5 rounded-md text-[11px] group-hover:bg-medical-sky-deep/10 group-hover:text-medical-sky-deep font-mono font-bold"
                  >8</span
                >
              </a>
            </li>
            <li>
              <a
                href="#"
                class="group flex items-center justify-between py-2 text-xs font-semibold text-slate-600 hover:text-medical-sky-deep transition-colors"
              >
                <span>{{ t('blogs.sidebar.topicsList.ui') }}</span>
                <span
                  class="bg-slate-100 px-2 py-0.5 rounded-md text-[11px] group-hover:bg-medical-sky-deep/10 group-hover:text-medical-sky-deep font-mono font-bold"
                  >5</span
                >
              </a>
            </li>
            <li>
              <a
                href="#"
                class="group flex items-center justify-between py-2 text-xs font-semibold text-slate-600 hover:text-medical-sky-deep transition-colors"
              >
                <span>{{ t('blogs.sidebar.topicsList.health') }}</span>
                <span
                  class="bg-slate-100 px-2 py-0.5 rounded-md text-[11px] group-hover:bg-medical-sky-deep/10 group-hover:text-medical-sky-deep font-mono font-bold"
                  >3</span
                >
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </main>
  </div>
</template>
