/*
    This code containt the service Worker implementation coded by Alexis Ange Dauli
    We install service worker to save caches that can be used offline 
*/

const version = 'v1';

// lets add ressources that we want to cache
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(version)
        .then(function(cache) {
            return cache.addAll([
                'content/offline-embeded.html',
                'content/ohno.png'
            ]);
        })
    )
});

// uses of caches that has been saved in browser
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(res) {
            if(res) {
                return res;
            }
            
            if(!navigator.onLine) {
                return caches.match(new Request('content/offline-embeded.html'));
            }
            
            return fetch(event.request);
        })
    )
});
