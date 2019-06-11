const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                useBuiltIns: "usage",
                corejs: 3
              }
            ],
            "@babel/preset-react"
          ]
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './index.html'
  })]
};
