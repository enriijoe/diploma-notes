import { Consume } from 'dreamstate';
import * as React from 'react';
import { PureComponent } from 'react';

// Data.
import { notesContextManager } from '@Data/store';

// View.
import { HeaderBar } from '@View/components/HeaderBar';
import { MenuBar } from '@View/components/MenuBar';
import { NotesPanel } from '@View/components/NotesPanel';

import './NotesPage.Style.scss';

@Consume(notesContextManager)
export class NotesPage extends PureComponent {

  componentDidMount() {

    const { notesActions: { connectToDatabase } } = this.props;

    connectToDatabase();
  }

  render() {

    return (
      <div className={'notes-page'}>

        <HeaderBar/>

        <div className={'notes-content'}>

          <MenuBar/>

          <NotesPanel/>

        </div>

      </div>
    );

  }

}
