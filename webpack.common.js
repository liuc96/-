const path = require('path')
// const webpack = require('webpack')

const VueLoaderPlugin = require('vue-loader/lib/plugin') // 引入VUE插件
const HtmlWebpackPlugin = require('html-webpack-plugin') // 生成html入口文件 并把webpack 打包后的静态文件自动插入到这个html 文件当中。
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // 清理 /dist 文件夹
// const WorkboxPlugin = require('workbox-webpack-plugin') // PWA

const vendorPkg = ['vue']

function resolve (dir) {
  return path.join(__dirname, dir)
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
          'vue-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]?[hash]',
              esModule: false, // vue 函数渲染采用 CommonJS
              limit: 8192 // 小于8192bytes转换为base64格式
            }
          }
        ]
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
          'vue-style-loader',
          'css-loader',
          'less-loader',
          'postcss-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        exclude: /node_modules/
      },
      // ts和tsx结尾的文件使用babel-loader babel7+ 弃用ts-loader
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  entry: {
    // 单个入口文件
    app: './src/main.ts',
    vendor: vendorPkg
  },
  output: {
    // 输出配置
    filename: process.env.NODE_ENV === 'production' ? './js/[name].[chunkhash].js' : './js/[name].[hash].js', // filename 用于输出文件的文件名。
    chunkFilename: process.env.NODE_ENV === 'production' ? './js/[name].[chunkhash].bundle.js' : './js/[name].[hash].bundle.js', // 动态导入 动态代码拆分
    path: path.resolve(__dirname, 'dist') // 目标输出目录 path 的绝对路径。
    // publicPath: '/',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          // key 为entry中定义的 入口名称
          name: 'vendor',
          test: module => {
            return /vue/.test(module.context)
          },
          chunks: 'initial',
          priority: 10
        },
        common: {
          name: 'common',
          chunks: 'initial',
          priority: 2,
          minChunks: 2
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      inject: 'body',
      filename: 'index.html',
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
