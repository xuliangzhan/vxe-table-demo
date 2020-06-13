import Vue from 'vue'
import store from '../store'
import XEAjax from 'xe-ajax'
import XEUtils from 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'

Vue.use(VXETable)

// 将模态窗口挂载到 vue 实例中
// Vue.prototype.$XModal = VXETable.modal

function handleListData (config, callback, defaultCallback) {
  if (config && !XEUtils.isArray(config)) {
    defaultCallback()
    // 如果是字典
    if (config.dict) {
      const key = config.dict
      store.dispatch('loadDataDictionary')
        .catch(e => e)
        .then(() => {
          if (!store.getters.ddMap[key]) {
            console.error('读取字典配置失败！code=' + key)
          }
          callback(store.getters.ddMap[key])
        })
    } else {
      // 如果是异步请求
      const ajaxOpts = Object.assign({ method: 'GET' }, XEUtils.isString(config) ? { url: config } : config)
      XEAjax(ajaxOpts)
        .then(response => response.json())
        .catch(e => e)
        .then(callback)
    }
  }
}

// 设置默认参数
VXETable.setup({
  grid: {
    /**
     * Grid 封装统一的数据代理
     */
    proxyConfig: {
      // 表单项初始化之前
      beforeItem ({ item }) {
        const { itemRender } = item
        // 处理渲染器请求
        if (itemRender) {
          const config = itemRender.options
          switch (itemRender.name) {
            case 'select':
              handleListData(config, data => {
                itemRender.options = data || []
              }, () => {
                itemRender.options = []
              })
              break
          }
        }
      },
      // 列初始化之前
      beforeColumn ({ $grid, column }) {
        const { filters, editRender } = column
        // 处理筛选请求
        handleListData(filters, data => {
          $grid.setFilter(column, data || [])
        }, () => {
          column.filters = []
        })
        // 处理渲染器请求
        if (editRender) {
          const config = editRender.options
          switch (editRender.name) {
            case 'select':
              handleListData(config, data => {
                editRender.options = data || []
              }, () => {
                editRender.options = []
              })
              break
          }
        }
      },
      // 统一处理查询规则
      beforeQuery (params) {
        const { options, page, sort, filters, form } = params
        if (XEUtils.isFunction(options)) {
          return options(params)
        }
        const queryParams = Object.assign({
          sort: sort.property,
          order: sort.order
        }, form)
        filters.forEach(({ property, values }) => {
          queryParams[property] = values.join(',')
        })
        const ajaxOpts = Object.assign({ method: 'GET', params: queryParams }, XEUtils.isString(options) ? { url: options } : options)
        if (page) {
          ajaxOpts.url = XEUtils.template(ajaxOpts.url, { page })
        }
        return XEAjax(ajaxOpts).then(response => response.json())
      },
      // 统一处理删除规则
      beforeDelete (params) {
        const { options, body } = params
        if (XEUtils.isFunction(options)) {
          return options(params)
        }
        const ajaxOpts = Object.assign({ method: 'POST', body }, XEUtils.isString(options) ? { url: options } : options)
        return XEAjax(ajaxOpts).then(response => response.json())
      },
      // 统一处理保存规则
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

// 创建一个字典翻译渲染器
VXETable.renderer.add('DICT', {
  renderDefault (h, renderOpts, params) {
    const { props } = renderOpts
    const { row, column } = params
    const cellValue = row[column.property]
    const rest = store.getters.ddMap[props.code]
    const item = rest && rest.find(item => item.value === cellValue)
    return [
      h('span', {
        style: {
          color: cellValue === '1' ? 'green' : 'red'
        }
      }, item ? item.label : '')
    ]
  }
})

// 创建一个表单-按钮组渲染器
VXETable.renderer.add('FormItemButtonGroup', {
  // 项显示模板
  renderItem (h, renderOpts, params, context) {
    return [
      <vxe-button type="submit" status="primary">查询</vxe-button>,
      <vxe-button type="reset">重置</vxe-button>
    ]
  }
})
