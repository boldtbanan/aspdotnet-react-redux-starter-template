import * as React from 'react';
import { NavMenu } from './NavMenu';

export class Layout extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="application">
        <div className="row">
          <div className="small-3 columns">
            <NavMenu />
          </div>
          <div className="small-9 columns">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
