// 校验代码,避免低级错误,统一风格,方便阅读团队的代码,方便维护
// 一劳永逸
// eslint官方推荐的依赖的插件:
// npm i eslint eslint-config-standard eslint-loader
// eslint-plugin-html eslint-plugin-standard
// eslint-plugin-promise eslint-plugin-import
// eslint-plugin-node -D
//
// {
//   使用标准规范
//   "extends": "standard",
//   规范.vue文件中的模板
//   eslint-plugin-html: 检测.vue里script标签里的html
//   "plugins": [
//     "html"
//   ],
//   npm i babel-eslint -D
//   经过babel处理后是es5的规则
//   "parser": "babel-eslint",
//   "rules": {
//     "no-new": "off",
//     是否允许使用非原生标签
//     "no-extend-native": "off"
//   }
// }
