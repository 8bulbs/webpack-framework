const path = require('path')
const createVueLoaderOptions = require('./vue-loader.config')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const config = {
  mode: process.env.NODE_ENV || 'production',
  target: 'web',
  entry: resolve('src/main.js'),
  output: {
    filename: 'bundle.[hash:8].js',
    path: resolve('dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /.(jsx?|vue)$/,
        loader: 'eslint-loader',
        include: resolve('src'),
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: createVueLoaderOptions()
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
          resolve('src')
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
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'static/imgs/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        exclude: /node_modules/,
        options: {
          limit: 10000,
          name: 'static/fonts/[name].[hash:8].[ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.jsx'],
    alias: {
      '@': resolve('src'),
      'pages': resolve('src/pages'),
      'styles': resolve('src/assets/styles'),
      'images': resolve('src/assets/images')
    }
  }
}

module.exports = config
