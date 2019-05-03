import { createBrowserHistory } from 'history';
import { parse } from 'querystring';

// View.
import { Bind, ContextManager } from 'dreamstate';

// Data.
import { Logger } from '@Data/utils';

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

  log = new Logger('[ROUTER]');

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

    this.log.info('Push:', path);

    this.context.routingState.history.push(path);
  }

  @Bind()
  replace(path) {

    this.log.info('Replace:', path);

    this.context.routingState.history.replace(path);
  }

  @Bind()
  getQueryParams() {
    return parse(this.context.routingState.history.location.search.slice(1));
  }

}
