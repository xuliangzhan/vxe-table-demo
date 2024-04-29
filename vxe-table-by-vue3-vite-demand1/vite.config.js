import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { createStyleImportPlugin } from 'vite-plugin-style-import'
import VxeTableResolve from '@vxecli/import-vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    vueJsx(),
    createStyleImportPlugin({
      resolves: [
        VxeTableResolve()
      ]
    })
  ],
})
