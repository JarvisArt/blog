# 性能优化

## Vue

- 合理使用v-show和v-if
- 合理使用computed
- v-for时加key，以及避免和v-if同时使用
- 自定义事件、DOM事件及时销毁
- 合理使用异步组件
- 合理使用keep-alive
- data层级不要太深
- 使用vue-loader在开发环境做模板编译（预编译）

## React

- 渲染列表时加key
- 自定义事件、DOM事件及时销毁
- 合理使用异步组件
- 减少函数bind this 的次数
- 合理使用SCU PureComponent 和 memo
- 合理使用Immutable.js

## Webpack 性能优化

#### 生产环境：
- 优化 babel-loader  
  开启缓存、明确目标和排除目标
- ignorePlugin  
  该插件能够使得指定目录被忽略，从而使得打包变快，文件变小
- noParse  
  作用主要是过滤不需要解析的文件，比如打包的时候依赖了三方库（jquyer、lodash）等，而这些三方库里面没有其他依赖，可以通过配置noParse不去解析文件，提高打包效率
- happyPack  
  多进程打包
- ParallelUglifyPlugin  
  多进程压缩JS

#### 开发环境：
- 自动刷新  
  webpack-dev-server会自动开启刷新浏览器
- 热更新  
  新代码生效，网页不刷新，状态不丢失
- DllPlugin  
  在webpack打包过程中,由于第三方插件的引入,在每一次打包的过程中,都会打包这些第三方插件,所以,通过DllPlugin,来达到,只打包一次,之后,在打包的过程中,运用这个已经打包的文件即可

#### 产出的代码：
- 小图片 base64 编码
- bundle加hash
- 懒加载
- 提取公共代码
- IngorePlugin
- 使用CDN加速
- 使用production模式
  默认开启代码压缩，启动Tree-Shaking
- Scope Hosting
  多个函数合成一个函数，作用域减少

#### 前端为何要进行打包和构建:
代码层面：
- 体积更小（Tree-Shaking、压缩、合并）
- 编译高级语言或语法（TS、ES6+、模块化、scss）
- 兼容性和错误检查（Polyfill、postcss、eslint）  

研发团队层面
- 统一、高效的开发环境
- 统一的构建流程和产出标准
- 集成公司构建规范（提测、上线等 ）


## 页面性能（通用）
- 资源压缩合并，减少 HTTP 请求
- 非核心代码异步加载（异步加载的方式，异步加载的区别）
- 利用浏览器缓存（缓存的分类，缓存原理）
- 使用 CDN
- 预解析 DNS
- 懒加载
- 节流防抖
- SSR
