import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import VxeTableResolver from '@vxecli/import-unplugin-vue-components'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    vueJsx(),
    Components({
      resolvers: [
        VxeTableResolver()
      ]
    })
  ],
})
