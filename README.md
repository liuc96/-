# 创意网

> 项目简单介绍.......
>
> 本页面需要在服务器环境下访问( 可使用 `npm run dev` 预览 ), 勿直接浏览静态页面



## **ToDoList**

- [x] 支持 `TypeScript`
- [x] `ESlint` 代码风格统一
- [x] `git commit` 钩子验证代码风格
- [ ] `SPA` 动态修改 页面 `title`信息方案
- [x] api模块化
- [x] `mock.js` 模拟请求
- [ ] 封装 `axios` 处理请求
- [ ] 封装 `vue-router` 路由守卫处理登录权限
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

['VSCode'配置文件](./.vscode/settings.json)



## 规范

- 文件/文件夹的创建和命名使用驼峰命名
- `Vue` 组件内的标签顺序（`template` > `script` > `style`）
- `JavaScript` 和 `TypeScript` [注释规范](https://jsdoc.app/tags-param.html)
- `Vue`  组件内 `template` 和 `script`  父子元素不换行，同级元素超过一行要换行
- `Vue`  组件内  `style` 命名使用中划线
- `Vue`  组件内  `script` 变量/函数命名使用驼峰



## package.json配置说明

