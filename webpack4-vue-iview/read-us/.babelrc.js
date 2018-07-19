// {
//   "presets": [
//     ["env", {
//       这样可以把 import/export 的这一部分模块语法交由 webpack 处理，
//       否则没法使用 Tree shaking 的优化,删除没有引用的代码
//       "modules": false,
//       "targets": {
//         "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
//       }
//     }],
//     用第二新的规范
//     "stage-2"
//   ],
//   插件
//   "plugins": ["transform-vue-jsx", "transform-runtime"]
// }
