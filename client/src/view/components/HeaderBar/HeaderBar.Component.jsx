import * as React from "react";
import { PureComponent } from "react";

import "./HeaderBar.Style.scss";

export class HeaderBar extends PureComponent {

  render () {
    return (
      <header className={'header-bar'}>
        This is header. You can see it
      </header>
    );
  }

}
