import * as React from "react";
import { PureComponent } from "react";

//View
import { NotesItem } from "@View/components/NotesItem";
import {NotesCreationItem} from "@View/components/NotesCreationItem";

import "./NotesPanel.Style.scss";

export class NotesPanel extends PureComponent {

  state = {
    items: [
      { id: 1, text: 'qwe', title: 'Qwe' },
      { id: 2, text: 'asd', title: 'Asd' },
      { id: 3, text: 'zxc', title: 'Zxc' }
    ]
  };

  render () {

    const { items } = this.state;

    const notes = items.map((item, idx) => <NotesItem title={item.title} text={item.text} key={idx}/>);

    return (
      <div className={'notes-panel'}>

        <NotesCreationItem/>
        {notes}

      </div>
    );
  }

}
