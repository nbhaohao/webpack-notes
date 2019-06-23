class CopyRightWebpackPlugin {
  constructor(options) {
    console.log("插件的 options", options);
    console.log("插件被使用了");
  }

  // compiler 是 webpack 的实例
  apply(compiler) {
    compiler.hooks.emit.tapAsync(
      "CopyRightWebpackPlugin",
      (compilation, cb) => {
        compilation.assets["copyright.text"] = {
          source: () => "copyright by zzh",
          size: () => 21
        };
        cb();
      }
    );
    compiler.hooks.compile.tap("CopyRightWebpackPlugin", compilation => {
      console.log("compile");
    });
  }
}

module.exports = CopyRightWebpackPlugin;
