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
createButton("按钮2").addEventListener("click", () => {
  import(
    /* webpackPrefetch: true */ /* webpackChunkName: "jquery-lazy" */ "jquery"
  ).then(({ default: $ }) => {
    console.log("$", $);
  });
});
