const merge = require('webpack-merge') // webpack 服务端 客户端 配置文件 分离
const common = require('./webpack.common.js')
const webpack = require('webpack')
const CompressionWebpackPlugin = require('compression-webpack-plugin') // 开启GZIP压缩

module.exports = merge(common, {
  mode: 'production',
  devtool: '(none)',
  plugins: [
    new webpack.DefinePlugin({
      // 暴露系统环境变量
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new CompressionWebpackPlugin({
      // asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|css)$/,
      // 只处理大于xx字节 的文件，默认：0
      threshold: 0,
      // 示例：一个1024b大小的文件，压缩后大小为768b，minRatio : 0.75
      minRatio: 0.8, // 默认: 0.8
      // 是否删除源文件，默认: false
      deleteOriginalAssets: false
    })
  ]
})
