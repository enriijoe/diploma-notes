import { Bind, ContextManager } from 'dreamstate';
import * as React from 'react';

// Data.
import { routerContextManager } from '@Data/store';
import { AuthService } from '@Data/services';

// Context store creation.
export class AuthContextManager extends ContextManager {

  context = {
    authActions: {
      login: this.login,
      logout: this.logout,
      register: this.register
    },
    authState: {
      isAuthorised: false,
      isAuthorising: false,
      user: null
    }
  };

  setState = ContextManager.getSetter(this, 'authState');

  authService = new AuthService();

  constructor() {
    super();

    this.context.authState.isAuthorised = Boolean(localStorage.getItem('uid'));
    this.authService.listenAuthStatus(this.onAuthStatusChanged);
  }

  @Bind()
  async login(email, password) {
    await this.authService.login(email, password);
    routerContextManager.replace('/notes');
  }

  @Bind()
  logout() {
    this.authService.logout();
  }

  @Bind()
  async register(email, password) {
    await this.authService.register(email, password);
    routerContextManager.replace('/notes');
  }

  @Bind()
  onAuthStatusChanged(user) {

    localStorage.setItem('uid', user ? user.uid : null);

    this.setState({
      isAuthorised: user !== null,
      user
    });
  }

}
