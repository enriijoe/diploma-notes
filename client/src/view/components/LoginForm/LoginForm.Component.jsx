import { Bind } from 'dreamstate';
import * as React from 'react';
import { Component } from 'react';

// View.
import { Form, Button, Row, Container } from 'react-bootstrap'

import './LoginForm.Style.scss';

export class LoginForm extends Component {

  state = {
    email: '',
    password: ''
  };

  @Bind()
  onEmailChange(event) {
    this.setState({
      email: event.target.value
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
    const { email, password } = this.state;

    onLogin(email, password);
  }

  render() {

    const { email, password } = this.state;

    return (
      <Container className={'login-form'} fluid>

        <Row className={'input-group'}>
          <Form.Label>Email </Form.Label>
          <Form.Control value={email} onChange={this.onEmailChange} type={'text'} placeholder="email" />
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
