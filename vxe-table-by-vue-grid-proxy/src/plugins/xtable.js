import Vue from 'vue'
import XEAjax from 'xe-ajax'
import XEUtils from 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'

Vue.use(VXETable)

// 设置默认参数
VXETable.setup({
  grid: {
    // 封装统一的代理配置，任何支持 Promise 的异步请求库都能对接，不同的库可能对应参数会不一样（fetch、jquery、axios、xe-ajax）
    proxyConfig: {
      // 查询
      beforeQuery ({ options, page, sort, filters }) {
        // 处理排序条件
        let formData = {
          sort: sort.property,
          order: sort.order
        }
        // 处理筛选条件
        filters.forEach(({ property, values }) => {
          formData[property] = values.join(',')
        })
        let ajaxOpts = Object.assign({ method: 'GET', params: formData }, XEUtils.isString(options) ? { url: options } : options)
        if (page) {
          ajaxOpts.url = XEUtils.template(ajaxOpts.url, { page })
        }
        return XEAjax(ajaxOpts).then(response => response.json())
      },
      // 删除
      beforeDelete ({ options, body }) {
        let ajaxOpts = Object.assign({ method: 'POST', body }, XEUtils.isString(options) ? { url: options } : options)
        return XEAjax(ajaxOpts).then(response => response.json())
      },
      // 保存
      beforeSave ({ options, body }) {
        let ajaxOpts = Object.assign({ method: 'POST', body }, XEUtils.isString(options) ? { url: options } : options)
        return XEAjax(ajaxOpts).then(response => response.json())
      }
    }
  }
})
