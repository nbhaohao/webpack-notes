const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  entry: {
    main: "./src/index",
    list: "./src/list"
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      chunks: ["main"]
    }),
    new HtmlWebpackPlugin({
      filename: "list.html",
      chunks: ["list"]
    }),
    new CleanWebpackPlugin()
  ]
};
