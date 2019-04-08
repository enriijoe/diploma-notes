import { Bind } from "dreamstate";
import * as React from 'react';
import { PureComponent } from 'react';

// View
import { HeaderBar } from '@View/components/HeaderBar';
import { LoginForm } from "@View/components/LoginForm";

import './LoginPage.Style.scss';

export class LoginPage extends PureComponent {

  @Bind()
  onLogin(login, password) {
    console.error(login, password);
  }

  render() {

    return (
      <div className={'login-page'}>

        <HeaderBar/>

        <div className={'login-page-root'}>
          <LoginForm onLogin={this.onLogin}/>
        </div>

      </div>
    );

  }

}
