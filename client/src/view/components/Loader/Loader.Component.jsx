import * as React from 'react';
import { PureComponent } from 'react';

import './Loader.Style.scss';

export class Loader extends PureComponent {

  render() {

    const { width, height } = this.props;

    const style = { width, height, borderWidth: width ? width / 20 : undefined };

    return <div className={'loader'} style={style}/>
  }

}
