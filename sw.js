/* 

/*
    This code containt the service Worker implementation coded by Alexis Ange Dauli
    We install service worker to save caches that can be used offline 
*/

/*
** cache APIs help us to add content and to remove it whenever 
** we want to


const version = 'v2';

// lets add ressources that we want to cache
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(version)
        .then(function(cache) {
            return cache.addAll([
                // we can add more ressources here as available
                'content/offline-embeded.html',
                'content/ohno.png'
            ]);
        })
    )
});

// delete the old caches
self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys()
        .then(function(keys) {
            return Promise.all(keys.filter(function(key) {
                return key !== version;
            }).map( function (key) {
                return caches.delete(key);
            }));
        })
    );
});

// lets use our cached ressources
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(res) {
            if (res) {
                return res;
            }

            if (!navigator.onLine) {
                return caches.match(new Request('content/offline-embeded.html'));
            }

            return fetchAndUpdate(event.request);
        })
    )
});

  
** let user add content to the SW via caches 
** so any link that user visit will be stores in cache to use in offline
** but when user try to access a link that wasn't navigate before in online
** the standard offline content will be dispalyed.

function fetchAndUpdate(request) {
    return fetch(request)
    .then( function(res) {
        if (res) {
            return caches.open(version)
            .then(function(cache) {
                return cache.push(request, res.clone())
                .then( function() {
                    return res;
                });
            });
        }
    });
}

*/
