const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devServer: {
    hot: true,
    hotOnly: true
  },
  plugins: [new HtmlWebpackPlugin()]
};
