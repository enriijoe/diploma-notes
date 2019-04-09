import {Bind} from "dreamstate";
import * as React from "react";
import { PureComponent } from "react";

// View.
import { NotesItem } from "@View/components/NotesItem";
import { NotesCreationItem } from "@View/components/NotesCreationItem";

import "./NotesPanel.Style.scss";

export class NotesPanel extends PureComponent {

  state = {
    items: []
  };

  @Bind()
  onCreate(newNoteItem) {

    const { items } = this.state;

    this.setState({
      items: [ ...items, newNoteItem ]
    });
  }

  render () {

    const { items } = this.state;
    console.error(items);
    const notes = items.map((item, idx) => <NotesItem title={item.title} text={item.text} key={idx}/>);

    return (
      <div className={'notes-panel'}>

        <NotesCreationItem onCreate={this.onCreate}/>

        { notes }

      </div>
    );
  }

}
