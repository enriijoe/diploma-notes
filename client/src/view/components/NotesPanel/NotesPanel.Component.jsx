import { Consume } from 'dreamstate';
import * as React from 'react';
import { Fragment, PureComponent } from 'react';

// View.
import { NotesItem } from '@View/components/NotesItem';
import { NotesCreationItem } from '@View/components/NotesCreationItem';

// Data.
import { notesContextManager, routerContextManager } from '@Data/store';

import './NotesPanel.Style.scss';

@Consume(notesContextManager)
export class NotesPanel extends PureComponent {

  componentWillReceiveProps(nextProps) {

    const { notesState: { connected, tags }, tag } = nextProps;

    if (tag && connected && !tags.includes(tag)) {
      routerContextManager.push('/notes');
    }
  }

  renderPanel(tag, noteItems) {

    const { notesActions } = this.props;

    if (noteItems.length === 0) {
      return null;
    }

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
      <Fragment key={tag}>

        <div className={'notes-items-panel-heading '}>
          { tag }
        </div>

        <div className={'notes-items-panel'}>
          { columns.map((arr, idx) => <div key={`arr-${idx}`} className={'notes-items-panel-column'}> { arr } </div>) }
        </div>

      </Fragment>
    )
  }

  render() {

    const { notesState: { noteItems, tags }, tag } = this.props;

    let content = null;

    if (tag) {

      content = this.renderPanel(tag, noteItems.filter((it) => it.tags && it.tags.includes(tag)));

    } else {

      const defaultPanel = this.renderPanel('default', noteItems.filter((it) => !it.tags || it.tags.includes('default')));
      const panels = tags.map((tag) => this.renderPanel(tag, noteItems.filter((it) => it.tags && it.tags.includes(tag))));

      content = <> { defaultPanel } { panels }</>
    }

    return (
      <div className={'notes-panel'}>

        <NotesCreationItem tag={tag}/>

        { content }

      </div>
    );
  }

}
