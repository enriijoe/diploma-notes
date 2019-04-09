import { Bind } from "dreamstate";
import * as React from "react";
import { Component } from "react";

// View.
import { Form, Button, Row, Container } from "react-bootstrap"

import './NotesCreationForm.Style.scss';

export class NotesCreationForm extends Component {

  state = {
    title: '',
    text: '',
  };

  @Bind()
  onTitleChange(event) {
    this.setState({
      title: event.target.value
    });
  }

  @Bind()
  onTextChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  @Bind()
  onCreate() {

    const { onCreate } = this.props;
    const { title, text } = this.state;

    onCreate({ id: Math.round(Math.random() * 100000), title, text });

    this.setState({
      title: '',
      text: '',
    });
  }

  render() {

    const { title, text } = this.state;
    const { onCancel } = this.props;

    return (
      <Container className={'notes-creating-form'} fluid>

        <Row className={'input-group'}>
          <Form.Label>Title</Form.Label>
          <Form.Control value={title} onChange={this.onTitleChange} placeholder="Title" />
        </Row>

        <Row className={'input-group'}>
          <Form.Label>Text</Form.Label>
          <Form.Control value={text} onChange={this.onTextChange} placeholder="Your note" />
        </Row>

        <Row className={'button-group'}>
          <Button className={'cancel-note-button'} variant={'dark'} onClick={onCancel}>
            Cancel
          </Button>

          <Button className={'create-note-button'} variant={'dark'} onClick={this.onCreate}>
            Create
          </Button>
        </Row>

      </Container>
    );
  }

}
