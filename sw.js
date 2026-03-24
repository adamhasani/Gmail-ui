const CACHE_NAME = 'bespoke-mail-v2';

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
  // Pass-through fetch: Syarat minimal biar PWA jalan tanpa ngerusak API Gmail
  e.respondWith(fetch(e.request).catch(() => new Response('Offline')));
});
