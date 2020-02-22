# vxe-table 使用示例

## 常见报错

### 1. 引用顺序错误导致依赖报错

该问题 vxe-table@2.5 以下版本不受影响，由于 vxe-table@2.5+ 以上版本支持最小化打包的方式  
所以依赖库 xe-utils 必须要在 vxe-table 之前引用，否则就会报以下错误

![install error](https://github.com/xuliangzhan/vxe-table/blob/master/public/static/error/install.png?raw=true)

## 安装指南

如果是 IE 浏览器可以使用 [babel-polyfill](https://www.npmjs.com/package/babel-polyfill) 来解决兼容性问题

require: vue 2.6+  
require: xe-utils 2.2+

### 1. 全局导入方式，所有版本通用（完整 ≈ 240KB）

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

### 2. 全局导入方式（完整，体积稍小 ≈ 220KB）

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

### 3. 按需导入方式（按需，体积最优 >≈ 140KB）

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

### 4. 按需导入方式（按需，体积最优 >≈ 120KB）

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

src/plugins/table.js

```javascript
import XEUtils from 'xe-utils/methods/xe-utils'
import VXETable from 'vxe-table/packages/v-x-e-table'
import Header from 'vxe-table/packages/header'
import Column from 'vxe-table/packages/column'
import Table from 'vxe-table/packages/table'
import zhCN from 'vxe-table/lib/locale/lang/zh-CN'

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
