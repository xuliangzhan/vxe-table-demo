const { defineConfig } = require('@vue/cli-service')
const Components = require('unplugin-vue-components/webpack')
const { VxeResolver } = require('@vxecli/import-unplugin-vue-components')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
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
  }
})
