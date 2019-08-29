# vxe-table 安装方式

## 1.全局导入方式（完整）

```javascript
import Vue from 'vue'
import VXETable from 'vxe-table'
import 'xe-utils'

Vue.use(VXETable)
```

## 2.全局导入方式（完整，体积稍小）

```javascript
import Vue from 'vue'
import XEUtils from 'xe-utils/methods/xe-utils'
import VXETable from 'vxe-table'
import dependencies from 'vxe-table/lib/utils/dependencies'

// 按需导入依赖函数库
XEUtils.mixin(dependencies)

Vue.use(VXETable)
```

## 3.按需导入方式（按需，体积最小）

```javascript
import Vue from 'vue'
import XEUtils from 'xe-utils/methods/xe-utils'
import {
  VXETable,
  Icon,
  Table,
  Header,
  Body,
  Column
} from 'vxe-table'
import zhCNLocat from 'vxe-table/lib/locale/lang/zh-CN'
import dependencies from 'vxe-table/lib/utils/dependencies'

// 按需导入依赖函数库
XEUtils.mixin(dependencies)

// 按需导入需要的模块
Vue.use(Icon)
Vue.use(Table)
Vue.use(Header)
Vue.use(Body)
Vue.use(Column)

// 导入默认的国际化（如果项目中使用多语言，则应该导入到 vue-i18n 中）
VXETable.setup({
  i18n: (key, value) => VXETable.t(zhCNLocat, key)
})
```
