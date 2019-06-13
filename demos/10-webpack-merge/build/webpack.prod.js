const merge = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common");

const prod = {
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "prod.js"
  }
};

module.exports = merge(common, prod);
