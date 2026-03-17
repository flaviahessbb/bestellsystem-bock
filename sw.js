// Service Worker Bock Bestellsystem
const CACHE_VERSION = 'bock-v1773775064956';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  // Kein Caching - immer frisch laden
  e.respondWith(fetch(e.request));
});