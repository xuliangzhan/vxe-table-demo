import Vue from 'vue'
import store from '../store'
import XEAjax from 'xe-ajax'
import XEUtils from 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'

Vue.use(VXETable)

function sendAjax (config, callback, defaultCallback) {
  if (config && !XEUtils.isArray(config)) {
    const ajaxOpts = Object.assign({ method: 'GET' }, XEUtils.isString(config) ? { url: config } : config)
    XEAjax(ajaxOpts).then(response => response.json()).then(callback)
    if (defaultCallback) {
      defaultCallback()
    } else {
      callback()
    }
  }
}

// 设置默认参数
VXETable.setup({
  grid: {
    /**
     * Grid 封装统一的数据代理
     * 任何支持 Promise 的异步请求库都能对接，不同的库可能用法会不一样，基本大同小异（fetch、jquery、axios、xe-ajax）
     * 支持增删改查自动发送请求
     * 支持 filters 自动请求数据
     * 支持 edit-render 下拉框自动请求数据
     */
    proxyConfig: {
      // 列初始化之前
      beforeColumn ({ $grid, column }) {
        const { filters, editRender } = column
        // 处理筛选请求
        sendAjax(filters, data => {
          $grid.setFilter(column, data)
        }, () => {
          column.filters = []
        })
        // 处理渲染器请求
        if (editRender) {
          let config = editRender.options
          switch (editRender.name) {
            case 'select':
              // 如果是字典（从 vuex 里面读取配置）
              if (/^\$+/.test(config)) {
                const key = config.slice(1)
                if (!store.getters.dictionaryMap[key]) {
                  console.error('读取字典配置失败！key=' + key)
                }
                editRender.options = store.getters.dictionaryMap[key] || []
              } else {
                // 如果是异步请求
                sendAjax(config, data => {
                  editRender.options = data || []
                })
              }
              break
          }
        }
      },
      // 查询
      beforeQuery (params) {
        const { options, page, sort, filters } = params
        if (XEUtils.isFunction(options)) {
          return options(params)
        }
        // 处理排序条件
        const queryParams = {
          sort: sort.property,
          order: sort.order
        }
        // 处理筛选条件
        filters.forEach(({ property, values }) => {
          queryParams[property] = values.join(',')
        })
        const ajaxOpts = Object.assign({ method: 'GET', params: queryParams }, XEUtils.isString(options) ? { url: options } : options)
        if (page) {
          ajaxOpts.url = XEUtils.template(ajaxOpts.url, { page })
        }
        return XEAjax(ajaxOpts).then(response => response.json())
      },
      // 删除
      beforeDelete (params) {
        const { options, body } = params
        if (XEUtils.isFunction(options)) {
          return options(params)
        }
        const ajaxOpts = Object.assign({ method: 'POST', body }, XEUtils.isString(options) ? { url: options } : options)
        return XEAjax(ajaxOpts).then(response => response.json())
      },
      // 保存
      beforeSave (params) {
        const { options, body } = params
        if (XEUtils.isFunction(options)) {
          return options(params)
        }
        const ajaxOpts = Object.assign({ method: 'POST', body }, XEUtils.isString(options) ? { url: options } : options)
        return XEAjax(ajaxOpts).then(response => response.json())
      }
    }
  }
})
