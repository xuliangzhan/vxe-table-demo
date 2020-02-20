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
    "vue/html-self-closing": "off",
    "vue/html-closing-bracket-spacing": "off",
    "vue/html-closing-bracket-newline": "off"
  }
}
