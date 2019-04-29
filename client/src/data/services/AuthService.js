import { DatabaseService } from '@Data/services';

export class AuthService {

  databaseService = DatabaseService.getInstance();

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

  register(email, password) {
    return this.databaseService.auth.createUserWithEmailAndPassword(email, password);
  }

  listenAuthStatus(listener) {
    return this.databaseService.auth.onAuthStateChanged(listener);
  }

}
