import { Bind, Consume } from 'dreamstate';
import * as React from 'react';
import { PureComponent } from 'react';

// View
import { Button } from 'react-bootstrap';
import { Loader } from '@View/components/Loader';

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

    const { routingActions: { push }, authState: { isAuthorised } } = this.props;

    if (!isAuthorised) {
      push('/home');
    }
  }

  renderAuthorisedHeader() {

    const { authActions: { logout }, authState: { user, isAuthorising } } = this.props;

    return (
      <>

        <div className={'header-bar-username'}>
          <span>
            { isAuthorising || !user ? <Loader width={16} height={16}/> : user.email }
          </span>
        </div>

        <Button className={'logout-button'} variant={'light'} onClick={logout}>
          Logout
        </Button>

      </>
    );
  }

  renderUnauthorisedHeader() {

    const { routingActions } = this.props;

    const location = routingActions.getCurrentLocation();

    return (
      <>
        {
          location === '/login'
            ? null
            :
              <Button className={'login-button'} variant={'light'} onClick={this.onLoginNavigate}>
                Login
              </Button>
        }

        {
          location === '/register'
            ? null
            :
              <Button className={'register-button'} variant={'light'} onClick={this.onRegisterNavigate}>
                Register
              </Button>
        }
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
