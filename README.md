# vxe-table 使用示例

## 安装指南

require: vue 2.6+, xe-utils 2.4+

### 1. 全局导入方式，所有版本通用（完整）

src/plugins/utils.js

```javascript
import 'xe-utils'
```

src/plugins/table.js

```javascript
import Vue from 'vue'
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'

Vue.use(VXETable)
```

main.js

```javascript
import './plugins/utils'
import './plugins/table'
```

### 2. 全局导入方式（完整，体积稍小）

src/plugins/utils.js

```javascript
import XEUtils from 'xe-utils/methods/xe-utils'
import dependencies from 'vxe-table/lib/utils/dependencies'

// 按需导入依赖函数库
XEUtils.mixin(dependencies)
```

src/plugins/table.js

```javascript
import Vue from 'vue'
import XEUtils from 'xe-utils/methods/xe-utils'
import VXETable from 'vxe-table'
import dependencies from 'vxe-table/lib/utils/dependencies'
import 'vxe-table/lib/index.css'

Vue.use(VXETable)
```

main.js

```javascript
import './plugins/utils'
import './plugins/table'
```

### 3. 按需导入方式（按需，体积最优）

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
  i18n: key => XEUtils.get(zhCN, key)
})

// 按需导入依赖的模块
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

### 4. 按需导入方式（按需，体积最优）

src/plugins/utils.js

```javascript
import XEUtils from 'xe-utils/methods/xe-utils'
import dependencies from 'vxe-table/lib/utils/dependencies'

// 按需导入依赖函数库
XEUtils.mixin(dependencies)
```

src/plugins/table.js

```javascript
import Vue from 'vue'
import XEUtils from 'xe-utils/methods/xe-utils'
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
  i18n: key => XEUtils.get(zhCN, key)
})

// 按需导入依赖的模块
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

### 4. 未编译的源码导入方式（按需，体积最小）

在 scss 样式文件中引用

```scss
@import 'vxe-table/styles/variable.scss';
@import 'vxe-table/styles/icon.scss';
@import 'vxe-table/styles/table.scss';
@import 'vxe-table/styles/column.scss';
@import 'vxe-table/styles/header.scss';
@import 'vxe-table/styles/body.scss';
```

src/plugins/utils.js

```javascript
import XEUtils from 'xe-utils/methods/xe-utils'
import dependencies from 'vxe-table/packages/utils/dependencies'

// 按需导入依赖函数库
XEUtils.mixin(dependencies)
```

src/plugins/table.js

```javascript
import XEUtils from 'xe-utils/methods/xe-utils'
import VXETable from 'vxe-table/packages/v-x-e-table'
import Header from 'vxe-table/packages/header'
import Column from 'vxe-table/packages/column'
import Table from 'vxe-table/packages/table'
import zhCN from 'vxe-table/packages/locale/lang/zh-CN'

// 导入默认的国际化（如果项目中使用多语言，则应该导入到 vue-i18n 中）
VXETable.setup({
  i18n: key => XEUtils.get(zhCN, key)
})

// 按需导入依赖的模块
Vue.use(Column)
Vue.use(Header)
// 最后安装核心库
Vue.use(Table)
```

main.js

```javascript
import './plugins/utils'
import './plugins/table'
```
