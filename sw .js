// Service worker mínimo: permite instalar el CRM como app. No guarda nada en caché, así siempre ves la versión más reciente.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) { e.respondWith(fetch(e.request)); });
