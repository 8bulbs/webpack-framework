// webpack 加载loader使用字符串的方式
// const docsLoader = require.resolve('./docsloader')

module.exports = (isDev) => {
  return {
    // 不保留模板里的空格,压缩文件大小,
    // 消除空格引起的页面样式bug
    preserveWhitespace: false,
    // 提取vue组件内的CSS,如果不提取,加载速度快
    extractCSS: !isDev
    // css模块配置
    // cssModules: {
    //   // class的标识名称
    //   localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
    //   // 是否要驼峰命名
    //   camelCase: true
    // }
    // 组件的热更替,会根据环境变量配置
    // hotReload: true
    // 指定.vue文件里自定义的模块和js,html,style的loader
    // 方便构建组件库时写文档
    // loaders: {
    //   'docs': docsLoader
    // }
    // 预解析loader
    // preLoader: {}
    // 后置loader
    // postLoader: {}
  }
}
