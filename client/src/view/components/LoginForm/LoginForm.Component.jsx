import * as React from "react";
import { Component } from "react";

import './LoginForm.Style.scss';

export class LoginForm extends Component {

  state = {
    login: '',
    password: ''
  };

  constructor(props) {
    super(props);

    this.onLoginChange = this.onLoginChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  onLoginChange(event) {
    this.setState({
      login: event.target.value
    });
  }

  onPasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  onLogin() {
    this.setState({
      login: '',
      password: ''
    })
  }

  render() {

    const { login, password } = this.state;

    return (
      <div className={'login-form'}>

        <div className={'input-group'}>
          <span>Login </span>
          <input value={login} onChange={this.onLoginChange} type={'text'} name={'Username'} />
        </div>

        <div className={'input-group'}>
          <span>Password</span>
          <input value={password} onChange={this.onPasswordChange} type={'password'} name={'Password'} />
        </div>

        <button onClick={this.onLogin}>
          Submit
        </button>

      </div>
    );
  }

}
