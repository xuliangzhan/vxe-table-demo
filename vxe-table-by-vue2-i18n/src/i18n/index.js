import Vue from 'vue'
import VueI18n from 'vue-i18n'

// 表格组件的语言包
import tableENUS from 'vxe-table/lib/locale/lang/en-US'
import tableZHCN from 'vxe-table/lib/locale/lang/zh-CN'
import tableZHTC from 'vxe-table/lib/locale/lang/zh-TC'

// 项目的语言包
import myENUS from './lang/en-US'
import myZHCN from './lang/zh-CN'
import myZHTC from './lang/zh-TC'

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
    zh_TC: {
      ...tableZHTC,
      ...myZHTC
    }
  }
})

export default i18n
