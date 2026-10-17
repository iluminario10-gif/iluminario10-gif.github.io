const CACHE = 'patinhas-v10';
const ARQUIVOS = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const mesmaOrigem = new URL(req.url).origin === self.location.origin;

  if (mesmaOrigem) {
    // Primeiro a rede: quando o app é atualizado, a versão nova aparece na próxima abertura.
    // Sem rede, usa a cópia guardada.
    e.respondWith(
      fetch(req).then((res) => {
        if (res.ok) caches.open(CACHE).then((c) => c.put(req, res.clone()));
        return res;
      }).catch(() => caches.match(req).then((c) => c || caches.match('./index.html')))
    );
  } else {
    // Arquivos de outros sites (fontes): primeiro o cache, para abrir rápido.
    e.respondWith(
      caches.match(req).then((c) => c || fetch(req).then((res) => {
        caches.open(CACHE).then((k) => k.put(req, res.clone()));
        return res;
      }))
    );
  }
});
