# 01-quick-start

## 安装

使用 `npm install webpack webpack-cli -D` 来安装 `webpack`, `webpack` 是 `webpack` 的核心库，而 `webpack-cli` 则允许我们使用终端命令的方式来使用 `webpack`.

## npm script

我们在 `package.json` 中使用自定义 `npm script`. 因为我们并不是全局安装 `webpack`, 所以无法直接在终端中使用 `webpack`, 而 `npm script` 则可以在执行的时候，将 `node_modules/.bin` 下面的文件加入到命令全局作用域中。

```json
"scripts": {
    "webpack": "webpack"
},
```

## 使用

在 `src` 目录下新建 `index.html`, `index.js`, `components/Headers.js`, 在 `index.js` 中引入 `Header.js` 这个模块，`webpack` 有默认配置，所以我们可以直接运行 `npm run webpack`.

## 结果

我们在 `dist` 目录下输出了 `main.js` 文件，可以在 `src/index.html` 中引入 `main.js` 文件，然后在浏览器中预览效果。
