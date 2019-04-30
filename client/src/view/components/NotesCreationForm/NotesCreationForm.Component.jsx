import { Bind } from 'dreamstate';
import * as React from 'react';
import { Component } from 'react';

// View.
import { Form, Button, Row, Container } from 'react-bootstrap'

import './NotesCreationForm.Style.scss';

export class NotesCreationForm extends Component {

  state = {
    title: '',
    text: ''
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
      text: ''
    });
  }

  render() {

    const { title, text } = this.state;
    const { onCancel } = this.props;

    return (
      <div className={'notes-creating-form'}>

        <input value={title} onChange={this.onTitleChange} placeholder={'Title'} />

        <textarea value={text} onChange={this.onTextChange} placeholder={'Your note...'} />

        <div className={'button-group'}>
          <Button className={'cancel-note-button'} variant={'dark'} onClick={onCancel}>
            Cancel
          </Button>

          <Button className={'create-note-button'} variant={'dark'} onClick={this.onCreate}>
            Create
          </Button>
        </div>

      </div>
    );
  }

}
