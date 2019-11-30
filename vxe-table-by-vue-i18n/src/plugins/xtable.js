import Vue from 'vue'
import VXETable from 'vxe-table'
import i18n from '../i18n'
import 'vxe-table/lib/index.css'

Vue.use(VXETable)

VXETable.setup({
  // 集成 vue-i18n
  i18n: (key, value) => i18n.t(key),
  // 对参数的内容自动进行国际化翻译
  translate: key => i18n.t(key)
})
