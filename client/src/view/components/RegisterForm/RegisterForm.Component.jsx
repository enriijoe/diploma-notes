import * as React from "react";
import { Component } from "react";

import './RegisterForm.Style.scss';

export class RegisterForm extends Component {

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
      <div className={'register-form'}>

        <div className={'input-group'}>
          <span>Enter your login </span>
          <input value={login} onChange={this.onLoginChange} type={'text'} name={'Username'} />
        </div>

        <div className={'input-group'}>
          <span>Enter your password </span>
          <input value={password} onChange={this.onPasswordChange} type={'password'} name={'Password'} />
        </div>

        <div className={'input-group'}>
          <span>Repeat password </span>
          <input value={password} onChange={this.onPasswordChange} type={'password'} name={'Password'} />
        </div>

        <button onClick={this.onLogin}>
          Register
        </button>

      </div>
    );
  }

}
