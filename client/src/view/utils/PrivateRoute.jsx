import { Consume } from 'dreamstate';
import * as React from 'react';
import { Route } from 'react-router-dom';

// Data.
import { authContextManager, routerContextManager } from '@Data/store';

@Consume(authContextManager, routerContextManager)
export class PrivateRoute extends Route {

  DEFAULT_REDIRECT = '/login';

  componentDidMount() {

    const {
      redirect, reversed,
      routingActions: { replace }, routingState: { history },
      authState: { isAuthorised, isAuthorising }
    } = this.props;

    if (isAuthorising === false && (reversed ? isAuthorised : !isAuthorised)) {
      replace(this.DEFAULT_REDIRECT + '?next=' + history.location.pathname);
    }
  }

  componentWillReceiveProps(nextProps) {

    const {
      redirect, reversed,
      authState: { isAuthorising, isAuthorised },
      routingActions: { replace, getQueryParams }
    } = nextProps;

    if (isAuthorising === false && (reversed ? isAuthorised : !isAuthorised)) {

      const next = getQueryParams().next;

      replace(typeof next === 'string' ? next : (typeof redirect === 'string' ? redirect : '/home'));
    }
  }

}
