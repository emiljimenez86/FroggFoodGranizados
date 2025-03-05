self.addEventListener("install", (event) => {
    console.log("Service Worker instalado");
    event.waitUntil(
        caches.open("frogg-food-cache").then((cache) => {
            return cache.addAll([
                "./index.html",
                "./styles.css",
                "./imagenes/icono-192x192.png"
            ]);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
