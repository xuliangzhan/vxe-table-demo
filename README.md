# vxe-table 使用示例

## 安装报错信息

### 1. 引用的依赖库 xe-utils 必须在 vxe-table 之前，否则必然报错

![install error](https://github.com/xuliangzhan/vxe-table/blob/master/public/error/install.png?raw=true)

## 安装指南

require: Vue 2.6+  
require: xe-utils 2.2+

### 1. 全局导入方式，所有版本通用（完整 ≈ 240KB）

src/plugins/utils.js

```javascript
import 'xe-utils'
```

src/plugins/xtable.js

```javascript
import Vue from 'vue'
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'

Vue.use(VXETable)
```

main.js

```javascript
import './plugins/utils'
import './plugins/xtable'
```

### 2. 全局导入方式（完整，体积稍小 ≈ 220KB）

src/plugins/utils.js

```javascript
import XEUtils from 'xe-utils/methods/xe-utils'
import dependencies from 'vxe-table/lib/utils/dependencies'

// 按需导入依赖函数库
XEUtils.mixin(dependencies)
```

src/plugins/xtable.js

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
import './plugins/xtable'
```

### 3. 按需导入方式（按需，体积最优 >≈ 140KB）

src/plugins/utils.js

```javascript
import 'xe-utils'
```

src/plugins/xtable.js

```javascript
import Vue from 'vue'
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

main.js

```javascript
import './plugins/utils'
import './plugins/xtable'
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

### 4. 按需导入方式（按需，体积最优 >≈ 120KB）

src/plugins/utils.js

```javascript
import XEUtils from 'xe-utils/methods/xe-utils'
import dependencies from 'vxe-table/lib/utils/dependencies'

// 按需导入依赖函数库
XEUtils.mixin(dependencies)
```

src/plugins/xtable.js

```javascript
import Vue from 'vue'
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

main.js

```javascript
import './plugins/utils'
import './plugins/xtable'
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

### 4. 未编译的源码导入方式（按需，体积最小 >≈ 100KB）

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

src/plugins/xtable.js

```javascript
import VXETable from 'vxe-table/packages/v-x-e-table'
import Table from 'vxe-table/packages/table'
import Header from 'vxe-table/packages/header'
import Body from 'vxe-table/packages/body'
import Column from 'vxe-table/packages/column'
import zhCNLocat from 'vxe-table/packages/locale/lang/zh-CN'

// 按需导入需要的模块
Vue.use(Table)
Vue.use(Column)
Vue.use(Header)
Vue.use(Body)

// 导入默认的国际化（如果项目中使用多语言，则应该导入到 vue-i18n 中）
VXETable.setup({
  i18n: (key, value) => VXETable.t(zhCNLocat, key)
})
```

main.js

```javascript
import './plugins/utils'
import './plugins/xtable'
```
