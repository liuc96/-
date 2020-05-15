const path = require('path')
// const webpack = require('webpack')

const VueLoaderPlugin = require('vue-loader/lib/plugin') // 引入VUE插件
const HtmlWebpackPlugin = require('html-webpack-plugin') // 生成html入口文件 并把webpack 打包后的静态文件自动插入到这个html 文件当中。
// const WorkboxPlugin = require('workbox-webpack-plugin') // PWA

const vendorPkg = ['vue']

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
      '@': resolve('src')
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
      // 它会应用到普通的 `.css` 文件
      // 以及 `.vue` 文件中的 `<style>` 块
      // {
      //   test: /\.css$/,
      //   use: [
      //     'vue-style-loader',
      //     'css-loader',
      //     'postcss-loader'
      //   ],
      //   exclude: /node_modules/
      // },
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
  entry: {
    // 单个入口文件
    app: './src/main.ts',
    // admin: './src/admin.ts',
    // mobile: './src/mobile.ts'
    vendor: vendorPkg
  },
  output: {
    // 输出配置
    filename: process.env.NODE_ENV === 'production'
      ? './js/[name].[chunkhash].js' : './js/[name].[hash].js', // filename 用于输出文件的文件名。
    chunkFilename: process.env.NODE_ENV === 'production'
      ? './js/[name].[chunkhash].bundle.js' : './js/[name].[hash].bundle.js', // 动态导入 动态代码拆分
    path: path.resolve(__dirname, 'dist'), // 目标输出目录 path 的绝对路径。
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
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      inject: 'body',
      filename: 'index.html',
      favicon: './public/a.ico',
      template: './public/index.html' // 注意这里需要引入 html-loader
    }),

    // new WorkboxPlugin.GenerateSW({
    //   // 这些选项帮助 ServiceWorkers 快速启用
    //   // 不允许遗留任何“旧的” ServiceWorkers
    //   clientsClaim: true,
    //   skipWaiting: true
    // }),

    new VueLoaderPlugin() // 请确保引入这个插件来施展魔法
  ]
}
