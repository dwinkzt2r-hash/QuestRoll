const V='questroll-v1',F=['./','index.html','manifest.json','favicon.svg','icons/icon-192.png','icons/icon-512.png','icons/maskable-512.png','icons/apple-touch-icon.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(V).then(c=>c.addAll(F)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET'||new URL(r.url).origin!==location.origin)return;
e.respondWith(caches.open(V).then(async c=>{const m=await c.match(r,{ignoreSearch:true});
const n=fetch(r).then(x=>{if(x.ok)c.put(r,x.clone());return x}).catch(()=>m||c.match('index.html'));return m||n}))});
