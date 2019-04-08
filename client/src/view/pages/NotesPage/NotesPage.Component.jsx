import * as React from 'react';
import { PureComponent } from 'react';

// View
import { HeaderBar } from '@View/components/HeaderBar';
import { MenuBar } from "@View/components/MenuBar";
import {NotesPanel} from "@View/components/NotesPanel";


import './NotesPage.Style.scss';



export class NotesPage extends PureComponent {

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
