# vxe-table 使用示例

## 安装指南

v3 vue 2.6+ 依赖: ```npm install vxe-table@legacy```  
v4 vue vue3.2+ 依赖: ```npm install vxe-table@next```  

### v2 ~ v3 全局导入

src/plugins/vxe-table

```javascript
import Vue from 'vue'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

Vue.use(VXETable)
```

src/main

```javascript
import Vue from 'vue'
import App from './App.vue'

import './plugins/vxe-table'

new Vue({
  render: h => h(App)
}).$mount('#app')
```

### v2 ~ v3 babel 按需导入

安装 babel 插件，配置插件

```shell
npm install babel-plugin-import -D
```

修改 .babelrc 或 babel.config.js 配置文件

```javascript
module.exports = {
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

src/plugins/vxe-table

```javascript
import Vue from 'vue'
import XEUtils from 'xe-utils'
import {
  VXETable,
  Icon,
  Column,
  Table
} from 'vxe-table'
import zhCNLocat from 'vxe-table/lib/locale/lang/zh-CN'

// 导入默认的国际化（如果项目中使用多语言，则应该导入到 vue-i18n 中）
VXETable.setup({
  i18n: (key, args) => XEUtils.toFormatString(XEUtils.get(zhCNLocat, key), args)
})

Vue.use(Icon)
Vue.use(Column)
Vue.use(Table)
```

src/main

```javascript
import Vue from 'vue'
import App from './App.vue'

import './plugins/vxe-table'

new Vue({
  render: h => h(App)
}).$mount('#app')
```

### v4 全局导入

src/plugins/vxe-table

```javascript
import { App } from 'vue'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

// 全局默认参数
VXETable.setup({
  version: 0,
  zIndex: 100,
  table: {
    autoResize: true
  }
})

export function useTable (app: App) {
  app.use(VXETable)
}

```

src/main

```javascript
import { createApp } from 'vue'
import App from './App.vue'

import { useTable } from './plugins/vxe-table'

createApp(App).use(useTable).mount('#app')
```

### v4 babel 按需导入

安装 babel 插件，配置插件

```shell
npm install babel-plugin-import -D
```

修改 .babelrc 或 babel.config.js 配置文件

```javascript
module.exports = {
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

src/plugins/vxe-table

```javascript
import { App } from 'vue'
import XEUtils from 'xe-utils'
import {
  VXETable,
  Icon,
  Column,
  Table
} from 'vxe-table'
import zhCNLocat from 'vxe-table/lib/locale/lang/zh-CN'

// 全局默认参数
VXETable.setup({
  version: 0,
  zIndex: 100,
  table: {
    autoResize: true
  }
})

// 导入默认的国际化（如果项目中使用多语言，则应该导入到 vue-i18n 中）
VXETable.setup({
  i18n: (key, args) => XEUtils.toFormatString(XEUtils.get(zhCNLocat, key), args)
})

export function useTable (app: App) {
  app.use(Icon)
    .use(Column)
    .use(Table)
}

```

src/main

```javascript
import { createApp } from 'vue'
import App from './App.vue'

import { useTable } from './plugins/vxe-table'

createApp(App).use(useTable).mount('#app')
```

### v4 vite 按需导入

安装 vite 插件，配置插件

```shell
npm vite-plugin-style-import consola -D
```

修改 vite.config.ts 配置文件

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'

export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'vxe-table',
          esModule: true,
          resolveComponent: (name) => `vxe-table/es/${name}`,
          resolveStyle: (name) => `vxe-table/es/${name}/style.css`
        }
      ]
    })
  ]
})
```

src/plugins/vxe-table

```javascript
import { App } from 'vue'
import XEUtils from 'xe-utils'
import {
  VXETable,
  Icon,
  Column,
  Table
} from 'vxe-table'
import zhCNLocat from 'vxe-table/es/locale/lang/zh-CN'

// 全局默认参数
VXETable.setup({
  version: 0,
  zIndex: 100,
  table: {
    autoResize: true
  }
})

// 导入默认的国际化（如果项目中使用多语言，则应该导入到 vue-i18n 中）
VXETable.setup({
  i18n: (key, args) => XEUtils.toFormatString(XEUtils.get(zhCNLocat, key), args)
})

export function useTable (app: App) {
  app.use(Icon)
    .use(Column)
    .use(Table)
}

```

src/main

```javascript
import { createApp } from 'vue'
import App from './App.vue'

import { useTable } from './plugins/vxe-table'

createApp(App).use(useTable).mount('#app')
```
