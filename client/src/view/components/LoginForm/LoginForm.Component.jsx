import { Bind } from "dreamstate";
import * as React from "react";
import { Component } from "react";

//View
import { Form, Button, Row, Container } from "react-bootstrap"

import './LoginForm.Style.scss';


export class LoginForm extends Component {

  state = {
    login: '',
    password: ''
  };

  @Bind()
  onLoginChange(event) {
    this.setState({
      login: event.target.value
    });
  }

  @Bind()
  onPasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  @Bind()
  onLogin() {

    const { onLogin } = this.props;
    const { login, password } = this.state;

    onLogin(login, password);
  }

  render() {

    const { login, password } = this.state;

    return (
      <Container className={'login-form'} fluid>

        <Row className={'input-group'}>
          <Form.Label>Login </Form.Label>
          <Form.Control value={login} onChange={this.onLoginChange} type={'text'} placeholder="login" />
        </Row>

        <Row className={'input-group'}>
          <Form.Label>Password</Form.Label>
          <Form.Control value={password} onChange={this.onPasswordChange} type={'password'} placeholder="password" />
        </Row>

        <Button className={'login-button'} variant={'dark'} onClick={this.onLogin}>
          Submit
        </Button>

      </Container>
    );
  }

}
