fetch("/api", {
  method: "GET"
})
  .then(response => {
    return response.text();
  })
  .then(data => {
    console.log("baidu-body", data);
  });
