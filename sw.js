const CACHE_NAME = 'techshop-v1';
const OFFLINE_URL = '/offline.html';

self.addEventListener('install', event => {
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', event => {
    if (event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request).catch(() => {
                return new Response(
                    '<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>TechShop UZ - Offline</title><style>body{font-family:sans-serif;background:#0F0F1A;color:#E8E8F0;display:flex;align-items:center;justify-content:center;min-height:100vh;text-align:center}h1{color:#6C63FF}p{color:#8888AA}</style></head><body><div><h1>📱 TechShop UZ</h1><h2>Internet aloqasi yo\'q</h2><p>Iltimos, internet ulanishingizni tekshiring va qaytadan urinib ko\'ring.</p></div></body></html>',
                    { headers: { 'Content-Type': 'text/html' } }
                );
            })
        );
    }
});
