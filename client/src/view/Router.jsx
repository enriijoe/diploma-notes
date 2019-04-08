import * as React from 'react';
import { PureComponent } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { HomePage } from '@View/pages/HomePage';
import { ErrorPage } from '@View/pages/ErrorPage';
import { LoginPage } from '@View/pages/LoginPage';
import { RegisterPage } from '@View/pages/RegisterPage';
import { NotesPage } from '@View/pages/NotesPage';

export class Router extends PureComponent {

  render() {
    return (
      <BrowserRouter>

        <Switch>

          <Route exact path={'/'} component={HomePage}/>
          <Route exact path={'/home'} component={HomePage}/>
          <Route exact path={'/login'} component={LoginPage}/>
          <Route exact path={'/register'} component={RegisterPage}/>
          <Route exact path={'/notes'} component={NotesPage}/>

          <Route component={ErrorPage}/>

        </Switch>

      </BrowserRouter>
    );
  }

}
