# vxe-table 使用示例

## 安装指南

v1 依赖: vue 2.6.x, xe-utils 2.8+  
v2 依赖: vue 2.6.x, xe-utils 2.8+  
v3 依赖: vue 2.6.x, xe-utils 3.x  
v4 依赖: vue 3.x, xe-utils 3.x  

## v2 ~ v3 版本

### 1. 全局导入

src/plugins/utils.js

```javascript
import 'xe-utils'
```

src/plugins/table.js

```javascript
import Vue from 'vue'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

Vue.use(VXETable)
```

main.js

```javascript
import './plugins/utils'
import './plugins/table'
```

### 2. 按需导入

src/plugins/utils.js

```javascript
import 'xe-utils'
```

src/plugins/table.js

```javascript
import Vue from 'vue'
import XEUtils from 'xe-utils'
import {
  VXETable,
  Icon,
  Header,
  Column,
  Table
} from 'vxe-table'
import zhCNLocat from 'vxe-table/lib/locale/lang/zh-CN'

// 按需加载的方式默认是不带国际化的，需要自行导入
VXETable.setup({
  // 使用 vue-i18n 解析占位符 '{xx}'
  i18n: (key, args) => i18n.t(key, args),
  // 使用 xe-utils 解析占位符 '{xx}'
  // i18n: (key, args) => XEUtils.toFormatString(XEUtils.get(zhCNLocat, key), args)
})

// 先按需导入依赖的模块
Vue.use(Icon)
Vue.use(Header)
Vue.use(Column)
// 最后安装核心库
Vue.use(Table)
```

main.js

```javascript
import './plugins/utils'
import './plugins/table'
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

## v4 版本

### 1. 全局安装

main.js

```javascript
import { createApp } = 'vue'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

createApp(App).use(VXETable).mount('#app')
```
