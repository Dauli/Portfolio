const version = 2;

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(version)
        .then(function(cache) {
            return cache.addAll([
                '/content/offline-embeded.html'
            ]);
        })
    )
});
