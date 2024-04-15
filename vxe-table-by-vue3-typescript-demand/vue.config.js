const { defineConfig } = require('@vue/cli-service')
const Components = require('unplugin-vue-components/webpack')
const VxeTableResolver = require('@vxecli/import-unplugin-vue-components')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      Components({
        resolvers: [
          VxeTableResolver()
        ]
      })
    ]
  }
})
