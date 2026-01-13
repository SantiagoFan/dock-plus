import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'lib',  // 指定输出目录为 lib
    lib: {
      entry: resolve(__dirname, '../packages/index.js'),
      name: 'dock-plus',
      fileName: (format) => `dock-plus.${format}.js`
    },
    rollupOptions: {
      external: ['vue', 'element-plus'],
      output: {
        globals: {
          vue: 'Vue',
          'element-plus': 'ElementPlus'
        }
      }
    },
    cssCodeSplit: false
  }
})