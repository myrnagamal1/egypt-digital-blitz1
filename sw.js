self.addEventListener('push', function(event) {
  var data = {};
  try { data = event.data.json(); } catch(e) {}
  var title = data.title || 'Blitz Notification';
  var options = {
    body: data.body || '',
    icon: '/egypt-digital-blitz1/favicon.ico',
    badge: '/egypt-digital-blitz1/favicon.ico',
    tag: data.tag || 'blitz',
    renotify: true,
    data: data
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(clients.openWindow('https://myrnagamal1.github.io/egypt-digital-blitz1/'));
});
