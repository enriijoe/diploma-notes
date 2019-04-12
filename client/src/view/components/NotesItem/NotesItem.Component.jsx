import * as React from "react";
import { PureComponent } from "react";

// View.
import { Button } from "react-bootstrap"

import "./NotesItem.Style.scss";

export class NotesItem extends PureComponent {

  render () {

    const { onRemove } = this.props;
    const { title, text } = this.props;

    return (

      <div className={'notes-item'}>

        <div className={'notes-item-header'}>
          <div className={'notes-item-title'}>
            {title}
          </div>
          <Button variant={'dark'} onClick={onRemove}>✕</Button>
        </div>
        <div className={'notes-item-text'}>{text}</div>
        <div className={'notes-item-buttons'}>✎</div>

      </div>
    );
  }

}
