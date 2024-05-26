import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import { VxeResolver } from '@vxecli/import-unplugin-vue-components'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Components({
      resolvers: [
        VxeResolver({
          libraryName: 'vxe-table'
          // importStyle: true
        }),
        VxeResolver({
          libraryName: 'vxe-pc-ui'
          // importStyle: true
        })
      ]
    })
  ]
})
