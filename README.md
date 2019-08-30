# vxe-table Demo

require: Vue 2.6+  
require: xe-utils 2.2+

## 全局导入方式（完整 ≈ 240KB）

```javascript
import Vue from 'vue'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'

Vue.use(VXETable)
```

## 全局导入方式（完整，体积稍小 ≈ 220KB）

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

## 按需导入方式（按需，体积最优 >≈ 120KB）

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

## 源码导入方式（按需，体积最小 >≈ 100KB）

```scss
@import './variable.scss';
@import './icon.scss';
@import './table.scss';
@import './column.scss';
@import './header.scss';
@import './body.scss';
@import './footer.scss';
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
