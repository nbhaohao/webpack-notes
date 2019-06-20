import axios from "axios";

axios.get("/api/react/api/header.json").then(data => {
  console.log("data", data.data);
});

console.log("hello world");
