const devServerConfig = {
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

module.exports = devServerConfig
