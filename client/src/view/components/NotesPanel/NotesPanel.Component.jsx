import {Consume} from "dreamstate";
import * as React from "react";
import { PureComponent } from "react";

// View.
import { NotesItem } from "@View/components/NotesItem";
import { NotesCreationItem } from "@View/components/NotesCreationItem";

// Data.
import { notesContextManager } from "../../../data/store";

import "./NotesPanel.Style.scss";

@Consume(notesContextManager)
export class NotesPanel extends PureComponent {

  render () {

    const { notesState: { noteItems } } = this.props;
    const notes = noteItems.map((item, id) => <NotesItem title={item.title} text={item.text} key={id}/>);

    return (
      <div className={'notes-panel'}>

        <NotesCreationItem/>

        { notes }

      </div>
    );
  }

}
