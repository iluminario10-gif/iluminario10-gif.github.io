// Meus apps — service worker único do endereço.
// Cobre o menu, o Patinhas, a Maison e a Listas. Ao mudar arquivos, aumente VERSAO.
const VERSAO = 'meus-apps-v3';
const ARQUIVOS = [
  './', './index.html', './patinhas.html', './maison.html', './listas.html', './hoje.html', './manifest.webmanifest',
  './icon-180.png', './icon-192.png', './icon-512.png',
  './maison-icon-180.png', './maison-icon-192.png', './maison-icon-512.png',
  './listas-icon-180.png', './listas-icon-192.png', './listas-icon-512.png',
  './hub-icon-180.png', './hub-icon-192.png', './hub-icon-512.png',
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSAO).then((c) => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((ks) => Promise.all(ks.filter((k) => k !== VERSAO).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const mesmaOrigem = new URL(req.url).origin === self.location.origin;

  if (mesmaOrigem) {
    // Primeiro a rede: a versão nova aparece na próxima abertura. Sem rede, usa a cópia guardada.
    e.respondWith(
      fetch(req).then((res) => {
        if (res.ok) caches.open(VERSAO).then((c) => c.put(req, res.clone()));
        return res;
      }).catch(() => caches.match(req).then((c) => c || caches.match('./index.html')))
    );
  } else {
    // Fontes e outros arquivos externos: cache primeiro.
    e.respondWith(
      caches.match(req).then((c) => c || fetch(req).then((res) => {
        caches.open(VERSAO).then((k) => k.put(req, res.clone()));
        return res;
      }))
    );
  }
});
