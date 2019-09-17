module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'vue/html-self-closing': ['error',{
      'html': {
        'void': 'never',
        'normal': 'any',
        'component': 'any'
      },
      'svg': 'always',
      'math': 'always'
    }]
  }
}
