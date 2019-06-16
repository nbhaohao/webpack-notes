// import(/*webpackChunkName: "lodash"*/"lodash").then(module => {
//   console.log("_", module.default.join([1, 2, 3], "***"));
// });
import _ from "lodash";
import $ from "jquery";

const element = document.createElement("div");
element.innerHTML = _.join(["hello", "world", "zzh"], "---");
document.body.appendChild(element);
