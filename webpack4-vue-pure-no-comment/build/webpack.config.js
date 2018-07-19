const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

const HTMLPlugin = require('html-webpack-plugin')

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const baseConfig = require('./webpack.config.base')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const defaultPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: isDev ? '"development"' : '"production"'
    }
  }),
  new HTMLPlugin({
    template: path.join(__dirname, '/template.html'),
    minify: {
      minifyCSS: true,
      minifyJS: true
    },
    chunksSortMode: 'none'
  })
]

const devServer = {
  host: '0.0.0.0',
  port: 8000,
  headers: {
    'Access-Control-Allow-Origins': '*'
  },
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
    errors: true
  },
  historyApiFallback: true,
  hot: true,
  open: true
}

let config

if (isDev) {
  config = merge(baseConfig, {
    devtool: 'cheap-module-eval-source-map',
    devServer,
    plugins: defaultPlugins.concat([
      new webpack.HotModuleReplacementPlugin()
    ])
  })
} else {
  config = merge(baseConfig, {
    entry: {
      app: resolve('src/main.js')
    },
    output: {
      filename: '[name].[chunkhash:8].js',
      path: resolve('dist')
    },
    module: {
      rules: [
        {
          test: /\.styl$/,
          use: [
            MiniCssExtractPlugin.loader,
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
            'stylus-loader'
          ]
        },
        {
          test: /\.less$/,
          use: [
            MiniCssExtractPlugin.loader,
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
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            }
          ]
        }
      ]
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true
        }),
        new OptimizeCSSAssetsPlugin({})
      ]
    },
    plugins: defaultPlugins.concat([
      new MiniCssExtractPlugin({
        filename: '[name].[chunkhash:8].css',
        chunkFilename: '[id].css'
      }),
      new webpack.NamedChunksPlugin()
    ])
  })
}

module.exports = config
