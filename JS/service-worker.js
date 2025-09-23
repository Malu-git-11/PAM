const CACHE_NAME = 'pwa-cache-v1';
const FILES_TO_CACHE = [
  '/index.html',
  '/app.js',
  '/manifest.json',
  '/web-app-manifest-192x192.png',
  '/web-app-manifest-512x512.png',
];

// Instalando o Service Worker e armazenando os arquivos no cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Service Worker: Cache aberto');
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

// Ativando o Service Worker
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Interceptando as requisições e retornando os arquivos do cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Retorna a resposta do cache ou faz uma requisição de rede
      return cachedResponse || fetch(event.request);
    })
  );
});