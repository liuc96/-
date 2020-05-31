# 创意网

> 标准化商城（包含前台`main`、移动端`mobile`、后台`manage`、总后台`admin`）
>
> 本页面需要在服务器环境下访问( 可使用 `npm run dev` 预览 ), 勿直接浏览静态页面



## **ToDoList**

- [x] 支持 `TypeScript`
- [x] `ESlint` 代码风格统一
- [x] `git commit` 钩子验证代码风格
- [ ] `SPA` 动态修改 页面 `title`信息方案
- [x] api模块化
- [x] `mock.js` 模拟请求
- [x] 封装 `axios` 处理请求
- [ ] 断网处理
- [x] 封装 `vue-router` 路由守卫处理登录权限
- [x] `vuex` 部分数据本地化永久存储
- [x] 多页应用
- [x] 多页应用的路由及仓库
- [ ] 单元测试
- [x] 按需引入 `Element-UI`
- [x] `webpack` 打包分析
- [ ] 继续完善 `README.md`
- [ ] api文档
- [ ] 项目功能清单



## Build Setup / 开发流程

> **请尽量确保 本地`Node.js`版本 >= 12.16.1，`git`版本>=2.16.2**

``` bash
# install dependencies/拉取项目,在项目路径下执行
npm install

# serve with hot reload at 0.0.0.0:port
# npm安装依赖后,运行node服务器,打开 0.0.0.0:port 预览 (已运行热更新功能)
npm run dev:projectName

# build for production with minification
# 当修改代码后,需要手动打包发布时,运行npm run build命令进行打包
npm run build:projectName

# 打包生产模式 -- 查看包分析报告
npm run analyz
```



## 文档目录

(待完善...)

包括但不限于API文档、公共函数、公共样式、公共组件



## 使用技术

