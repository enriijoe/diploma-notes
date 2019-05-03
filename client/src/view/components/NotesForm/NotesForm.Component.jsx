import { Bind, Consume } from 'dreamstate';
import * as React from 'react';
import { findDOMNode } from 'react-dom';
import { Component } from 'react';

// Data.
import { notesContextManager } from '@Data/store';

// View.
import { Button, Popover } from 'react-bootstrap';
import { GithubPicker } from 'react-color';

// Utils.
import { uuid } from '@Data/utils/helpers';

import './NotesForm.Style.scss';

@Consume(notesContextManager)
export class NotesForm extends Component {

  state = {
    isSelectingColor: false,
    color: '#fff',
    title: '',
    text: '',
    tags: this.props.tag ? [ this.props.tag ] : [ 'default' ]
  };

  constructor(props) {
    super(props);

    const { item } = props;

    if (item) {
      this.state.color = item.color;
      this.state.title = item.title;
      this.state.text = item.text;
      this.state.tags = item.tags;
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
  onChangeTag(event) {
    this.setState({ tags: [ event.target.value ] });
  }

  @Bind()
  onToggleColorSelect() {

    const { isSelectingColor } = this.state;

    this.setState({ isSelectingColor: !isSelectingColor });
  }

  @Bind()
  onConfirm() {

    const { onConfirm, item } = this.props;
    const { color, title, text, tags } = this.state;

    onConfirm({
      id: item ? item.id : uuid(),
      createdAt: item ? item.createdAt : Date.now(),
      title,
      text,
      color,
      tags
    });

    this.setState({ title: '', text: '', color: '#fff' });
  }

  renderEdits() {

    const { tags: noteTags } = this.state;
    const { notesState: { tags } } = this.props;

    return (
      <>

        <div
          className={'notes-heading'}
          contentEditable={'true'}
          data-text={'Title...'}
          onInput={this.onTitleChange}
        />

        <div
          className={'notes-text'}
          contentEditable={'true'}
          data-text={'Note...'}
          onInput={this.onTextChange}
        />

        <select value={noteTags[0]} onChange={this.onChangeTag}>
          <option value={'default'}> default </option>
          { tags.map((it) => <option key={it} value={it}> {it} </option>) }
        </select>

      </>
    );
  }

  renderToolbar() {

    const { onCancel, item } = this.props;
    const { text, title, color, isSelectingColor } = this.state;

    const bgStyle = { backgroundColor: color };

    return (
      <div className={'notes-toolbar'}>

        <div className={'toolbar-color-picker'} onClick={this.onToggleColorSelect}>

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
