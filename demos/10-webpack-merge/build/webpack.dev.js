const common = require("./webpack.common");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const dev = {
  devServer: {
    open: true
  },
  plugins: [new HtmlWebpackPlugin()]
};

module.exports = merge(common, dev);
