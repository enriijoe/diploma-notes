import { Bind } from 'dreamstate';
import * as React from 'react';
import { findDOMNode } from 'react-dom';
import { Component } from 'react';

// View.
import { Button, Popover } from 'react-bootstrap';
import { GithubPicker } from 'react-color';

// Utils.
import { uuid } from '@Data/utils/helpers';

import './NotesForm.Style.scss';

export class NotesForm extends Component {

  state = {
    isSelectingColor: false,
    color: '#fff',
    title: '',
    text: ''
  };

  constructor(props) {
    super(props);

    const { item } = props;

    if (item) {
      this.state.color = item.color;
      this.state.title = item.title;
      this.state.text = item.text;
    }
  }

  componentDidMount() {

    const { item } = this.props;

    if (item) {

      const node = findDOMNode(this);

      node.querySelector('.notes-heading').textContent = item.title;
      node.querySelector('.notes-text').textContent = item.text;
    }
  }

  @Bind()
  onTitleChange(event) {
    this.setState({ title: event.target.textContent });
  }

  @Bind()
  onTextChange(event) {
    this.setState({ text: event.target.textContent });
  }

  @Bind()
  onColorSelect(color) {
    this.setState({ color: color.hex });
  }

  @Bind()
  onToggleColorSelect() {

    const { isSelectingColor } = this.state;

    this.setState({ isSelectingColor: !isSelectingColor });
  }

  @Bind()
  onConfirm() {

    const { onConfirm, item } = this.props;
    const { color, title, text } = this.state;

    onConfirm({ id: item ? item.id : uuid(), title, text, color, createdAt: item ? item.createdAt : Date.now() });

    this.setState({ title: '', text: '', color: '#fff' });
  }

  renderEdits() {

    const { title } = this.props;

    return (
      <>

        <div
          className={'notes-heading'}
          contentEditable={'true'}
          data-text={'Title...'}
          onInput={this.onTitleChange}
        >
          { title }
        </div>

        <div
          className={'notes-text'}
          contentEditable={'true'}
          data-text={'Note...'}
          onInput={this.onTextChange}
        />

      </>
    );
  }

  renderToolbar() {

    const { onCancel, item } = this.props;
    const { text, title, color, isSelectingColor } = this.state;

    const bgStyle = { backgroundColor: color };

    return (
      <div className={'notes-toolbar'}>

        <div onClick={this.onToggleColorSelect}>

          <div className={'color-picker'} style={bgStyle}/>

          {
            isSelectingColor
              ?
              <Popover placement={'right'}>
                <GithubPicker triangle={'hide'} onChangeComplete={this.onColorSelect}/>
              </Popover>
              : null
          }

        </div>

        <div className={'toolbar-buttons'}>

          <Button className={'cancel-note-button'} variant={'dark'} onClick={onCancel}>
            Cancel
          </Button>

          <Button className={'create-note-button'} disabled={!text && !title} variant={'dark'} onClick={this.onConfirm}>
            { item ? 'Update' : 'Create'}
          </Button>

        </div>

      </div>
    );
  }

  render() {

    return (
      <div className={'notes-creating-form'}>

        { this.renderEdits() }

        { this.renderToolbar() }

      </div>
    );
  }

}
