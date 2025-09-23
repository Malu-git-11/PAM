
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then((registration) => {
          console.log('Service Worker registrado com sucesso:', registration);
        })
        .catch((error) => {
          console.log('Falha ao registrar o Service Worker:', error);
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');
  if (hamburger && menu) {
    hamburger.addEventListener('click', function() {
      menu.classList.toggle('active');
    });
  }
});