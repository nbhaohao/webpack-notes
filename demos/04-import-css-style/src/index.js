import styles from "./index.scss";

const h1Element = document.createElement("h1");
h1Element.innerText = "hello css";
h1Element.classList.add(styles.customText);
const h2Element = document.createElement("h2");
h2Element.innerText = "My color from scss";
h2Element.style = `color: ${styles.themeColor}`;
document.body.appendChild(h2Element);
document.body.appendChild(h1Element);
