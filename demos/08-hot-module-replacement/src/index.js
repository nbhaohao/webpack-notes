import "./index.css";
import { createButton } from "./button";

createButton();

module.hot.accept("./button", () => {
  createButton();
});
