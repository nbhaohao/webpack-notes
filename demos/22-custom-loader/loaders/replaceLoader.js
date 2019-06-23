module.exports = function(source) {
  // console.log("options", this.query); 获取 loader 的 options
  const result = source.replace("hello world", "world hello");
  // 使用 callback 传递更多的数据出去
  // this.callback(null, result);
  // return result
  return result;
  // 异步返回内容
  // const callback = this.async();
  // setTimeout(() => {
  //   callback(null, result);
  // }, 1000);
};
