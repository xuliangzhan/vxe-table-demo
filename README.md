# vxe-table 使用示例

## 安装指南

v1 vue 2.6 依赖: ```npm install vxe-table@1 xe-utils@2```  
v2 vue 2.6 依赖: ```npm install vxe-table@2 xe-utils@3```  
v3 vue 2.6 依赖: ```npm install vxe-table@3 xe-utils@3```  
v4 vue next 依赖: ```npm install vxe-table@next xe-utils@3```  

## v2 ~ v3 版本

### 1. 全局导入

```javascript
import Vue from 'vue'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

Vue.use(VXETable)
```

### 2. 按需导入

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
import 'xe-utils'
import './plugins/table'
```

安装插件，支持按需加载

```shell
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

### 1. 安装

main.js

```javascript
import { createApp } from 'vue'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

createApp(App).use(VXETable).mount('#app')
```
