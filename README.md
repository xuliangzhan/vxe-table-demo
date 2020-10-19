# vxe-table 使用示例

## 安装指南

* 注：
  * 2.9+ 依赖需要 xe-utils 2.7+
  * 2.9.22+ 样式路径由 'vxe-table/lib/index.css' 改为 'vxe-table/lib/style.css'
  * 2.9.24+ 分组列头由 vxe-table-column 改为 vxe-table-colgroup

依赖: vue 2.6.x, xe-utils 2.7+

### 1. 全局导入方式

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

### 2. 按需导入方式

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
import zhCN from 'vxe-table/lib/locale/lang/zh-CN'

// 导入默认的国际化（如果项目中使用多语言，则应该导入到 vue-i18n 中）
VXETable.setup({
  // 如果使用 vue-i18n
  i18n: (key, args) => i18n.t(key, args),
  // 如果不使用 vue-i18n，则需要自行转义字符串语法: '{xx}'，例如：
  // i18n: (key, args) => XEUtils.template(i18n.t(key, args), args, { tmplRE: /\{([.\w[\]\s]+)\}/g })
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
