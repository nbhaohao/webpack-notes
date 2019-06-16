import "./index.css";
import "./style1.css";
console.log("hello world");
const createButton = buttonName => {
  const button = document.createElement("button");
  button.innerHTML = buttonName;
  document.body.appendChild(button);
  return button;
};
createButton("按钮1").addEventListener("click", () => {
  import(
    /* webpackPrefetch: true */ /* webpackChunkName: "lodash-lazy" */ "lodash"
  ).then(({ default: _ }) => {
    console.log("_", _);
  });
});
