export const createButton = () => {
  const currentBtn = document.querySelector("#btn");
  const btn = currentBtn || document.createElement("button");
  btn.id = "btn";
  btn.innerHTML = "新增";
  if (!currentBtn) {
    document.body.appendChild(btn);
  }
  btn.onclick = () => {
    const div = document.createElement("div");
    div.innerHTML = "item";
    document.body.appendChild(div);
  };
};
