module.exports = {
  presets: [
    ['@vue/babel-preset-jsx'],
    ['@babel/preset-env', { modules: false }],
    [
      '@babel/preset-typescript', // 引用Typescript插件
      {
        isTSX: true,
        allExtensions: true // 支持所有文件扩展名 必须
      }
    ]
  ],
  plugins: [
    // element-ui按需加载插件
    // ['component', { libraryName: 'element-ui', styleLibraryName: 'theme-chalk' }, 'component'],
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3 // 可选 false | 2 | 3
      }
    ],
    // element-ui按需引入插件
    // ['component', { libraryName: 'element-ui', styleLibraryName: 'theme-chalk' }, 'element-ui'],

    // vue-property-decorator 配置
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }]
    // end vue-property-decorator 配置

  ]
}
