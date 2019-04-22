import { DatabaseService } from '@Data/services';

export class AuthService {

  databaseService = DatabaseService.getInstance();

  constructor() {
    window.temp = this;
  }

  isLoggedIn() {
    return this.databaseService.auth.currentUser !== null;
  }

  getCurrentUser() {
    return this.databaseService.auth.currentUser;
  }

  login(email, password) {
    return this.databaseService.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.databaseService.auth.signOut();
  }

  listenAuthStatus(listener) {
    return this.databaseService.auth.onAuthStateChanged(listener);
  }

}
