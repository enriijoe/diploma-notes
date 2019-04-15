import { Bind, ContextManager } from "dreamstate";
import * as React from 'react';

// Data.
import { routerContextManager } from "@Data/store";

// Context store creation.
export class AuthContextManager extends ContextManager {

  context = {
    authActions: {
      login: this.login,
      logout: this.logout
    },
    authState: {
      isAuthorised: false,
      isAuthorising: false,
      user: null
    }
  };

  setState = ContextManager.getSetter(this, 'authState');

  @Bind()
  login(username, password) {

    if (username === 'admin' && password === 'admin') {
      this.setState({
        isAuthorised: true,
        user: { username }
      });

      routerContextManager.replace('/notes');
    } else {
      console.error('Authorisation failed :( Wrong credentials: ', username, password);
    }
  }

  @Bind()
  logout() {

    this.setState({
      isAuthorised: false,
      user: null
    });
  }

}
