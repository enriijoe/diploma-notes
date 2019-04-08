import * as React from "react";
import { PureComponent } from "react";

//View
import { Button } from "react-bootstrap";

import "./HeaderBar.Style.scss";

export class HeaderBar extends PureComponent {

  render () {
    return (
      <header className={'header-bar'}>

        <div className={'header-bar-logo'}>
          <span>Notes</span>
        </div>

        <div className={'header-bar-control'}>

         <Button variant="outline-light" href="/notes">Notes</Button>

         <Button variant="outline-light" href="/login">Login</Button>

         <Button variant="outline-light" href="/register">Register</Button>

        </div>

      </header>
    );
  }

}
