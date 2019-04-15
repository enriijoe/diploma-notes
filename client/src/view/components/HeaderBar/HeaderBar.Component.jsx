import { Bind, Consume } from "dreamstate";
import * as React from "react";
import { PureComponent } from "react";

//View
import { Button } from "react-bootstrap";

// Data.
import { authContextManager, routerContextManager } from "@Data/store";

import "./HeaderBar.Style.scss";

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
        <Button variant={'outline-light'}>
          { user.username }
        </Button>

        <Button variant={'outline-light'} onClick={logout}>
          Logout
        </Button>
      </>
    );
  }

  renderUnauthorisedHeader() {

    return (
      <>
        <Button variant={'outline-light'} onClick={this.onLoginNavigate}>
          Login
        </Button>

        <Button variant={'outline-light'} onClick={this.onRegisterNavigate}>
          Register
        </Button>
      </>
    );
  }

  render () {

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
