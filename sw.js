const C="te-regalo-v3";
self.addEventListener("install",e=>e.waitUntil(caches.open(C).then(c=>c.addAll([
  "./","./index.html","./manifest.json","./icons/apple-touch-icon.png","./icons/icon-192.png","./icons/icon-512.png"
]))));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
