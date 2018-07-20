const resolve = require('../webpack.config.libs/util')

const resolveConfig = {
  extensions: ['.js', '.vue', '.json', '.jsx'],
  alias: {
    '@': resolve('src'),
    'pages': resolve('src/pages'),
    'styles': resolve('src/assets/styles'),
    'images': resolve('src/assets/images'),
    'js': resolve('src/assets/js')
  }
}

module.exports = resolveConfig
