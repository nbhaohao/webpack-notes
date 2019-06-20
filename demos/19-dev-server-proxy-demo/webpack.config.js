const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devServer: {
    open: true,
    port: 8081,
    proxy: {
      "/api": {
        target: "http://www.dell-lee.com",
        pathRewrite: { "^/api": "" },
        changeOrigin: true // 这个比较重要，不配置的话会导致请求失败
      }
    }
  },
  plugins: [new HtmlWebpackPlugin()]
};
