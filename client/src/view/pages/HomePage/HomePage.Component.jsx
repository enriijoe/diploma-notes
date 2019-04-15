import * as React from 'react';
import { PureComponent } from 'react';

// View
import { HeaderBar } from '@View/components/HeaderBar';

import './HomePage.Style.scss';

export class HomePage extends PureComponent {

  render() {

    return (
      <div className={'home-page'}>

        <HeaderBar/>

      </div>
    );
  }

}
