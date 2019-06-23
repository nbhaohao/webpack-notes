const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  externals: ["lodash"],
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "library.js",
    library: "library", // 让库支持 script 标签引入
    libraryTarget: "umd" // 让库支持模块化
  }
};