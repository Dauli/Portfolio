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
    event.respondWith(new Response('<div style="backgroundColor:lightGray"> <h1>Offline:( </h1><p>Please check your internet connection and come back later!</p></div>', 
    {headers: {'Content-Type' : 'text/html'}} ) );
  } else {
    console.log(event.request.url);
    event.respondWith(fetch(event.request));
  } 
});
