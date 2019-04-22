import * as React from 'react';
import { PureComponent } from 'react';
import { Link } from 'react-router-dom';

// View
import { HeaderBar } from '@View/components/HeaderBar';

export class ErrorPage extends PureComponent {

  render() {
    return (
      <div>

        <HeaderBar/>

        <h1>Something gone wrong.</h1>
        <p><Link to='/'>Back to HomePage</Link></p>

      </div>
    );
  }

}
