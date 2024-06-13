module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['import', { libraryName: 'vxe-table', style: true }, 'vxe-table'],
    ['import', { libraryName: 'vxe-pc-ui', style: true }, 'vxe-pc-ui']
  ]
}
