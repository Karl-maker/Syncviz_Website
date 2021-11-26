self.addEventListener("install", (e) => {
  console.log("Installed");
  e.waitUntil(
    caches.open("static").then((cache) => {
      return cache.addAll([
        "./",
        "./contact.html",
        "./getting-started.html",
        "./learn-more.html",
        "./services.html",
        "./showcase.html",
        "./js/home.js",
        "./js/body-content.js",
        "./js/navigation-bar.js",
        "./js/showcase.js",
        "./js/validation.js",
        "./css/body.css",
        "./css/contact.css",
        "./css/footer.css",
        "./css/getting-started.css",
        "./css/header.css",
        "./css/home.css",
        "./css/learn-more.css",
        "./css/navigation.css",
        "./css/services.css",
        "./css/showcase.css",
        "./img/logos/logo192.png",
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    cache.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
//Cache resources
