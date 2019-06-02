module.exports = {
  module: {
    rules: [
      {
        test: /\.jpg$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "static",
            limit: 10240
          }
        }
      }
    ]
  }
};
