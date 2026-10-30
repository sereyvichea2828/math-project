<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useAppStore } from '@/stores/app'
import { useToast } from '@/composables/useToast'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()
const appStore = useAppStore()
const { showToast } = useToast()

const articleId = computed(() => String(route.params.id || 'featured'))

// Dynamic articles dataset metadata
const articlesMeta = [
  {
    id: 'featured',
    authorKey: 'Try Sereyvichea',
    authorRoleKey: 'Project Lead & System Architect',
    authorRoleKm: 'ប្រធានគម្រោង & គំរូប្រព័ន្ធ',
    authorBioEn:
      'Research lead in overdetermined linear systems, Normal Equation optimization, and real-time matrix solvers.',
    authorBioKm:
      'ប្រធានដឹកនាំការស្រាវជ្រាវប្រព័ន្ធសមីការ Overdetermined និងការទាញរករូបមន្តចំណោលកែង Normal Equation។',
    authorImage: '/images/Chea.jpeg',
    authorInitial: 'TS',
    badgeEn: 'Featured Research',
    badgeKm: 'អត្ថបទពិសេស',
    gradient: 'from-medical-sky-deep via-cyan-500 to-medical-teal',
    formula: 'AᵀAx = Aᵀb',
    accentColor: 'text-medical-sky-deep',
  },
  {
    id: '1',
    authorKey: 'Try Sereyvichea',
    authorRoleKey: 'Project Lead & System Architect',
    authorRoleKm: 'ប្រធានគម្រោង & គំរូប្រព័ន្ធ',
    authorBioEn:
      'Specializing in sparse matrix memory optimization and sub-millisecond solver execution.',
    authorBioKm:
      'ឯកទេសខាងការបង្កើនប្រសិទ្ធភាពទំហំអង្គចងចាំ Sparse Matrix និងការកាត់បន្ថយពេលវេលាដោះស្រាយក្រោម 1ms។',
    authorImage: '/images/Chea.jpeg',
    authorInitial: 'TS',
    badgeEn: 'Engineering',
    badgeKm: 'វិស្វកម្ម',
    gradient: 'from-blue-600 via-sky-500 to-cyan-400',
    formula: 'CSR(A) → min t < 1ms',
    accentColor: 'text-blue-600',
  },
  {
    id: '2',
    authorKey: 'Phatt Sovanheng',
    authorRoleKey: 'Linear Algorithm Engineer',
    authorRoleKm: 'វិស្វករក្បួនដោះស្រាយលីនេអ៊ែរ',
    authorBioEn:
      'Specializing in matrix inversion routines, condition numbers, and least squares closed-form proofs.',
    authorBioKm:
      'ឯកទេសខាងក្បួនគណនា Matrix Inversion និងការដោះស្រាយ Least Squares Closed-form Solution។',
    authorImage: '/images/Heng.jpeg',
    authorInitial: 'PS',
    badgeEn: 'Mathematics',
    badgeKm: 'គណិតវិទ្យា',
    gradient: 'from-purple-600 via-indigo-500 to-blue-500',
    formula: 'min ‖b - Ax‖₂² ⟹ Aᵀ(b - Ax) = 0',
    accentColor: 'text-purple-600',
  },
  {
    id: '3',
    authorKey: 'Bunna David',
    authorRoleKey: 'Pure Vue 3 Frontend Architect',
    authorRoleKm: 'ស្ថាបត្យករ Pure Vue 3 Frontend',
    authorBioEn:
      'Crafting responsive, reactive interfaces and matrix state pipelines with modern Vue 3 Composition API.',
    authorBioKm:
      'រៀបចំ Composition API Components ប្រព័ន្ធ Reactive State និងស្ថាបត្យកម្មកូដ Pure Vue 3 ទំនើប។',
    authorImage: '/images/Vid.jpg',
    authorInitial: 'BD',
    badgeEn: 'Frontend',
    badgeKm: 'ផ្នែកខាងមុខ (Frontend)',
    gradient: 'from-emerald-600 via-teal-500 to-cyan-500',
    formula: 'State(A, b) ⇄ ReactiveSolver',
    accentColor: 'text-emerald-600',
  },
]

const currentMeta = computed(() => {
  return articlesMeta.find((a) => a.id === articleId.value) || articlesMeta[0]
})

