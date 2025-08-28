self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('mifama-store').then((cache) => cache.addAll([
      '/MIFAMA/',
      '/MIFAMA/index.html',
      '/MIFAMA/logo.png'
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
