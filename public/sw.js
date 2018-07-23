self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open("test-cache").then(function(cache) {
      console.log("Opened cache", cache);
    })
  );
});
