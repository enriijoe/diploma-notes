import * as React from 'react';
import { PureComponent } from 'react';

// View
import { HeaderBar } from '@View/components/HeaderBar';
import { LoginForm } from "@View/components/LoginForm";

import './LoginPage.Style.scss';

export class LoginPage extends PureComponent {

  render() {

    return (
      <div className={'login-page'}>

        <HeaderBar/>

        <div className={'root'}>
          <LoginForm/>
        </div>

      </div>
    );

  }

}
