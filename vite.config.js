import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  publicDir: 'static',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: fileURLToPath(new URL('./src/index.js', import.meta.url)),
      name: 'VueParallaxy',
      fileName: (format) => format === 'es' ? 'vue-parallaxy.js' : 'vue-parallaxy.umd.cjs',
      cssFileName: 'vue-parallaxy',
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
        exports: 'default'
      }
    }
  },
  test: {
    environment: 'jsdom',
    restoreMocks: true
  }
})
