const HtmlWebpackPlugin = require("html-webpack-plugin");
const { GenerateSW } = require("workbox-webpack-plugin");
module.exports = {
  plugins: [
    new HtmlWebpackPlugin(),
    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    })
  ]
};
