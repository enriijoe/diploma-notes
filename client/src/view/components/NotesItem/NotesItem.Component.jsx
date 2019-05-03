import { Bind } from 'dreamstate';
import * as React from 'react';
import { Component } from 'react';

import './NotesItem.Style.scss';

export class NotesItem extends Component {

  state = {
    isHovered: false,
    isEditing: false
  };

  @Bind()
  onHoverItem() {
    this.setState({ isHovered: true });
  }

  @Bind()
  onMouseLeaveItem() {
    this.setState({ isHovered: false });
  }

  render() {

    const { title, text, color, onRemove } = this.props;
    const { isHovered } = this.state;

    const bgStyle = { backgroundColor: color };

    return (
      <div className={'notes-item'} style={bgStyle} onMouseEnter={this.onHoverItem} onMouseLeave={this.onMouseLeaveItem}>

        { isHovered ? <div className={'notes-item-removal-pin'} onClick={onRemove}> X </div> : null }

        <div className={'notes-item-title'}>
          { title }
        </div>

        <div className={'notes-item-text'}>
          { text }
        </div>

        <div className={'notes-item-buttons'}>✎</div>

      </div>
    );
  }

}
