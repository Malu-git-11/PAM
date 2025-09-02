const cache_name = 'my-cache-v1';
const urlToCache = [
    '/',
    '/index.html',
    '/main.js'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cache_name).then((cache) => {
            console.log('Opened cache');
            return cache.addAll(urlToCache);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

self.addEventListener('activate', (event) => {
    const cacheWhitelist = [cache_name];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
