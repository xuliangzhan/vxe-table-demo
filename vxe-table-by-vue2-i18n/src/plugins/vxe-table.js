import Vue from 'vue'
import VXETable from 'vxe-table'
import i18n from '../i18n'
import 'vxe-table/lib/style.css'

Vue.use(VXETable)

// 全局默认参数
VXETable.setup({
  version: 0,
  zIndex: 100,
  table: {
    autoResize: true
  }
})

// 设置国际化
VXETable.setup({
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

// 将模态窗口挂载到 vue 实例中
// Vue.prototype.$XModal = VXETable.modal
