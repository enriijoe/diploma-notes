import * as React from 'react';
import { PureComponent } from 'react';

import './MenuBar.Style.scss';

export class MenuBar extends PureComponent {

  state = {
    isShown: false
  };

  render () {

    const { isShown } = this.state;

    return (
      <div className={'menu-bar'}>
        MENU BAR
      </div>
    );
  }

}
