if ('serviceWorker' in navigator) {
    console.log("main.js => Vamos registrar o service worker!!!");
    navigator.serviceWorker.register('/sw.js')
        .then(registration => {
            console.log("main.js => Service Worker Registrado com Sucesso");
            console.dir(registration);
        })
        .catch(error => {
            console.log("main.js => Erro ao registrar Service Worker");
            console.dir(error);
        });
}