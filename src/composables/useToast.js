import { ref } from 'vue'

const isVisible = ref(false)
const toastMessage = ref('')
let toastTimer = null

export function useToast() {
  const showToast = (message, duration = 3000) => {
    toastMessage.value = message
    isVisible.value = true
    if (toastTimer) clearTimeout(toastTimer)
    toastTimer = setTimeout(() => {
      isVisible.value = false
    }, duration)
  }

  const hideToast = () => {
    isVisible.value = false
    if (toastTimer) clearTimeout(toastTimer)
  }

  return {
    isVisible,
    toastMessage,
    showToast,
    hideToast,
  }
}
