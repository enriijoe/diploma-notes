import { Bind, Consume } from 'dreamstate';
import * as React from 'react';
import { PureComponent } from 'react';

// View
import { HeaderBar } from '@View/components/HeaderBar';
import { RegisterForm } from '@View/components/RegisterForm';

// Data.
import { authContextManager } from '@Data/store';

import './RegisterPage.Style.scss';

@Consume(authContextManager)
export class RegisterPage extends PureComponent {

  @Bind()
  onRegister(email, password, passwordConfirmation) {
    console.error(email, password, passwordConfirmation);

    const { authActions: { register } } = this.props;

    register(email, password);
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
