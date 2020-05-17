(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{208:function(v,_,a){"use strict";a.r(_);var i=a(2),e=Object(i.a)({},function(){var v=this,_=v.$createElement,a=v._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h1",{attrs:{id:"optimize"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#optimize","aria-hidden":"true"}},[v._v("#")]),v._v(" Optimize")]),v._v(" "),a("h2",{attrs:{id:"vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue","aria-hidden":"true"}},[v._v("#")]),v._v(" Vue")]),v._v(" "),a("ul",[a("li",[v._v("合理使用v-show和v-if")]),v._v(" "),a("li",[v._v("合理使用computed")]),v._v(" "),a("li",[v._v("v-for时加key，以及避免和v-if同时使用")]),v._v(" "),a("li",[v._v("自定义事件、DOM事件及时销毁")]),v._v(" "),a("li",[v._v("合理使用异步组件")]),v._v(" "),a("li",[v._v("合理使用keep-alive")]),v._v(" "),a("li",[v._v("data层级不要太深")]),v._v(" "),a("li",[v._v("使用vue-loader在开发环境做模板编译（预编译）")])]),v._v(" "),a("h2",{attrs:{id:"react"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react","aria-hidden":"true"}},[v._v("#")]),v._v(" React")]),v._v(" "),a("ul",[a("li",[v._v("渲染列表时加key")]),v._v(" "),a("li",[v._v("自定义事件、DOM事件及时销毁")]),v._v(" "),a("li",[v._v("合理使用异步组件")]),v._v(" "),a("li",[v._v("减少函数bind this 的次数")]),v._v(" "),a("li",[v._v("合理使用SCU PureComponent 和 memo")]),v._v(" "),a("li",[v._v("合理使用Immutable.js")])]),v._v(" "),a("h2",{attrs:{id:"webpack-性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-性能优化","aria-hidden":"true"}},[v._v("#")]),v._v(" Webpack 性能优化")]),v._v(" "),a("h4",{attrs:{id:"生产环境："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生产环境：","aria-hidden":"true"}},[v._v("#")]),v._v(" 生产环境：")]),v._v(" "),a("ul",[a("li",[v._v("优化 babel-loader"),a("br"),v._v("\n开启缓存、明确目标和排除目标")]),v._v(" "),a("li",[v._v("ignorePlugin"),a("br"),v._v("\n该插件能够使得指定目录被忽略，从而使得打包变快，文件变小")]),v._v(" "),a("li",[v._v("noParse"),a("br"),v._v("\n作用主要是过滤不需要解析的文件，比如打包的时候依赖了三方库（jquyer、lodash）等，而这些三方库里面没有其他依赖，可以通过配置noParse不去解析文件，提高打包效率")]),v._v(" "),a("li",[v._v("happyPack"),a("br"),v._v("\n多进程打包")]),v._v(" "),a("li",[v._v("ParallelUglifyPlugin"),a("br"),v._v("\n多进程压缩JS")])]),v._v(" "),a("h4",{attrs:{id:"开发环境："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发环境：","aria-hidden":"true"}},[v._v("#")]),v._v(" 开发环境：")]),v._v(" "),a("ul",[a("li",[v._v("自动刷新"),a("br"),v._v("\nwebpack-dev-server会自动开启刷新浏览器")]),v._v(" "),a("li",[v._v("热更新"),a("br"),v._v("\n新代码生效，网页不刷新，状态不丢失")]),v._v(" "),a("li",[v._v("DllPlugin"),a("br"),v._v("\n在webpack打包过程中,由于第三方插件的引入,在每一次打包的过程中,都会打包这些第三方插件,所以,通过DllPlugin,来达到,只打包一次,之后,在打包的过程中,运用这个已经打包的文件即可")])]),v._v(" "),a("h4",{attrs:{id:"产出的代码："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#产出的代码：","aria-hidden":"true"}},[v._v("#")]),v._v(" 产出的代码：")]),v._v(" "),a("ul",[a("li",[v._v("小图片 base64 编码")]),v._v(" "),a("li",[v._v("bundle加hash")]),v._v(" "),a("li",[v._v("懒加载")]),v._v(" "),a("li",[v._v("提取公共代码")]),v._v(" "),a("li",[v._v("IngorePlugin")]),v._v(" "),a("li",[v._v("使用CDN加速")]),v._v(" "),a("li",[v._v("使用production模式\n默认开启代码压缩，启动Tree-Shaking")]),v._v(" "),a("li",[v._v("Scope Hosting\n多个函数合成一个函数，作用域减少")])]),v._v(" "),a("h4",{attrs:{id:"前端为何要进行打包和构建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端为何要进行打包和构建","aria-hidden":"true"}},[v._v("#")]),v._v(" 前端为何要进行打包和构建:")]),v._v(" "),a("p",[v._v("代码层面：")]),v._v(" "),a("ul",[a("li",[v._v("体积更小（Tree-Shaking、压缩、合并）")]),v._v(" "),a("li",[v._v("编译高级语言或语法（TS、ES6+、模块化、scss）")]),v._v(" "),a("li",[v._v("兼容性和错误检查（Polyfill、postcss、eslint）")])]),v._v(" "),a("p",[v._v("研发团队层面")]),v._v(" "),a("ul",[a("li",[v._v("统一、高效的开发环境")]),v._v(" "),a("li",[v._v("统一的构建流程和产出标准")]),v._v(" "),a("li",[v._v("集成公司构建规范（提测、上线等 ）")])]),v._v(" "),a("h2",{attrs:{id:"页面性能（通用）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#页面性能（通用）","aria-hidden":"true"}},[v._v("#")]),v._v(" 页面性能（通用）")]),v._v(" "),a("ul",[a("li",[v._v("资源压缩合并，减少 HTTP 请求")]),v._v(" "),a("li",[v._v("非核心代码异步加载（异步加载的方式，异步加载的区别）")]),v._v(" "),a("li",[v._v("利用浏览器缓存（缓存的分类，缓存原理）")]),v._v(" "),a("li",[v._v("使用 CDN")]),v._v(" "),a("li",[v._v("预解析 DNS")]),v._v(" "),a("li",[v._v("懒加载")]),v._v(" "),a("li",[v._v("节流防抖")])])])},[],!1,null,null,null);_.default=e.exports}}]);