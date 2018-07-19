const path = require('path')
const webpack = require('webpack')
// 合并webpack配置
const merge = require('webpack-merge')
// 提取css代码,生产环境使用外部样式,并可单独缓存
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// 渲染的html模板
const HTMLPlugin = require('html-webpack-plugin')
// 压缩js代码
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const baseConfig = require('./webpack.config.base')

const isDev = process.env.NODE_ENV === 'development'

const defaultPlugins = [
  // 注册全局环境变量,提供给webpack,vue和我们自己使用
  new webpack.DefinePlugin({
    'process.env': {
      // 注意双引号,否则webpack转义代码会解析成变量,调用时会报错
      // webpack判断process.env去选择不同版本的源码去打包
      // 比如开发版源码(有错误信息提示),生产版源码
      NODE_ENV: isDev ? '"development"' : '"production"'
    }
  }),
  new HTMLPlugin({
    template: path.join(__dirname, './template.html'),
    minify: { // 压缩 HTML 的配置
      minifyCSS: true, // 压缩 HTML 中出现的 CSS 代码
      minifyJS: true // 压缩 HTML 中出现的 JS 代码
    }
  })
]

const devServer = {
  // 可用localhost,127.0.0.1,以及内网IP访问
  // 但不能用0.0.0.0:8000打开
  host: '0.0.0.0',
  port: 8000,
  headers: {
    'Access-Control-Allow-Origins': '*'
  },
  // 代理
  proxy: {
    '/api': {
      target: 'http:yourIPAddress',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/'
      }
    }
  },
  overlay: {
    // 出现的错误显示到页面
    errors: true
  },
  // 处理url和页面的映射
  historyApiFallback: {
    index: '/dist/index.html'
  },
  // hotModuleReplacement
  // 修改代码后页面无刷新更新,不会丢失数据
  hot: true,
  // 启动时自动打开浏览器
  // 但是改webpack配置后也会打开新页面
  open: true
}

let config

if (isDev) {
  config = merge(baseConfig, {
    // 映射源码和编译后的代码,方便在浏览器调试代码
    // source-map是最完整的映射代码,但是效率低,文件大,编译和调试慢
    // eval-source-map会导致代码对不齐
    // 官方推荐cheap-module-eval-source-map
    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',
    devServer,
    plugins: defaultPlugins.concat([
      // 启动hotModuleReplacement功能
      new webpack.HotModuleReplacementPlugin(),
      // 减少不需要的信息展示
      new webpack.NoEmitOnErrorsPlugin()
    ])
  })
} else {
  config = merge(baseConfig, {
    entry: {
      app: path.join(__dirname, '../src/main.js'),
      // 把第三方类库源码单独打包,利用长缓存,提高加载速度
      vendor: [
        'vue', 'vue-router', 'vuex', 'axios', 'iview',
        'echarts', 'js-cookie', 'js-file-download'
      ]
    },
    output: {
      // 使用chunkhash,每个文件会单独生成一个hash
      // 生产模式必须用chunkhash,不然vendor的哈希也会变
      // 就没有vendor的意义了
      filename: '[name].[chunkhash:8].js',
      path: path.join(__dirname, '../dist')
    },
    module: {
      rules: [
        {
          test: /\.styl$/,
          use: ExtractTextPlugin.extract({
            // 会把css-loader编译的代码
            // 用js写成一个style标签
            fallback: 'vue-style-loader',
            use: [
              // css-loader只是处理css文件
              {
                loader: 'css-loader',
                options: {
                  // 压缩css代码
                  minimize: true
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                  // 用stylus-loader生成的sourceMap
                  // 效率会高,不然postcss会给提醒
                  // 官方文档有说明
                }
              },
              // 一层层往上扔,会生成sourceMap
              'stylus-loader'
            ]
          })
        },
        {
          test: /\.less$/,
          use: ExtractTextPlugin.extract({
            fallback: 'vue-style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  minimize: true
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              },
              'less-loader'
            ]
          })
        },
        {
          test: /.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  minimize: true
                }
              }
            ]
          })
        }
      ]
    },
    plugins: defaultPlugins.concat([
      // 通过css文件内容进行哈希生成的文件名
      new ExtractTextPlugin('styles.[contentHash:8].css'),
      // 单独打包
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
      }),
      // 优化
      // 把与webpack相关的代码单独打包到一个文件
      // 避免有新的模块加入时,webpack会给模块加一个id
      // 插入的顺序在中间时,会导致后面每个模块的id发生变化
      // 会导致打包出的内容的hash会变化,就不能使用长缓存
      // 注意vendor要放在runtime的前面
      new webpack.optimize.CommonsChunkPlugin({
        name: 'runtime'
      }),
      new webpack.NamedChunksPlugin(),
      new UglifyJsPlugin()
    ])
  })
}

module.exports = config
