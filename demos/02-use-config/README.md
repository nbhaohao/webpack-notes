# 02-use-config
## 配置文件
`webpack` 默认会使用当前目录下的 `webpack.config.js` 文件作为配置文件， 下面是一个简单的配置示例：
``` js
const path = require('path')
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './bundle'), // 绝对路径
  }
}
```
其中 `output` 的 `path` 要求是一个绝对路径，所以我们使用 `path.resolve` 进行路径拼接，`__dirname` 是 node 的一个全局变量，表示这个 js 文件的目录。
## 使用
我们定义好 `webpack.config.js` 后，就可以执行 `npm run webpack`, 会按照我们的预期，生成 `bundle/bundle.js` 文件。
如果我们想要给配置文件取另外的名字，我们可以定义一个新的 `npm script`.

``` json
"scripts": {
    "webpack": "webpack",
    "webpack:custom": "npm run webpack -- --config ./buildConfigs/webpack.config.js"
},  
```
如果此时我们执行 `webpack:custom` 打包，发现 `bundle` 文件夹会生成在 `buildConfigs` 文件夹下，这不符合我们的预期，所以需要修改 `output` 的配置。
``` js
output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../bundle'), // 绝对路径
}
```
重新运行 `npm run webpack:custom`, 会发现，一切又正常了。同时也想到一个问题，由于我们刚才的失误，只是导致了 `output` 文件目录的错误，但不影响 `./src/index.js` 的获取，所以 `entry` 的路径是基于项目根目录的相对路径。 