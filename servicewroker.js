var staticCacheName = "pwa"

self.addEventListener("install",function(e){
    e.waitUntil(
        caches.open(staticCacheName).then(function(cache){
            return cache.addAll(["/"])
        })
    )
})

self.addEventListener("fetch",functoin(event){
    console.log(event.request.url);
    event.respondWith(
        caches.match(event.request).then(function(response){
            return responce || fetch(event.request)
            });
         );
     });