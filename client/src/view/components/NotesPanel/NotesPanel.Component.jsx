import {Consume} from "dreamstate";
import * as React from "react";
import { PureComponent } from "react";

// View.
import { NotesItem } from "@View/components/NotesItem";
import { NotesCreationItem } from "@View/components/NotesCreationItem";

// Data.
import { notesContextManager } from "@Data/store";

import "./NotesPanel.Style.scss";

@Consume(notesContextManager)
export class NotesPanel extends PureComponent {

  render () {

    const { notesState: { noteItems }, notesActions: { removeNoteItemById } } = this.props;
    const notes = noteItems.map((item, id) => <NotesItem title={item.title} text={item.text} key={id} onRemove={() => removeNoteItemById(item.id)}/>);

    return (
      <div className={'notes-panel'}>

        <NotesCreationItem/>

        { notes }

      </div>
    );
  }

}
