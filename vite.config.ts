import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 路径别名配置
    alias: {
      '@/src': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})