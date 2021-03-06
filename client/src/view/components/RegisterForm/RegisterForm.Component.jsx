import { Bind } from 'dreamstate';
import * as React from 'react';
import { Component } from 'react';

// View.
import { Form, Button, Row, Container, OverlayTrigger, Tooltip } from 'react-bootstrap'

import './RegisterForm.Style.scss';

export class RegisterForm extends Component {

  state = {
    email: '',
    password: '',
    passwordConfirmation: ''
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
  onPasswordConfirmationChange(event) {
    this.setState({
      passwordConfirmation: event.target.value
    });
  }

  @Bind()
  onRegister() {

    const { onRegister } = this.props;
    const { email, password, passwordConfirmation } = this.state;

    onRegister(email, password, passwordConfirmation);
  }

  render() {

    const { email, password, passwordConfirmation } = this.state;

    return (
      <Container className={'register-form'} fluid>

        <Row className={'input-group'}>
          <Form.Label>Email address: </Form.Label>
          <OverlayTrigger overlay={<Tooltip placement='right'>Use a valid email address.</Tooltip>}>
            <Form.Control value={email} onChange={this.onEmailChange} type={'text'} placeholder="example@example.example" />
          </OverlayTrigger>
        </Row>

        <Row className={'input-group'}>
          <Form.Label>Password: </Form.Label>
          <OverlayTrigger overlay={<Tooltip>Password should be longer than 4 letters!</Tooltip>}>
            <Form.Control value={password} onChange={this.onPasswordChange} type={'password'} placeholder={'password'} />
          </OverlayTrigger>
        </Row>

        <Row className={'input-group'}>
          <Form.Label>Confirm password: </Form.Label>
          <Form.Control value={passwordConfirmation} onChange={this.onPasswordConfirmationChange} type={'password'} placeholder={'confirm password'} />
        </Row>

        <Button className={'register-button'} variant={'dark'} onClick={this.onRegister}>
          Register
        </Button>

      </Container>
    );
  }

}
