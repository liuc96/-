const path = require('path') // nodejs 路径模块
const merge = require('webpack-merge') // webpack 服务端 客户端 配置文件 分离
const common = require('./webpack.common.js')
const webpack = require('webpack')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    // webpack-dev-server 配置选项
    contentBase: path.join(__dirname, 'public'), // 告诉服务器从哪里提供内容。只有在你想要提供静态文件时才需要
    clientLogLevel: 'error', // none, error, warning 或者 info（默认值） 开发工具(DevTools)的控制台(console)将显示消息
    compress: true, // 一切服务启用gzip压缩
    host: 'localhost', // 指定使用一个 host。默认是 localhost。如果你希望服务器外部可访问(本机IVP4地址)
    port: 8080, // 指定要监听请求的端口号
    hot: true, // 启用 webpack 的模块热替换特性
    overlay: true, // 当存在编译错误或警告时，在浏览器中显示全屏覆盖
    // noInfo: true, // 启用 noInfo 后，诸如「启动时和每次保存之后，那些显示的 webpack 包(bundle)信息」的消息将被隐藏。错误和警告仍然会显示。
    stats: { // 统计信息
      builtAt: false, // 添加构建日期和构建时间信息
      assets: false, // 添加资源信息
      // chunks: false, // 添加 chunk 信息（设置为 `false` 能允许较少的冗长输出）
      errors: true, // 添加错误信息
      modules: false, // 添加构建模块信息
      timings: true,
      errorDetails: false // 添加错误的详细信息（就像解析日志一样）
    }
  },
  plugins: [
    new webpack.NamedModulesPlugin(), // 热加载
    new webpack.HotModuleReplacementPlugin(), // 热加载
    new webpack.DefinePlugin({
      // 暴露系统环境变量
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
})
