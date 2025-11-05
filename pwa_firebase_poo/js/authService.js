import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.24.0/firebase-auth.js';

export class AuthService {
  constructor(auth) {
    this.auth = auth;
  }

  async register(email, password) {
    try {
      const userCred = await createUserWithEmailAndPassword(this.auth, email, password);
      return { success: true, user: userCred.user };
    } catch (err) {
      return { success: false, error: err.message || err.toString() };
    }
  }

  async login(email, password) {
    try {
      const userCred = await signInWithEmailAndPassword(this.auth, email, password);
      return { success: true, user: userCred.user };
    } catch (err) {
      return { success: false, error: err.message || err.toString() };
    }
  }

  async logout() {
    try {
      await signOut(this.auth);
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message || err.toString() };
    }
  }

  onAuthState(callback) {
    return onAuthStateChanged(this.auth, callback);
  }
}
