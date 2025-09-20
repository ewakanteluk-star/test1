const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
  '/',
  '/static/style.css',
  '/static/main.js',
  '/static/icon.png'
];

// Instalacja i cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
          .then(cache => cache.addAll(urlsToCache))
  );
});

// Pobieranie zasobów
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
          .then(response => response || fetch(event.request))
  );
});