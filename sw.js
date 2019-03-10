const version = 2;

self.addEventListener('install', function(event) {
  console.log('SW v%s installed at ', version, new Date().toLocaleDateString());
  self.skipWaiting();
});

self.addEventListener('active', function(event) {
  console.log('SW v%s activated at ', version, new Date().toLocaleDateString());
});

self.addEventListener('fetch', function (event) {
  // handle ofline functionality
  if (!navigator.onLine) {
    event.respondWith(new Response('<h1> offline:( </h1>', {headers: {'Content-Type' : 'text/html'}} ) );
  } else {
    console.log(event.request.url);
    event.respondWith(fetch(event.request));
  } 
});
