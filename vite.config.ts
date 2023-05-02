import { fileURLToPath, URL } from 'node:url'

import vitePluginRequire from 'vite-plugin-require';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig( {
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/assets/scss/main";'
      }
    }
  },
  plugins: [ vue(), vueJsx(), vitePluginRequire() ],
  resolve: {
    alias: {
      '@': fileURLToPath( new URL ( './src', import.meta.url ) )
    }
  },
} )
