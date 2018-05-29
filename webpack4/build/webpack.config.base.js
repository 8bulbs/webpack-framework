/**
 * webpack4/build/webpack.config.base.js
 */

// npm install -g npm-check-updates
// 检查依赖包的最新版本
// $ ncu
// 更新依赖包到最新版本
// $ ncu -u
// $ npm i
// $ npm i webpack-cli -D

const path = require('path')
const createVueLoaderOptions = require('./vue-loader.config')
// const isDev = process.env.NODE_ENV === 'development'

const config = {
  // 'development'会做开发时的优化
  // 'production'会做正式环境的优化,比如压缩
  // 优化会自动配置
  // mode 在4.0一定要加,3.xxx不能加
  // 只接收 'development' || 'production'
  mode: process.env.NODE_ENV || 'production',
  // 编译目标运行的环境
  target: 'web',
  // 入口文件
  entry: path.join(__dirname, '../src/main.js'),
  // 出口文件
  output: {
    // hash是整个项目的hash
    // dev-server 不能使用chunkhash,不然会报错
    filename: 'bundle.[hash:8].js',
    path: path.join(__dirname, '../dist')
  },
  // 模块的loader规则
  // 声明 appropriate 合适的 loader
  // webpack 只支持原生js,配置loader后可以import非js的模块
  module: {
    rules: [
      // 启用eslint
      // {
      //   // 让eslint-loader为前置loader,在babel-loader之前检查
      //   enforce: 'pre',
      //   test: /.(jsx?|vue)$/,
      //   loader: 'eslint-loader',
      //   include: path.join(__dirname, '../src'),
      //   exclude: /node_modules/
      // },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: createVueLoaderOptions()
          },
          {
            loader: 'iview-loader',
            options: {
              prefix: false
            }
          }
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
        include: [
          path.resolve(__dirname, '../src')
          // 限定只在 src 目录下的 js/jsx 文件需要经 babel-loader 处理
          // 通常我们需要 loader 处理的文件都是存放在 src 目录
          // 缩小loader应用的文件范围,提高构建速度
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.styl$/,
        use: [
          // 用了vue-style-loader才支持css热更替
          'vue-style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          'stylus-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          'less-loader'
        ]
      },
      {
        test: /\.(jpg|png|jpeg|gif|svg)$/,
        use: [
          {
            // 依赖于file-loader(读取操作文件)
            loader: 'url-loader',
            options: {
              // 文件小于10000b时压缩成base64
              limit: 10000,
              // name: 文件原名
              // ext: 原文件扩展名
              // resources: 自定义文件夹名
              // path: 原路径
              // name: 'resources/[path][name].[hash:8].[ext]'
              name: 'static/imgs/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          // name: 'resources/[path][name].[hash:8].[ext]'
          name: 'static/fonts/[name].[hash:8].[ext]'
        }
      }
    ]
  },
  resolve: {
    // 从前到后自动匹配扩展名
    extensions: ['.js', '.vue', '.json', '.jsx'],
    // 别名,方便引入时使用
    alias: {
      '@': path.join(__dirname, '../src'),
      // 'styles': path.join(__dirname, '../src/assets/styles'),
      'views': path.join(__dirname, '../src/views')
    }
  }
}

module.exports = config
