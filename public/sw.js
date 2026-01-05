// Service Worker for caching brandfetch icons with longer TTL
// This improves cache efficiency for third-party resources we can't control

const CACHE_NAME = 'brandfetch-icons-v1';
const CACHE_DURATION = 31536000000; // 1 year in milliseconds
const BRANDFETCH_DOMAIN = 'cdn.brandfetch.io';

// Install event - cache brandfetch icons
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
  return self.clients.claim();
});

// Fetch event - intercept brandfetch requests and cache with longer TTL
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Only handle brandfetch icon requests
  if (url.hostname === BRANDFETCH_DOMAIN && url.pathname.includes('/icon')) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((cachedResponse) => {
          // Check if cached response is still valid (within 1 year)
          if (cachedResponse) {
            const cachedDate = cachedResponse.headers.get('sw-cached-date');
            if (cachedDate) {
              const age = Date.now() - parseInt(cachedDate, 10);
              if (age < CACHE_DURATION) {
                // Return cached response if still valid
                return cachedResponse;
              }
            }
          }
          
          // Fetch fresh response
          return fetch(event.request).then((response) => {
            // Clone response to cache
            const responseToCache = response.clone();
            
            // Add custom header with cache date
            const headers = new Headers(responseToCache.headers);
            headers.set('sw-cached-date', Date.now().toString());
            headers.set('sw-cache-duration', CACHE_DURATION.toString());
            
            // Create new response with custom headers
            const modifiedResponse = new Response(responseToCache.body, {
              status: responseToCache.status,
              statusText: responseToCache.statusText,
              headers: headers,
            });
            
            // Cache the modified response
            cache.put(event.request, modifiedResponse.clone());
            
            return response;
          }).catch(() => {
            // If fetch fails, return cached response if available
            if (cachedResponse) {
              return cachedResponse;
            }
            throw new Error('Network error and no cache available');
          });
        });
      })
    );
  }
  
  // For non-brandfetch requests, use network-first strategy
  return;
});

