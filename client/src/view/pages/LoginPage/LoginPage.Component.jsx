import { Bind, Consume } from 'dreamstate';
import * as React from 'react';
import { PureComponent } from 'react';

// View.
import { HeaderBar } from '@View/components/HeaderBar';
import { LoginForm } from '@View/components/LoginForm';

// Data.
import { authContextManager } from '@Data/store';

import './LoginPage.Style.scss';

@Consume(authContextManager)
export class LoginPage extends PureComponent {

  @Bind()
  onLogin(email, password) {

    const { authActions: { login } } = this.props;

    login(email, password)
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
