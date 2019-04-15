import { Provide } from "dreamstate";
import * as React from 'react';
import { PureComponent } from 'react';
import { Route, Router as ReactRouter, Switch } from 'react-router-dom';

// View.
import { HomePage } from '@View/pages/HomePage';
import { ErrorPage } from '@View/pages/ErrorPage';
import { LoginPage } from '@View/pages/LoginPage';
import { RegisterPage } from '@View/pages/RegisterPage';
import { NotesPage } from '@View/pages/NotesPage';
import { PrivateRoute } from '@View/utils/PrivateRoute';

// Data.
import { notesContextManager, authContextManager, routerContextManager } from "@Data/store";

@Provide(notesContextManager, authContextManager, routerContextManager)
export class Router extends PureComponent {

  render() {

    return (
      <ReactRouter history={routerContextManager.context.routingState.history}>

        <Switch>

          <Route exact path={['/', '/home']} component={HomePage}/>

          <PrivateRoute reversed exact path={'/login'} redirect={'/home'} component={LoginPage}/>

          <PrivateRoute reversed exact path={'/register'} component={RegisterPage}/>

          <PrivateRoute exact path={'/notes'} component={NotesPage}/>

          <Route exact path={'*'} component={ErrorPage}/>

        </Switch>

      </ReactRouter>
    );
  }

}
