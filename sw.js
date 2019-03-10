self.addEventListener('install', function(event) {
  console.log('SW installed at ', new Date().toLocaleDateString());
});

self.addEventListener('active', function(event) {
  console.log('SW activated at ', new Date().toLocaleDateString());
});
