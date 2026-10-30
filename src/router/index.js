import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Home | ITE Boys',
    },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
    meta: {
      title: 'About | ITE Boys',
    },
  },
  // {
  //   path: '/blogs',
  //   name: 'blogs',
  //   component: () => import('@/views/BlogsView.vue'),
  //   meta: {
  //     title: 'Blogs | ITE Boys',
  //   },
  // },
  // {
  //   path: '/blogs/:id',
  //   name: 'blog-post',
  //   component: () => import('@/views/BlogPostView.vue'),
  //   meta: {
  //     title: 'Blog Details | ITE Boys',
  //   },
  // },
  {
    path: '/calculate',
    name: 'calculate',
    component: () => import('@/views/CalculateView.vue'),
    meta: {
      title: 'Calculate | ITE Boys',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue'),
    meta: {
      title: 'Page Not Found (404) | ITE Boys',
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0, left: 0, behavior: 'smooth' }
  },
})

// Route Titles Map (English only)
const ROUTE_TITLES = {
  home: 'Home | ITE Boys',
  about: 'About | ITE Boys',
  blogs: 'Blogs | ITE Boys',
  'blog-post': 'Blog Details | ITE Boys',
  calculate: 'Calculate | ITE Boys',
  'not-found': 'Page Not Found (404) | ITE Boys',
  NotFound: 'Page Not Found (404) | ITE Boys',
}

// Navigation Guard: Update document title on route change
router.afterEach((to) => {
  const routeName = String(to.name || '')
  const title = to.meta?.title || ROUTE_TITLES[routeName] || 'ITE Boys - Math Project'
  document.title = title
})

export default router
