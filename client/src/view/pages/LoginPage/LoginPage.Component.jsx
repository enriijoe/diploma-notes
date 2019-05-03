import { Bind, Consume } from 'dreamstate';
import * as React from 'react';
import { PureComponent } from 'react';
import { CSSTransition } from 'react-transition-group';

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

        <CSSTransition in={true} appear={true} timeout={250} classNames={'fade-in'}>

          <div className={'login-page-root'}>
            <LoginForm onLogin={this.onLogin}/>
          </div>

        </CSSTransition>

      </div>
    );

  }

}
