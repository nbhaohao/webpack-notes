# 03-use-url-loader
## Loader
`webpack` 默认只能处理 `js` 文件，那如果要导入其他类型的文件，我们就需要用到各种 `loader` 了。
我们在 `webpack.config.js` 中做这样的配置：
``` js
  module: {
    rules: [
      {
        test: /\.jpg$/,
        use: "file-loader"
      }
    ]
  }
```
在 `rules` 数组中我们定义了一个规则对象，`test` 是一个正则表达式，这里我们指定了以 `.jpg` 结尾的文件，使用 `file-loader` 来处理。

接着我们就可以在 `index.js` 中使用我们的图片了。

``` js
import webpackLogo from "./assets/webpack-logo.jpg";

const LogoImage = new Image();
LogoImage.src = webpackLogo;
LogoImage.width = 200;

document.body.appendChild(LogoImage);
```
`webpackLogo` 导入的其实是一个地址字符串，所以我们可以把它指定为 `img` 的 `src` 属性。
## UrlLoader
`url-loader` 可以完全代替 `file-loader` 使用，它的好处是，可以设置 `limit` 属性，当图片文件大小较小的时候，我们可以把它转换成 `base64` 的形式，减少请求数量。

``` js
  module: {
    rules: [
      {
        test: /\.jpg$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "static",
            limit: 10240
          }
        }
      }
    ]
  }
```
我们自定义了生成文件的文件名，配置了输出目录，`limit` 表示当这个文件小于 10240 字节的时候，会使用 `base64` 处理，反之则使用引入文件路径的方式使用。
