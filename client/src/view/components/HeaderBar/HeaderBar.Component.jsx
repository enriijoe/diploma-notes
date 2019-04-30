import { Bind, Consume } from 'dreamstate';
import * as React from 'react';
import { PureComponent } from 'react';

// View
import { Button } from 'react-bootstrap';

// Data.
import { authContextManager, routerContextManager } from '@Data/store';

import './HeaderBar.Style.scss';

@Consume(authContextManager, routerContextManager)
export class HeaderBar extends PureComponent {

  @Bind()
  onLoginNavigate() {

    const { routingActions: { push } } = this.props;

    push('/login');
  }

  @Bind()
  onRegisterNavigate() {

    const { routingActions: { push } } = this.props;

    push('/register');
  }

  @Bind()
  onHomeNavigate() {

    const { routingActions: { push } } = this.props;

    push('/home');
  }

  renderAuthorisedHeader() {

    const { authActions: { logout }, authState: { user } } = this.props;

    return (
      <>

        <div role={'button'} className={'header-bar-settings'}>
          SET
        </div>

        <div className={'header-bar-username'}>
          <span>
            { user ? user.email : '...' }
          </span>
        </div>

        <Button className={'logout-button'} variant={'light'} onClick={logout}>
          Logout
        </Button>
      </>
    );
  }

  renderUnauthorisedHeader() {

    return (
      <>
        <Button className={'login-button'} variant={'light'} onClick={this.onLoginNavigate}>
          Login
        </Button>

        <Button className={'register-button'} variant={'light'} onClick={this.onRegisterNavigate}>
          Register
        </Button>
      </>
    );
  }

  render() {

    const { authState: { isAuthorised } } = this.props;

    return (
      <header className={'header-bar'}>

        <div className={'header-bar-logo'} onClick={this.onHomeNavigate}>
          <span>
            Notes
          </span>
        </div>

        <div className={'header-bar-control'}>
          { isAuthorised ? this.renderAuthorisedHeader() : this.renderUnauthorisedHeader() }
        </div>

      </header>
    );
  }

}
