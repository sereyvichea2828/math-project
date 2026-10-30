<script setup>
import { useToast } from '@/composables/useToast'

const { isVisible, toastMessage } = useToast()
</script>

<template>
  <teleport to="body">
    <transition
      enter-active-class="transform ease-out duration-300 transition"
      enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isVisible"
        class="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 flex items-center gap-3 bg-medical-sky-deep text-white px-5 py-3.5 rounded-2xl shadow-xl shadow-medical-sky-deep/30 border border-white/20 backdrop-blur-md select-none max-w-sm pointer-events-auto"
        role="alert"
        aria-live="assertive"
      >
        <div class="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
          <svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>
        <span class="text-xs font-bold leading-tight">{{ toastMessage }}</span>
      </div>
    </transition>
  </teleport>
</template>
