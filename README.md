# vxe-table Demo

## V2 版本

### v2-1 全局导入方式（完整 ≈ 240KB）

```javascript
import Vue from 'vue'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'

Vue.use(VXETable)
```

### v2-2 全局导入方式（完整，体积稍小 >≈ 140KB）

```javascript
import Vue from 'vue'
import XEUtils from 'xe-utils/methods/xe-utils'
import VXETable from 'vxe-table'
import dependencies from 'vxe-table/lib/utils/dependencies'
import 'vxe-table/lib/index.css'

// 按需导入依赖函数库
XEUtils.mixin(dependencies)

Vue.use(VXETable)
```

### v2-3 按需导入方式（按需，体积最小 >≈ 120KB）

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

安装插件，支持按需加载

```javascript
npm install babel-plugin-import -D
```

修改 .babelrc 或 babel.config.js 配置文件

```javascript
module.exports = {
  // ...,
  plugins: [
    [
      'import',
      {
        'libraryName': 'vxe-table',
        'style': true
      }
    ]
  ]
}
```

***

## V1 版本

### v1-1 全局导入方式（完整 ≈ 240KB）

```javascript
import Vue from 'vue'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'

Vue.use(VXETable)
```

### v1-2 按需导入方式（按需，体积较小 >≈ 130KB）

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

安装插件，支持按需加载

```javascript
npm install babel-plugin-import -D
```

修改 .babelrc 或 babel.config.js 配置文件

```javascript
module.exports = {
  // ...,
  plugins: [
    [
      'import',
      {
        'libraryName': 'vxe-table',
        'style': true
      }
    ]
  ]
}
```
