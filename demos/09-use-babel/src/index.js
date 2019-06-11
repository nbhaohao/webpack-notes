import "./app";

const a = "2";
console.log("a", a);
const b = () => {};
const c = new Promise((resolve, reject) => {
  resolve();
});
console.log("Promise", Promise, new Promise(() => {}));
