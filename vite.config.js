import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import JavaScriptObfuscator from 'javascript-obfuscator'

// Obfuscation plugin for production hosting / build
function obfuscatorPlugin(options = {}) {
  return {
    name: 'vite-plugin-javascript-obfuscator',
    apply: 'build',
    enforce: 'post',
    generateBundle(outputOptions, bundle) {
      for (const [fileName, file] of Object.entries(bundle)) {
        if (fileName.endsWith('.js') && file.type === 'chunk') {
          const obfuscationResult = JavaScriptObfuscator.obfuscate(file.code, {
            compact: true,
            controlFlowFlattening: false,
            deadCodeInjection: false,
            debugProtection: false,
            disableConsoleOutput: false,
            identifierNamesGenerator: 'hexadecimal',
            log: false,
            numbersToExpressions: false,
            renameGlobals: false,
            selfDefending: false,
            simplify: true,
            splitStrings: false,
            stringArray: true,
            stringArrayEncoding: ['base64'],
            stringArrayThreshold: 0.5,
            transformObjectKeys: false,
            unicodeEscapeSequence: false,
            ...options,
          })
          file.code = obfuscationResult.getObfuscatedCode()
        }
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    tailwindcss(),
    vue(),
    ...(mode !== 'production' ? [vueDevTools()] : []),
    obfuscatorPlugin(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    target: 'es2022',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('vue-i18n')) {
              return 'vendor-i18n'
            }
            if (id.includes('vue') || id.includes('pinia') || id.includes('vue-router')) {
              return 'vendor-vue'
            }
          }
        },
      },
    },
  },
}))
