# 04-import-css-style
## 引入 CSS 文件
以往如果我们需要在页面中引入 css 文件，我们会在 `head` 中引入 `link` 标签，那在 `webpack` 中，所有东西都是模块，所以我们把 css 也当做模块处理，那我们首先需要配置相应的 `loader`.

``` js
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
```
这里我们指定了多个 loader, 执行顺序是从右到左，`css-loader` 负责让我们可以 `import` css 文件，`style-loader` 负责把我们的样式插入到 `head` 的 `style` 标签中。

我们可以在 `dist` 文件夹下新建一个 `index.html` 文件，引入 `main.js` 看看效果(目前还是手动创建 html 文件，后续可以通过 `plugin` 来实现自动化)。

## 使用 SCSS
要在项目中使用 `.scss`, 我们需要 `sass-loader`, 根据文档，我们先安装 `npm install sass-loader node-sass -D`.
然后修改我们的配置：
``` js
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
```

## SCSS 和 JavaScript 文件共享变量
我们可以在 `scss` 文件中使用 `:export` 语法，这样可以让 `.js` 文件也访问到样式变量。
``` scss
$themeColor: cadetblue;
:export {
  themeColor: $themeColor;
}
```
``` js
import styles from "./index.scss";
const h2Element = document.createElement("h2");
h2Element.innerText = "My color from scss";
h2Element.style = `color: ${styles.themeColor}`;
document.body.appendChild(h2Element);
```

## 使用 POSTCSS
postcss 允许我们转换 css 代码，比如当我们使用一些较新的 css 语法的时候，还需要增加类似 `-webkit` 的浏览器厂商前缀，保证兼容性。
那 postcss 则是可以自动化帮我们做这些事情 (这么想的话，好像 postcss 就像是 css 中的 babel 啊)，在 `webpack` 中，我们可以使用 `postcss-loader`.

修改我们的配置：
``` js
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"]
      }
    ]
  }
```
根据 `postcss-loader` 文档的说明，我们还需要创建 `postcss.config.js` 文件。
``` js
module.exports = {
  plugins: [require("autoprefixer")]
};
```
`autoprefixer` 需要先安装：`npm install autoprefixer -D`, `autoprefixer` 就是可以自动帮我们加厂商前缀的 `postcss` 的插件之一。

当我们做好了这些，可以写类似 `transform`, `display: flex` 的语法，来看最后生成的样式的结果。

如果想要支持更低版本的浏览器，可以在 `package.json` 中配置 `browserslist`, 这样做的好处是，很多 `loader` 可以都会有类似 `browserslist` 的配置，如果我们写在 `package.json` 中，则可以保证所有 `loader` 都使用同样的配置。

``` json
// package.json
{
  "browserslist": [
    "last 3 versions",
    "Android >= 4.1",
    "ios >= 8"
  ]
}
```

这样写的话，你会发现生成的 css 代码又多了一些兼容性的代码。
## CSS In Module
我们可以在 `css-loader` 中开启 css 模块化配置：
``` js 
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          },
          "sass-loader",
          "postcss-loader"
        ]
      }
    ]
  }
```
然后在 `index.js` 中尝试使用：
``` js
import styles from "./index.scss";

const h1Element = document.createElement("h1");
h1Element.innerText = "hello css";
// index.scss 中定义了一个 customText class.
h1Element.classList.add(styles.customText);
document.body.appendChild(h1Element);
```
## 生成单独的 CSS 文件
在开发环境中，我们可以使用 `style-lodaer`, 不过在生产环境中，我们一般会将 css 单独打包，这就需要用到 `mini-css-extract-plugin`
``` js
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          },
          {
            loader: "sass-loader"
          },
          "postcss-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};

``` 