console.log("hello world");

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(registration => {
        console.log("Service-worker registered");
      })
      .catch(error => {
        console.log("Service-worker register error");
      });
  });
}
