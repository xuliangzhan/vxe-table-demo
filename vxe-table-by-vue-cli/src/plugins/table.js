import Vue from 'vue'
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'

Vue.use(VXETable)

// 创建一个超链接渲染器
VXETable.renderer.add('MyLink', {
  // 默认显示模板
  renderDefault (h, renderOpts, params) {
    const { row, column } = params
    return [
      <a class="my-link" href="https://github.com/xuliangzhan/vxe-table">{row[column.property]}</a>
    ]
  }
})
