const version = 'v1';

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(version)
        .then(function(cache) {
            return cache.addAll([
                '/content/offline-embeded.html',
                'content/ohno.png'
            ]);
        })
    )
});
