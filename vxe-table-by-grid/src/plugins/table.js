import Vue from 'vue'
import store from '../store'
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'

Vue.use(VXETable)

// 将模态窗口挂载到 vue 实例中
// Vue.prototype.$XModal = VXETable.modal

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
  renderItem (h, renderOpts, params) {
    return [
      <vxe-button type="submit" status="primary">查询</vxe-button>,
      <vxe-button type="reset">重置</vxe-button>
    ]
  }
})
