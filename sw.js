const version = 1;

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(version)
        .then(function(cache) {
            return cache.addAll([
                '/offline/offline-embede.html',
                'offline/ohno.png'
            ]);
        })
    )
});
