### a 8bulbs project webpack-framework 开箱即用

### 小广告:smile:

>欢迎在github上为我点星星Star:star:,欢迎转发,也欢迎戳一下[文章:你的webpack,是你的webpack](https://8bulbs.github.io/2018/04/12/%E4%BD%A0%E7%9A%84webpack-%E6%98%AF%E4%BD%A0%E7%9A%84webpack/)末尾的点击打赏
### 源码使用说明
>下载代码
```bash
$ git clone https://github.com/8bulbs/webpack-framework.git
```
>进入webpack3-vue文件夹
```bash
$ cd webpack3-vue
```
>安装依赖
```bash
$ npm i
```
>启动开发服务器,请修改自动打开的地址栏url为localhost:8000或者127.0.0.1:8000
>如果你用自己的源代码文件替换了src文件夹,请在webpack.config.js文件里设置你的代理服务器的IP
```bash
$ npm run dev
```
>打包项目代码,根目录下会多出一个dist目录
```bash
$ npm run build
```
>启动部署服务器,请在server.js文件里设置你的代理服务器的IP,在地址栏输入localhost:8001或者127.0.0.1:8001
```bash
$ cd server
$ npm i
$ node server
```
>
# 目录结构
```
webpack3  // 项目根目录
│   .babelrc       // babel配置文件
│   .editorconfig  // 编辑器配置文件
│   .eslintrc      // eslint规则配置文件
│   .gitignore     // git忽略配置的文件
│   .postcssrc.js  // css后处理规则配置文件
│   favicon.ico    // 网站的浏览器小图标文件
│   package.json   // 项目依赖和脚本的配置文件
│   README.md      // 项目的说明文件
│
├──build  // 项目构建目录
│     template.html           // vue挂载的模板文件
│     vue-loader.config.js    // vue-loader的配置文件
│     webpack.config.base.js  // webpack基础配置文件
│     webpack.config.js       // webpack的开发环境和生产环境配置文件
│
├──read-us // 配置文件的说明
│      .babelrc.js   // babel的配置说明文件
│      .eslintrc.js  // eslint的配置说明文件
│
├──server  // 项目部署服务器目录
│     package.json  // 部署服务器所需的依赖的配置文件
│     server.js     // 部署服务器的脚本文件
│
└──src  // 源码目录
   │
   ├──assets // 资源目录
   │  │
   │  ├──fonts   // 字体文件目录
   │  ├──images  // 图片文件目录
   │  ├──styles  // 样式文件目录
   │  └──utils   // 工具代码目录
   │
   ├──base-components  // 基础组件目录
   ├──router           // 前端路由配置目录
   ├──store            // 前端数据仓库配置目录
   └──views            // 业务组件目录

```

