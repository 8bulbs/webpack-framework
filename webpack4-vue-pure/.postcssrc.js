// https://github.com/michael-ciniawsky/postcss-load-config

// module.exports = {
//   "plugins": {
//     "postcss-import": {},
//     "postcss-url": {},
//     // to edit target browsers: use "browserslist" field in package.json
//     "autoprefixer": {}
//   }
// }

// 支持响应式
// npm i postcss-aspect-ratio-mini postcss-cssnext autoprefixer
// postcss-px-to-viewport postcss-write-svg cssnano postcss-viewport-units
// postcss-viewport-units -D

// postcss-aspect-ratio-mini 处理元素容器宽高比
// <div class="aspectratio">
//   <div class="aspectratio-content"></div>
// </div>
// postcss-write-svg 解决移动端1px

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "postcss-aspect-ratio-mini": {},
    "postcss-write-svg": { utf8: false },
    "postcss-cssnext": {},
    "postcss-px-to-viewport": { //核心插件
      viewportWidth: 750, // (Number) The width of the viewport.
      viewportHeight: 1334, // (Number) The height of the viewport.
      unitPrecision: 3, // px转换成视窗单位值的小数位 (Number) The decimal numbers to allow the REM units to grow to.
      viewportUnit: 'vw', // 需要转换成的视窗单位(String) Expected units.
      selectorBlackList: ['.ignore', '.hairlines'], // 忽略的样式类 (Array) The selectors to ignore and leave as px.
      minPixelValue: 1, // 小于或者等于1px不转换成视窗单位(Number) Set the minimum pixel value to replace.
      mediaQuery: false // 允许在媒体查询中转换px(Boolean) Allow px to be converted in media queries.
    }, "postcss-viewport-units":{},
    "cssnano": {
      preset: "advanced", // npm i cssnano-preset-advanced -D
      autoprefixer: false,
      "postcss-zindex": false // 禁用把z-index重置为1的功能
    }
  }
}

// 由于cssnext和cssnano都具有autoprefixer,事实上只需要一个，
// 所以把默认的autoprefixer删除掉，
// 然后把cssnano中的autoprefixer设置为false。

// postcss-cssnext其实就是cssnext。
// 该插件可以让我们使用CSS未来的特性，其会对这些特性做相关的兼容性处理。

// cssnano主要用来压缩和清理CSS代码。
// 在Webpack中，cssnano和css-loader捆绑在一起，所以不需要自己加载它。


