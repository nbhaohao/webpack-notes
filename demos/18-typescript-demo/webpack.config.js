const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          // {
          //   loader: "babel-loader",
          //   options: {
          //     presets: [
          //       [
          //         "@babel/preset-env",
          //         {
          //           useBuiltIns: "usage",
          //           corejs: 3
          //         }
          //       ]
          //     ]
          //   }
          // },
          "ts-loader"
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin()]
};
