import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { createStyleImportPlugin, VxeTableResolve } from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    createStyleImportPlugin({
      // resolves: [
      //   VxeTableResolve()
      // ],
      libs: [
        {
          libraryName: 'vxe-table',
          esModule: true,
          // resolveComponent: (name) => `vxe-table/es/${name}`,
          resolveStyle: (name) => `vxe-table/es/${name}/style.css`
        }
      ]
    })
  ]
})
