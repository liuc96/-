const path = require('path')

// const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin') // 引入VUE插件
const HtmlWebpackPlugin = require('html-webpack-plugin') // 生成html入口文件 并把webpack 打包后的静态文件自动插入到这个html 文件当中。
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // 清理dist文件夹
const threadLoader = require('thread-loader') // 多线程打包

threadLoader.warmup({
  // pool options, like passed to loader options
  // must match loader options to boot the correct pool
}, [
  // modules to load
  // can be any module, i. e.
  'babel-loader',
  'less-loader',
  'sass-loader',
  'postcss-loader'
])
// const WorkboxPlugin = require('workbox-webpack-plugin') // PWA

const config = require('./webpack.config.js') // 打包配置文件

function resolve (dir) {
  return path.join(__dirname, dir)
}

function assetsPath (_path) {
  var assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? 'static'
    : 'static'
  return path.posix.join(assetsSubDirectory, _path)
}

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', 'tsx', '.vue'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      '@main': resolve('src/main'),
      '@admin': resolve('src/admin'),
      '@manage': resolve('src/manage'),
      '@common': resolve('src/common')
    }
  },
  entry: {
    // 入口文件
    [config.name]: config.entry
    // mobile: './src/mobile.ts'
    // vendor: vendorPkg
  },
  output: {
    // 输出配置
    // filename 用于输出文件的文件名。
    filename: process.env.NODE_ENV === 'production'
      ? './js/[name].[chunkhash].js'
      : './js/[name].[hash].js',
    // 动态导入 动态代码拆分
    chunkFilename: process.env.NODE_ENV === 'production'
      ? './js/[name].[chunkhash].bundle.js'
      : './js/[name].[hash].bundle.js',
    path: path.resolve(__dirname, config.output), // 目标输出目录 path 的绝对路径。
    // 可以记住这个公式：
    // 静态资源最终访问路径 = output.publicPath + 资源loader或插件等配置路径。
    // 举个例子:
    // publicPath 配置为 /dist/，图片的 url-loader 配置项为 name: 'img/[name].[ext]'
    // 那么最终打包出来文件中图片的引用路径为 output.publicPath + 'img/[name].[ext]' = '/dist/img/[name].[ext]'。
    publicPath: process.env.NODE_ENV === 'production'
      ? ''
      : ''
  },
  optimization: {
    splitChunks: { // 分割代码块
      cacheGroups: { // 缓存组
        vendor: {
          name: 'vendor',
          test: module => { // vue相关抽离成vendor
            return /vue/.test(module.context)
          },
          chunks: 'initial',
          priority: 10
        },
        common: {
          name: 'common',
          chunks: 'initial',
          priority: 2, // 权重
          minChunks: 2 // 多次引用的的代码抽离到common
        }
      }
    }
  },
  module: {
    // 决定了如何处理项目中的不同类型的模块。
    rules: [
      // ... 其它规则
      {
        test: /\.vue$/,
        loader: [
          'thread-loader',
          'vue-loader'
        ]
        // exclude: /node_modules/,
        // include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: assetsPath('img/[name].[hash:7].[ext]'),
              esModule: false, // vue 函数渲染采用 CommonJS
              limit: 10000 // 小于10000bytes转换为base64格式
            }
          }
        ]
      },

      {
        test: /\.(woff|woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(less|css)$/,
        use: [
          'thread-loader',
          'vue-style-loader',
          'css-loader',
          'less-loader',
          'postcss-loader'
        ]
        // exclude: /node_modules/,
        // include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          'thread-loader',
          'vue-style-loader',
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
        // exclude: /node_modules/,
        // include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
        // exclude: /node_modules/
        // include: [resolve('src'), resolve('test')]
      },
      // ts和tsx结尾的文件使用babel-loader babel7+ 弃用ts-loader
      {
        test: /\.tsx?$/,
        use: ['thread-loader', 'babel-loader'],
        // exclude: /node_modules/,
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.m?js$/,
        // exclude: /node_modules/,
        include: [resolve('src'), resolve('test')],
        use: ['thread-loader', 'babel-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      // title: 'Output Management',
      inject: 'body',
      filename: 'index.html',
      favicon: './public/a.ico',
      template: './public/index.html'
      // chunks: ['common', 'vendor', 'main']
    }),

    // new HtmlWebpackPlugin({
    //   // title: 'Output Management',
    //   inject: 'body',
    //   filename: 'admin.html',
    //   favicon: './public/a.ico',
    //   template: './public/admin.html',
    //   chunks: ['common', 'vendor', 'admin']
    // }),

    // new WorkboxPlugin.GenerateSW({
    //   // 这些选项帮助 ServiceWorkers 快速启用
    //   // 不允许遗留任何“旧的” ServiceWorkers
    //   clientsClaim: true,
    //   skipWaiting: true
    // }),

    new VueLoaderPlugin() // 请确保引入这个插件来施展魔法
  ]
}
