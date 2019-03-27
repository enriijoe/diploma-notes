import * as React from 'react';
import { PureComponent } from 'react';
import { Link } from 'react-router-dom';

// View
import { HeaderBar } from '@View/components/HeaderBar';

import './HomePage.Style.scss';

export class HomePage extends PureComponent {

  render() {

    return (
      <div className={'home-page'}>

        <HeaderBar/>

        <h1>Hello. This is my first page</h1>
        <p><Link to='/login'>Login</Link></p>
        <p><Link to='/register'>Register</Link></p>

      </div>
    );

  }

}
