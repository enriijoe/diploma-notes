import { Consume } from 'dreamstate';
import * as React from 'react';
import { PureComponent } from 'react';

// View.
import { NotesItem } from '@View/components/NotesItem';
import { NotesCreationItem } from '@View/components/NotesCreationItem';

// Data.
import { notesContextManager } from '@Data/store';

import './NotesPanel.Style.scss';

@Consume(notesContextManager)
export class NotesPanel extends PureComponent {

  render() {

    const { notesState: { noteItems }, notesActions } = this.props;

    const columns = [ [], [], [] ];

    noteItems.forEach((item, id) => columns[id % 3].push(
      <NotesItem
        key={id}
        item={item}
        onUpdate={(item) => notesActions.updateNoteItemById(item.id, item)}
        onRemove={() => notesActions.removeNoteItemById(item.id)}
      />)
    );

    return (
      <div className={'notes-panel'}>

        <NotesCreationItem/>

        <div className={'notes-items-panel'}>
          { columns.map((arr, idx) => <div key={`arr-${idx}`} className={'notes-items-panel-column'}> { arr } </div>) }
        </div>

      </div>
    );
  }

}
