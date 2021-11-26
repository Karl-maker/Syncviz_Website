if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    .then((registration) => {
      console.log("SW Registered");
      console.log(registration);
    })
    .catch((e) => {
      console.log("SW Registration Failed");
      console.log(e);
    });
}
