import * as React from 'react';
import { Component } from 'react';

// View
import { HeaderBar } from '@View/components/HeaderBar';

import './HomePage.Style.scss';

export class HomePage extends Component {

  render() {

    return (
      <div className={'home-page'}>

        <HeaderBar/>

      </div>
    );

  }

}
