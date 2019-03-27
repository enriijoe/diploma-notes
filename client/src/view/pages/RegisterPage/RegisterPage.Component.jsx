import * as React from 'react';
import { PureComponent } from 'react';

// View
import { HeaderBar } from '@View/components/HeaderBar';
import { RegisterForm } from "@View/components/RegisterForm";

import './RegisterPage.Style.scss';

export class RegisterPage extends PureComponent {

  render() {

    return (
      <div className={'register-page'}>

        <HeaderBar/>

        <div className={'root'}>
          <RegisterForm/>
        </div>

      </div>
    );

  }

}
