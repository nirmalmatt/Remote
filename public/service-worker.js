importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

console.log("Service Worker running")
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'html' || request.destination === 'style',
    new workbox.startegies.StaleWhileRevalidate()
  );