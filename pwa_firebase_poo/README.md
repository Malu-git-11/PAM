PWA Firebase Auth (JavaScript, POO)

O que tem aqui:
- PWA (manifest + service worker)
- Telas: index, register, login, profile
- Autenticação Firebase (Email/Password) usando classe AuthService (POO)
- Arquivos JS usam módulos (type="module")

Passos para usar:
1. Crie um projeto no Firebase Console (https://console.firebase.google.com).
2. Habilite Authentication -> Sign-in method -> Email/Password.
3. Renomeie js/firebase-config.example.js para js/firebase-config.js e cole suas credenciais.
4. Hospede como site estático (GitHub Pages é suficiente).
5. Para GitHub Pages: crie repo, faça push dos arquivos e ative Pages (branch main, folder /).
6. Depois de deploy, abra o site e teste cadastro/login.

Observações de segurança:
- Não comite chaves sensíveis em repositórios públicos. Use repos privados ou variáveis de ambiente para CI se necessário.
