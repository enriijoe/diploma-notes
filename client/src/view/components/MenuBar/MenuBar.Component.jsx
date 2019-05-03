import { Bind } from 'dreamstate';
import * as React from 'react';
import { PureComponent } from 'react';

// View.
import { Button } from 'react-bootstrap';

import './MenuBar.Style.scss';

export class MenuBar extends PureComponent {

  state = {
    show: false
  };

  @Bind()
  onToggleMenu() {

    const { show } = this.state;

    this.setState({
      show: !show
    });
  }

  renderMenu() {

    return (
      <>
        <div> MENUBAR </div>
        <div> MENUBAR </div>
        <div> MENUBAR </div>
        <div> MENUBAR </div>
        <div> MENUBAR </div>
      </>
    );
  }

  render () {

    const { show } = this.state;

    return (
      <div className={'menu-bar'}>

        <Button variant={'dark'} onClick={this.onToggleMenu}>
          { show ? '<' : '>' }
        </Button>

        { show ? this.renderMenu() : null }

      </div>
    );
  }

}
