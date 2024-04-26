import VXETable from 'vxe-table'

// 设置国际化
VXETable.config({
  // 集成 vue-i18n
  i18n: (key, args) => i18n.t(key, args),
  // 对参数的内容自动进行国际化翻译
  translate (key, args) {
    // 只翻译 "app." 开头的键值
    if (key && key.indexOf('app.') > -1) {
      return i18n.t(key, args)
    }
    return key
  }
})