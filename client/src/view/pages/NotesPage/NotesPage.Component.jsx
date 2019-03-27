import * as React from 'react';
import { PureComponent } from 'react';
import { Link } from 'react-router-dom';

// View
import { HeaderBar } from '@View/components/HeaderBar';

import './NotesPage.Style.scss';

export class NotesPage extends PureComponent {

  render() {

    return (
      <div className={'notes-page'}>

        <HeaderBar/>

        <h1>Hello. There will be your notes..</h1>
        <p><Link to='/login'>Login</Link></p>

      </div>
    );

  }

}
