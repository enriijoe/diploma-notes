import * as React from 'react';

// View
import { Bind, ContextManager } from "dreamstate";

// Context store creation.
export class NotesContextManager extends ContextManager {

  context = {
    notesActions: {
      createNoteItem: this.createNoteItem
    },
    notesState: {
      noteItems: []
    }
  };

  setState = ContextManager.getSetter(this, 'notesState');

  @Bind()
  createNoteItem(noteItem) {

    const { noteItems } = this.context.notesState;

    this.setState({
      noteItems: [ ...noteItems, noteItem ]
    });
  }

}
