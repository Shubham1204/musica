const staticMusic = "music-site-v1";
const assets = [
  "/",
  "/index.html",
  "/styles.css",
  "/css/blog.css",
  "/image/banner.jpg",
  "/image/bang-bang.jpg",
  "/image/faded.jpg",
  "/image/about.jpg",
  "/image/na-na.jpg",
  "/image/vedalam.jpg",
  "/image/galti.jpg",
  "/image/coffee8.jpg",
  "/image/coffee9.jpg"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticMusic).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
