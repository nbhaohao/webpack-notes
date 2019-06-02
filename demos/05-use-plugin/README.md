# 05-use-plugin
## plugin
`webpack` 官方有说过，`webpack` 的源码也是 **插件化** 的，即一个功能就可以看作是一个 `plugin`, 这也保证了 `webpack` 中各个功能代码互不影响。

而对于在 `webpack` 中，`plugin` 的作用是可以在 `webpack` 的编译打包的生命周期中执行自己想要执行的代码。
## html-webpack-plugin
`html-webpack-plugin` 可以帮助我们自动在打包后的目录下生成 `html` 文件，并引入我们打包生成的 `js` 文件。

安装：`npm install html-webpack-plugin -D`. 

进行配置：
``` javascript
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  plugins: [new HTMLWebpackPlugin()]
};
```

传入简单的 `Option`, 比如我们希望 `html` 文件中包含一个 `div#root`

``` javascript
module.exports = {
  plugins: [
    new HTMLWebpackPlugin({
      template: "src/index.html"
    })
  ]
};

```
## clean-webpack-plugin
`clean-webpack-plugin` 可以帮助我们自动删除 `dist` 文件夹，用起来也很简单：

``` javascript
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  plugins: [
    new CleanWebpackPlugin()
  ]
};

```
