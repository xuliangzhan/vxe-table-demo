import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Components({
      resolvers: [
        {
          type: 'component',
          resolve (name) {
            const vxeRest = name.match(/^Vxe(Module)?(\w+)$/)
            if (vxeRest) {
              const dirName = vxeRest[2].toLowerCase()
              const path = 'vxe-table/es'
              return {
                name: vxeRest[2],
                from: `${path}/${dirName}/index.js`,
                // sideEffects: `${path}/${dirName}/style.css`,
              }
            }
          }
        }
      ]
    })
  ]
})
