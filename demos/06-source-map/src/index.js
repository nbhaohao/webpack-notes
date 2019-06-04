window.onerror = function(message, source, lineno, colno, error) {
  console.log(`message: ${message}`);
  console.log(`source: ${source}`);
  console.log(`lineno: ${lineno}`);
  console.log(`colno: ${colno}`);
  console.log(`error: ${error}`);
};

const test = () => {
  consoel.log("hello world");
};
test();
