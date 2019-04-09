import {Bind} from "dreamstate";
import * as React from "react";
import { PureComponent } from "react";

//View
import { NotesItem } from "@View/components/NotesItem";
import {NotesCreationItem} from "@View/components/NotesCreationItem";

import "./NotesPanel.Style.scss";

export class NotesPanel extends PureComponent {

  state = {
    items: [
      { text: 'a', title: 'a' },
      { text: 'b', title: 'b' },
      { text: 'c', title: 'c' }
    ]
  };

  @Bind()
  onCreate() {
    return (
      <NotesCreationItem onCreate={this.onCreate}/>
    );
  }

  render () {

    const { items } = this.state;

    const notes = items.map((item, idx) => <NotesItem title={item.title} text={item.text} key={idx}/>);

    return (
      <div className={'notes-panel'}>

        <NotesCreationItem onCreate={this.onCreate}/>
        {notes}

      </div>
    );
  }

}
