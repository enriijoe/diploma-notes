import { Consume } from 'dreamstate';
import * as React from 'react';
import { PureComponent } from 'react';

// Data.
import { notesContextManager } from '@Data/store';

// View.
import { HeaderBar } from '@View/components/HeaderBar';
import { MenuBar } from '@View/components/MenuBar';
import { NotesPanel } from '@View/components/NotesPanel';
import { Loader } from '@View/components/Loader';

import './NotesPage.Style.scss';

@Consume(notesContextManager)
export class NotesPage extends PureComponent {

  componentDidMount() {

    const { notesActions: { connectToDatabase } } = this.props;

    connectToDatabase();
  }

  componentWillUnmount() {

    const { notesActions: { disconnectFromDatabase } } = this.props;

    disconnectFromDatabase();
  }

  renderContent() {

    const { params } = this.props.match;

    return (
      <>

        <MenuBar tag={params.tag}/>

        <NotesPanel tag={params.tag}/>

      </>
    );
  }

  render() {

    const { notesState: { connected } } = this.props;

    return (
      <div className={'notes-page'}>

        <HeaderBar/>

        <div className={'notes-content'}>
          { connected ? this.renderContent() : <Loader/> }
        </div>

      </div>
    );

  }

}
