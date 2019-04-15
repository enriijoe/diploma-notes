import { createBrowserHistory } from "history";
import * as React from 'react';
import { parse } from 'querystring';

// View.
import { Bind, ContextManager } from "dreamstate";

// Context store creation.
export class RouterContextManager extends ContextManager {

  context = {
    routingActions: {
      getCurrentLocation: this.getCurrentLocation,
      getQueryParams: this.getQueryParams,
      goBack: this.goBack,
      push: this.push,
      replace: this.replace
    },
    routingState: {
      history: createBrowserHistory()
    }
  };

  @Bind()
  getCurrentLocation() {
    return this.context.routingState.history.location.pathname;
  }

  @Bind()
  goBack() {
    this.context.routingState.history.goBack();
  }

  @Bind()
  push(path) {
    this.context.routingState.history.push(path);
  }

  @Bind()
  replace(path) {
    this.context.routingState.history.replace(path);
  }

  @Bind()
  getQueryParams() {
    return parse(this.context.routingState.history.location.search.slice(1));
  }

}