const post = computed(() => {
  const id = articleId.value
  return {
    id,
    ...currentMeta.value,
  }
})

// Related articles (excluding current article)
const relatedArticles = computed(() => {
  return articlesMeta.filter((a) => a.id !== articleId.value).slice(0, 2)
})

// Reading Progress
const scrollProgress = ref(0)
const handleScroll = () => {
  const totalHeight = document.documentElement.scrollHeight - window.innerHeight
  if (totalHeight > 0) {
    scrollProgress.value = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100))
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const copyArticleLink = async () => {
  try {
    await navigator.clipboard.writeText(window.location.href)
    showToast(t('blogs.article.copiedToast'))
  } catch {
    showToast(t('blogs.article.copiedToast'))
  }
}

const shareTelegram = () => {
  const url = encodeURIComponent(window.location.href)
  const text = encodeURIComponent(t(`blogsData.articles.${post.value.id}.title`))
  window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank')
}

const goBack = () => {
  router.push({ name: 'blogs' })
}
</script>

<template>
  <div
    class="relative min-h-screen bg-072 text-slate-dark-900 pt-4 pb-28 sm:pb-24 transition-colors duration-300 overflow-x-hidden"
  >
    <!-- Reading Progress Bar (Fixed Top) -->
    <div
      class="fixed top-0 left-0 h-1 bg-linear-to-r from-medical-sky-deep via-cyan-500 to-medical-teal z-50 transition-all duration-100 ease-out"
      :style="{ width: `${scrollProgress}%` }"
      aria-hidden="true"
    ></div>

    <!-- Ambient Background Glows -->
    <div
      class="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl pointer-events-none"
      aria-hidden="true"
    >
      <div
        class="relative left-[calc(50%-12rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-medical-sky/35 to-medical-teal/25 opacity-50 sm:left-[calc(50%-30rem)] sm:w-288.75"
      ></div>
    </div>

    <!-- Main Container -->
    <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Top Action Navigation Bar -->
      <div class="flex items-center justify-between gap-3 mb-6 sm:mb-8 pt-2">
        <!-- Back to Blogs Pill Button -->
        <button
          @click="goBack"
          class="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full border border-slate-200/80 bg-white/90 backdrop-blur-md text-xs font-bold text-slate-dark-800 hover:text-medical-sky-deep hover:border-medical-sky-deep/40 hover:bg-white transition-all shadow-xs cursor-pointer active:scale-95 group"
        >
          <svg
            class="w-4 h-4 transition-transform group-hover:-translate-x-0.5 text-slate-500 group-hover:text-medical-sky-deep"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
          <span>{{ t('blogs.article.backToBlogs') }}</span>
        </button>

        <!-- Right Quick Actions (Share & Copy Link) -->
        <div class="flex items-center gap-2">
          <!-- Copy Link Button -->
          <button
            @click="copyArticleLink"
            class="inline-flex items-center gap-1.5 px-3 py-2 rounded-full border border-slate-200/80 bg-white/90 backdrop-blur-md text-xs font-bold text-slate-700 hover:text-medical-sky-deep hover:border-medical-sky-deep/40 hover:bg-white transition-all shadow-xs cursor-pointer active:scale-95"
            :title="t('blogs.article.copyLink')"
          >
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            <span class="hidden sm:inline">{{ t('blogs.article.copyLink') }}</span>
          </button>

          <!-- Telegram Share Button -->
          <button
            @click="shareTelegram"
            class="w-8 h-8 rounded-full border border-slate-200/80 bg-white/90 backdrop-blur-md text-[#24A1DE] hover:bg-[#24A1DE] hover:text-white hover:border-[#24A1DE] flex items-center justify-center transition-all shadow-xs cursor-pointer active:scale-95"
            title="Share via Telegram"
          >
            <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"
              />
            </svg>
          </button>
        </div>
      </div>

      <template v-if="post">
        <!-- ================= ARTICLE HEADER ================= -->
        <header class="mb-8 sm:mb-12">
          <!-- Category Pill & Read Time Metadata -->
          <div
            class="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-bold text-slate-500 mb-4"
          >
            <span
              class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-medical-sky-deep/10 border border-medical-sky-deep/30 text-medical-sky-deep uppercase tracking-wider text-[11px]"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-medical-sky-deep animate-pulse"></span>
              {{ appStore.currentLocale === 'km' ? post.badgeKm : post.badgeEn }}
            </span>
            <span class="text-slate-300">&bull;</span>
            <span class="inline-flex items-center gap-1">
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
              {{ t(`blogsData.articles.${post.id}.date`) }}
            </span>
            <span class="text-slate-300">&bull;</span>
            <span class="inline-flex items-center gap-1">
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
                ></path>
              </svg>
              {{ t(`blogsData.articles.${post.id}.readTime`) }}
            </span>
          </div>

          <!-- Main Article Title -->
          <h1
            class="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-dark-900 mb-6 sm:mb-8 leading-snug sm:leading-tight"
          >
            {{ t(`blogsData.articles.${post.id}.title`) }}
          </h1>

          <!-- Author Info Card -->
          <div
            class="flex items-center justify-between gap-4 p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-xs"
          >
            <div class="flex items-center gap-3.5">
              <!-- Author Avatar -->
              <div
                class="relative w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center font-black text-white text-base shadow-sm shrink-0 border border-slate-200/80 bg-linear-to-br"
                :class="post.gradient"
              >
                <span>{{ post.authorInitial }}</span>
                <img
                  v-if="post.authorImage"
                  :src="post.authorImage"
                  :alt="t(`blogsData.articles.${post.id}.author`)"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  loading="lazy"
                  @error="(e) => (e.target.style.display = 'none')"
                />
              </div>

              <!-- Author Name & Title -->
              <div>
                <h4 class="font-bold text-slate-dark-900 text-sm sm:text-base leading-tight">
                  {{ t(`blogsData.articles.${post.id}.author`) }}
                </h4>
                <p class="text-xs text-medical-sky-deep font-semibold">
                  {{ appStore.currentLocale === 'km' ? post.authorRoleKm : post.authorRoleKey }}
                </p>
              </div>
            </div>

            <!-- Mathematical Pill Formula Badge -->
            <div
              class="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 text-cyan-300 font-mono text-xs font-bold border border-slate-800 shadow-inner"
            >
              <span>{{ post.formula }}</span>
            </div>
          </div>
        </header>

        <!-- ================= ARTICLE BODY CARD ================= -->
        <article
          class="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-slate-200/90 relative overflow-hidden mb-12"
        >
          <!-- Rich Article Typography Body -->
          <div
            class="article-body font-sans prose prose-slate max-w-none lg:prose-lg prose-headings:font-black prose-h2:text-slate-900 prose-p:text-slate-600 prose-a:text-medical-sky-deep prose-blockquote:border-medical-teal prose-blockquote:bg-medical-teal-light/10 prose-blockquote:py-2 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-li:marker:text-medical-sky-deep"
            v-html="t(`blogsData.articles.${post.id}.content`)"
          ></div>

          <!-- Bottom Article Highlights / Key Formula Note -->
          <div
            class="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-072/80 rounded-2xl p-4 border border-slate-200/60"
          >
            <div class="flex items-center gap-2.5 text-xs font-bold text-slate-700">
              <span
                class="w-7 h-7 rounded-lg bg-medical-sky-deep text-white flex items-center justify-center shrink-0 shadow-xs"
              >
                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29-3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"
                  />
                </svg>
              </span>
              <span
                >{{ t('blogs.article.keyInsights') }}:
                <strong class="font-mono text-medical-sky-deep">{{ post.formula }}</strong></span
              >
            </div>

            <button
              @click="copyArticleLink"
              class="text-xs font-bold text-medical-sky-deep hover:underline cursor-pointer flex items-center gap-1"
            >
              <span>{{ t('blogs.article.share') }}</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </article>

        <!-- ================= AUTHOR PROFILE FOOTER CARD ================= -->
        <div
          class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm mb-14 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6"
        >
          <!-- Author Avatar -->
          <div
            class="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden flex items-center justify-center font-black text-white text-xl shadow-md shrink-0 border border-slate-200/80 bg-linear-to-br"
            :class="post.gradient"
          >
            <span>{{ post.authorInitial }}</span>
            <img
              v-if="post.authorImage"
              :src="post.authorImage"
              :alt="t(`blogsData.articles.${post.id}.author`)"
              class="absolute inset-0 w-full h-full object-cover object-center"
              loading="lazy"
              @error="(e) => (e.target.style.display = 'none')"
            />
          </div>

          <!-- Author Bio Details -->
          <div class="flex-1">
            <div class="flex items-center gap-2 mb-1">
              <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">
                {{ t('blogs.article.aboutAuthor') }}
              </span>
              <span class="text-slate-300">&bull;</span>
              <span class="text-xs font-bold text-medical-sky-deep">
                {{ t('blogs.article.tagRole') }}
              </span>
            </div>
            <h4 class="text-lg font-black text-slate-dark-900 mb-1">
              {{ t(`blogsData.articles.${post.id}.author`) }}
            </h4>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              {{ appStore.currentLocale === 'km' ? post.authorBioKm : post.authorBioEn }}
            </p>
            <RouterLink
              to="/about"
              class="inline-flex items-center gap-1.5 text-xs font-bold text-medical-sky-deep hover:underline"
            >
              <span>{{ t('blogs.article.viewTeam') }}</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

        <!-- ================= RELATED ARTICLES GRID ================= -->
        <div class="mb-8">
          <h3
            class="text-xl sm:text-2xl font-black text-slate-dark-900 mb-6 flex items-center gap-3"
          >
            <span>{{ t('blogs.article.relatedTitle') }}</span>
            <span class="flex-1 h-px bg-slate-200/80"></span>
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <RouterLink
              v-for="item in relatedArticles"
              :key="item.id"
              :to="{ name: 'blog-post', params: { id: item.id } }"
              class="group bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div
                  class="flex items-center justify-between mb-3 text-[11px] font-bold text-slate-500 uppercase tracking-wider"
                >
                  <span class="text-medical-sky-deep bg-medical-sky-deep/10 px-2 py-0.5 rounded">
                    {{ appStore.currentLocale === 'km' ? item.badgeKm : item.badgeEn }}
                  </span>
                  <span>{{ t(`blogsData.articles.${item.id}.readTime`) }}</span>
                </div>
                <h4
                  class="text-base font-black text-slate-dark-900 group-hover:text-medical-sky-deep transition-colors mb-2 leading-snug"
                >
                  {{ t(`blogsData.articles.${item.id}.title`) }}
                </h4>
                <p class="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                  {{
                    t(`blogsData.articles.${item.id}.excerpt`) ||
                    'Explore mathematical derivations and architecture insights.'
                  }}
                </p>
              </div>

              <div
                class="flex items-center justify-between pt-3 border-t border-slate-100 text-xs font-bold"
              >
                <span class="text-slate-500">{{ item.authorKey }}</span>
                <span
                  class="text-medical-sky-deep flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  {{ t('blogs.article.readArticle') }} &rarr;
                </span>
              </div>
            </RouterLink>
          </div>
        </div>
      </template>

      <!-- 404 / Article Not Found State -->
      <template v-else>
        <div
          class="text-center py-20 bg-white rounded-3xl shadow-xl border border-slate-200/80 px-6 my-10"
        >
          <div
            class="w-16 h-16 rounded-2xl bg-rose-50 text-rose-500 mx-auto flex items-center justify-center text-2xl font-black mb-4"
          >
            404
          </div>
          <h2 class="text-2xl sm:text-3xl font-black text-slate-dark-900 mb-3">
            Article Not Found
          </h2>
          <p class="text-sm text-slate-600 mb-8 max-w-md mx-auto">
            The article you are looking for does not exist or has been relocated.
          </p>
          <button
            @click="goBack"
            class="px-6 py-3 rounded-full shadow-lg text-xs font-bold text-white bg-medical-sky-deep hover:opacity-95 transition-all cursor-pointer"
          >
            {{ t('blogs.article.backToBlogs') }}
          </button>
        </div>
      </template>
    </main>
  </div>
</template>

<style scoped>
/* Toast Animation */
.toast-fade-enter-active,
.toast-fade-leave-active {
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.toast-fade-enter-from,
.toast-fade-leave-to {
  opacity: 0;
  transform: translateY(0.75rem) scale(0.95);
}
</style>
