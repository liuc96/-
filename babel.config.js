module.exports = {
  presets: [
    ['@vue/babel-preset-jsx'],
    ['@babel/preset-env'],
    [
      '@babel/preset-typescript', // 引用Typescript插件
      {
        isTSX: true,
        allExtensions: true // 支持所有文件扩展名 必须
      }
    ]
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3 // 可选 false | 2 | 3
      }
    ],

    // vue-property-decorator 配置
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }]
    // end vue-property-decorator 配置
  ]
}
