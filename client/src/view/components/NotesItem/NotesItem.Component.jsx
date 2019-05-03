import { Bind } from 'dreamstate';
import * as React from 'react';
import { Component } from 'react';

// View.
import { Modal } from 'react-bootstrap';
import DeleteIcon from '@View/assets/icons/delete.svg';
import PencilIcon from '@View/assets/icons/pencil.svg';
import { NotesForm } from '@View/components/NotesForm';

import './NotesItem.Style.scss';

export class NotesItem extends Component {

  state = {
    isHovered: false,
    isEditing: false
  };

  @Bind()
  onStartEditing() {
    this.setState({ isEditing: true, isHovered: false });
  }

  @Bind()
  onCancelEditing() {
    this.setState({ isEditing: false });
  }

  @Bind()
  onFinishEditing(item) {

    const { onUpdate } = this.props;

    this.setState({ isEditing: false });

    onUpdate(item);
  }


  @Bind()
  onHoverItem() {
    this.setState({ isHovered: true });
  }

  @Bind()
  onMouseLeaveItem() {
    this.setState({ isHovered: false });
  }

  renderHoveredItems() {

    const { onRemove } = this.props;

    return (
      <>
        <div className={'notes-item-removal-pin'} onClick={onRemove}> <DeleteIcon width={12} height={12}/> </div>
        <div className={'notes-item-edit-pin'} onClick={this.onStartEditing}> <PencilIcon width={12} height={12}/> </div>
      </>
    );
  }

  render() {

    const { item } = this.props;
    const { isHovered, isEditing } = this.state;

    const bgStyle = { backgroundColor: item.color };

    return (
      <div className={'notes-item'} style={bgStyle} onMouseEnter={this.onHoverItem} onMouseLeave={this.onMouseLeaveItem}>

        { isHovered ? this.renderHoveredItems() : null }

        <div className={'notes-item-title'}>
          { item.title }
        </div>

        <div className={'notes-item-text'}>
          { item.text }
        </div>

        <div className={'notes-item-buttons'}/>

        <Modal show={isEditing} onHide={this.onCancelEditing} centered={true}>
          <NotesForm item={item} onCancel={this.onCancelEditing} onConfirm={this.onFinishEditing}/>
        </Modal>

      </div>
    );
  }

}
