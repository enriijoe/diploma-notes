import { createElement } from 'react';
import { render } from 'react-dom';

import { Router } from '@View/Router';

import "@View/assets/styles/global.scss";

render(
  createElement(Router),
  document.getElementById( 'application-root')
);
