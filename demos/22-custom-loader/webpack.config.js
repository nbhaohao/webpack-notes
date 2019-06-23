const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js"
  },
  // 表示去哪些目录寻找 loader, 这样我们就可以写 loader 的名字了，而不用每次写路径
  resolveLoader: {
    modules: ["node_modules", "./loaders"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            // loader: path.resolve(__dirname, "loaders/replaceLoader"),
            loader: "replaceLoader",
            options: {
              name: "123"
            }
          }
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  }
};
