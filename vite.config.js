import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // 将所有带 el- 前缀的标签视为自定义元素
          isCustomElement: (tag) => tag.startsWith('el-')
        }
      }
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'examples'),
      '~': resolve(__dirname, 'packages')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/common.scss";`
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: 8080,
    open: true
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'public/index.html'),
      },
      output: {
        manualChunks: {
          vue: ['vue'],
          'element-plus': ['element-plus']
        }
      }
    }
  }
})