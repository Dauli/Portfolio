const version = 1;

self.addEventListener('install', function(event) {
  console.log('SW v%s installed at ', version, new Date().toLocaleDateString());
});

self.addEventListener('active', function(event) {
  console.log('SW v%s activated at ', version, new Date().toLocaleDateString());
});
