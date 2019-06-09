const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  devServer: {
    contentBase: "./dist",
    open: true,
    proxy: {
      "/api": {
        target: "https://www.baidu.com",
        pathRewrite: { "^/api": "" },
        changeOrigin: true
      }
    }
  },
  plugins: [new HtmlWebpackPlugin()]
};
