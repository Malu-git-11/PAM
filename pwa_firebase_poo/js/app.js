if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(err=>console.error('SW erro',err));
}


import { AuthService } from './authService.js';

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.24.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.24.0/firebase-auth.js';
import { firebaseConfig } from './firebase-config.js';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const authService = new AuthService(auth);