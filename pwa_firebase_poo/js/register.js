import { authService } from './app.js';
document.getElementById('registerForm').addEventListener('submit', async (e)=>{preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const msg = document.getElementById('msg');

  msg.textContent = '';

  const res = await authService.register(email,password);

  if(res.success){
    window.location.href = '/profile.html';
  } else {
    msg.textContent = res.error;
  }
});
