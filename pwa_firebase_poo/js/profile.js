import { authService } from './app.js';
const userInfo = document.getElementById('userInfo');
const logoutBtn = document.getElementById('logoutBtn');

authService.onAuthState((user) => {
  if (user) {
    userInfo.innerHTML = `<p>Email: ${user.email}</p><p>UID: ${user.uid}</p>`;
  } else {
    window.location.href = '/login.html';
  }
});

logoutBtn.addEventListener('click', async () => {
  await authService.logout();
  window.location.href = '/login.html';
});
