import { Bind } from "dreamstate";
import * as React from 'react';
import { PureComponent } from 'react';

// View
import { HeaderBar } from '@View/components/HeaderBar';
import { RegisterForm } from "@View/components/RegisterForm";

import './RegisterPage.Style.scss';

export class RegisterPage extends PureComponent {

    @Bind()
    onRegister(login, email, password, passwordConfirmation) {
        console.error(login, email, password, passwordConfirmation);
    }

  render() {

    return (
      <div className={'register-page'}>

        <HeaderBar/>

        <div className={'register-page-root'}>
          <RegisterForm onRegister={this.onRegister}/>
        </div>

      </div>
    );

  }

}
