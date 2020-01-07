import Vue from 'vue'
import VueI18n from 'vue-i18n'

// 表格组件的语言包
import tableENUS from 'vxe-table/lib/locale/lang/en-US'
import tableZHCN from 'vxe-table/lib/locale/lang/zh-CN'
import tableZHTW from 'vxe-table/lib/locale/lang/zh-TW'

// 项目的语言包
import myENUS from './lang/en-US'
import myZHCN from './lang/zh-CN'
import myZHTW from './lang/zh-TW'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh_CN',
  messages: {
    en_US: {
      ...tableENUS,
      ...myENUS
    },
    zh_CN: {
      ...tableZHCN,
      ...myZHCN
    },
    zh_TW: {
      ...tableZHTW,
      ...myZHTW
    }
  }
})

export default i18n