| 技术名称                                                     |              作用 |  版本  |
| ------------------------------------------------------------ | ----------------: | :----: |
| [Vue](http://cn.vuejs.org/)                                  |              框架 | 2.6.11 |
| [vue-class-component](https://class-component.vuejs.org)     |   `Vue`支持类写法 | 7.2.3  |
| [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator) |     `Vue`类语法糖 | 8.4.0  |
| [Vuex-class](https://github.com/ktsn/vuex-class)             |  `Vuex`支持类写法 | 0.3.2  |
| [Vuex](https://vuex.vuejs.org/zh-cn/)                        |          状态管理 | 3.1.3  |
| [vuex-persistedstate](https://www.npmjs.com/package/vuex-persistedstate) | ``Vuex`本地化存储 | 3.0.1  |
| [vue-router](http://router.vuejs.org/zh-cn/)                 |          路由管理 | 3.1.6  |
| [Axios](https://github.com/mzabriskie/axios)                 |          交互处理 | 0.19.2 |
| [mockjs](http://mockjs.com/)                                 |          模拟请求 | 1.1.0  |
| [Webpack](http://webpack.github.io/)                         |          模块打包 | 4.42.0 |
| [Babel](http://babeljs.cn/)                                  |    `ES6`转译`ES5` | 7.9.0  |
| [Element-UI](https://element.eleme.cn/#/)                    |          `UI`组件 | 2.13.1 |




## 编译器

推荐使用 `VSCode` 和 `WebStorm`

[`VSCode`配置文件](./.vscode/settings.json)



## 规范

- 文件/文件夹的创建和命名使用驼峰命名
- `Vue` 组件内的标签顺序（`template` > `script` > `style`）
- `JavaScript` 和 `TypeScript` [注释规范](https://jsdoc.app/tags-param.html)
- `Vue`  组件内 `template` 和 `script`  父子元素不换行，同级元素超过一行要换行
- `Vue`  组件内  `style` 命名使用中划线
- `Vue`  组件内  `script` 变量/函数命名使用驼峰



## package.json配置说明

```json
{
  "name": "chaungyiwang", // 名称
  "version": "1.0.0", // 版本
  "description": "", // 说明
  "private": true, // 是否私有
  "browserslist": [ // 浏览器支持列表
    "defaults" // 默认
  ],
  "dependencies": { // 依赖
    "@babel/runtime": "^7.9.2", // babel运行时
    "@babel/runtime-corejs3": "^7.9.2", // babel运行时-核心库
    "@types/qs": "^6.9.3", // AJAX请求序列化
    "@vue/babel-helper-vue-jsx-merge-props": "^1.0.0", // @vue/babel-preset-jsx内部使用
    "@vue/babel-preset-jsx": "^1.1.2", // vue支持jsx
    "axios": "^0.19.2", // 基于promise 的HTTP 库
    "element-ui": "^2.13.1", // UI
    "vue": "^2.6.11", // VUE
    "vue-class-component": "^7.2.3", // 类风格的Vue组件的ECMAScript/TypeScript装饰器
    "vue-property-decorator": "^8.4.0", // 依赖于vue-class-component，语法糖
    "vue-router": "^3.1.6", // 路由管理
    "vuex": "^3.1.3", // 状态管理
    "vuex-class": "^0.3.2", // 类风格的Vuex的ECMAScript/TypeScript装饰器
    "vuex-persistedstate": "^3.0.1" // 依赖于vue-persistedstate，语法糖
  },
  "devDependencies": { // 开发依赖
    "@babel/core": "^7.9.0", // babel核心
    "@babel/plugin-proposal-class-properties": "^7.8.3", // babel转译类语法=>赋值表达式
    "@babel/plugin-proposal-decorators": "^7.8.3", // babel转译装饰器
    "@babel/plugin-transform-runtime": "^7.9.0", // babel去除冗余引用
    "@babel/preset-env": "^7.9.0", // 使用最新JavaScript
    "@babel/preset-typescript": "^7.9.0", // 使babel支持TypeScript
    "@typescript-eslint/eslint-plugin": "^2.25.0", // 定义好的检测Typescript代码的规范
    "@typescript-eslint/parser": "^2.25.0", // ESLint解析器，允许 ESLint 解析 TypeScript
    "astroturf": "^0.10.2", // 在js中写css
    "autoprefixer": "^9.7.5", // PostCSS 插件，帮你处理浏览器前缀
    "babel-loader": "^8.1.0", // webpack认识babel
    "babel-plugin-component": "^1.1.1", // 让element-ui按需引入
    "clean-webpack-plugin": "^3.0.0", // webpack插件，自动清理打包文件
    "compression-webpack-plugin": "^3.1.0", // webpack插件，开启GZIP压缩JS\CSS
    "cross-env": "^7.0.2", // 给webpack预设环境变量
    "css-loader": "^3.4.2", // webpack认识css
    "eslint": "^6.8.0", // 语法检查
    "eslint-config-standard": "^14.1.1", // eslint风格standard配置
    "eslint-plugin-import": "^2.20.1", // eslint扩展
    "eslint-plugin-node": "^11.0.0", // eslint扩展
    "eslint-plugin-promise": "^4.2.1", // eslint扩展
    "eslint-plugin-standard": "^4.0.1", // eslint风格
    "eslint-plugin-vue": "^6.2.2", // eslint检查vue
    "file-loader": "^5.1.0", // webpack认识静态资源
    "html-loader": "^0.5.5", // webpack认识html
    "html-webpack-plugin": "^3.2.0", // webpack插件，为SPA提供模板
    "husky": "^4.2.5", // git钩子
    "less": "^3.11.1", // less
    "less-loader": "^5.0.0", // webpack认识less
    "mockjs": "^1.1.0", // 模拟接口
    "optimize-css-assets-webpack-plugin": "^5.0.3", // webpack插件来优化最小化 CSS 资源
    "postcss-loader": "^3.0.0", // webpack处理less/sass前预处理css
    "postcss-px-to-viewport": "^1.1.1", // postcss插件，使vh、vw转为px
    "sass-loader": "^8.0.2", // webpack认识sass
    "thread-loader": "^2.1.3", // webpack多线程编译
    "ts-loader": "^6.2.2", // webpack认识ts
    "typescript": "^3.8.3", // ts
    "url-loader": "^3.0.0", // webpack认识静态资源
    "vue-loader": "^15.9.0", // webpack认识vue
    "vue-style-loader": "^4.1.2", // webpack认识vue里的style
    "vue-template-compiler": "^2.6.11", // vue-loader处理require语法
    "webpack": "^4.42.0", // webpack版本
    "webpack-bundle-analyzer": "^3.7.0", // webpack打包可视化
    "webpack-cli": "^3.3.11", // webpack脚手架
    "webpack-dev-server": "^3.10.3", // webpack开发服务
    "webpack-merge": "^4.2.2" // webpack配置文件去重
  },
  "scripts": { // 脚本
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "npm run build:admin && npm run build:manage && npm run build:main",
    "build:admin": "cross-env NODE_ENV=production webpack --config webpack.prod.js",
    "build:main": "cross-env NODE_ENV=production webpack --config webpack.prod.js",
    "build:manage": "cross-env NODE_ENV=production webpack --config webpack.prod.js",
    "dev:admin": "cross-env NODE_ENV=development webpack-dev-server --progress --config webpack.dev.js",
    "dev:main": "cross-env NODE_ENV=development webpack-dev-server --progress --config webpack.dev.js",
    "dev:manage": "cross-env NODE_ENV=development webpack-dev-server --progress --config webpack.dev.js",
    "analyz": "cross-env NODE_ENV=production npm_config_report=true npm run build"
  },
  "husky": { // husky
    "hooks": { // git钩子
      "pre-commit": "eslint --fix --ext .ts,.js,.vue src" // 使用eslint检查并修复代码
    }
  },
  "author": "chaungyizhilian", // 作者
  "license": "ISC" // 许可证
}
```

