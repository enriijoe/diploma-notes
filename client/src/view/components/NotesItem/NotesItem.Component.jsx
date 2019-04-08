import * as React from "react";
import { PureComponent } from "react";

//View
import { Button } from "react-bootstrap"

import "./NotesItem.Style.scss";

export class NotesItem extends PureComponent {

  render () {

    return (

      <div className={'notes-item'}>

        <div className={'notes-item-header'}>Header

          <div className={'notes-item-delete'}>
            <Button>x</Button>
          </div>

        </div>
        <div className={'notes-item-text'}>dfg</div>

        <div className={'notes-item-buttons'}>dfg</div>

      </div>
    );
  }

}
