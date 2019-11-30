import Vue from 'vue'
import VueI18n from 'vue-i18n'
// 组件的语言包(改成异步获取的方式更好)
import tableEN from 'vxe-table/lib/locale/lang/en'
import tableZHCN from 'vxe-table/lib/locale/lang/zh-CN'
import tableZHTW from 'vxe-table/lib/locale/lang/zh-TW'
// 项目的语言包
import myEN from './lang/en'
import myZHCN from './lang/zh-CN'
import myZHTW from './lang/zh-TW'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh-CN',
  messages: {
    en: {
      ...tableEN,
      ...myEN
    },
    'zh-CN': {
      ...tableZHCN,
      ...myZHCN
    },
    'zh-TW': {
      ...tableZHTW,
      ...myZHTW
    }
  }
})

export default i18n
