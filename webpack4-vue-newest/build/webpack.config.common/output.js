const resolve = require('../webpack.config.libs/util')

const outputConfig = {
  filename: 'bundle.[hash:8].js',
  path: resolve('dist'),
  publicPath: '/'
}

module.exports = outputConfig
