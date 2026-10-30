<script setup>
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import navHeader from '@/components/navHeader.vue'
import navFooter from '@/components/navFooter.vue'
import AppToast from '@/components/AppToast.vue'

const route = useRoute()
const isNotFoundPage = computed(() => route.name === 'not-found')
</script>

<template>
  <div class="min-h-screen flex flex-col bg-072 text-slate-dark-900 font-sans">
    <navHeader v-if="!isNotFoundPage" />
    <main class="flex-1" :class="{ 'flex flex-col': isNotFoundPage }">
      <RouterView v-slot="{ Component }">
        <transition name="page-fade" mode="out-in">
          <component :is="Component" :key="route.fullPath" />
        </transition>
      </RouterView>
    </main>
    <navFooter v-if="!isNotFoundPage" />
    <AppToast />
  </div>
</template>

<style>
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.15s ease;
}

.page-fade-enter-from,
.page-fade-leave-to {
  opacity: 0;
}
</style>
