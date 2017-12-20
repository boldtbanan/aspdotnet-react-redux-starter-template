import * as React from 'react';
import { connect } from 'react-redux';
import NavMenu from './NavMenu';
import * as Nav from '../store/Nav';

class LayoutComponent extends React.Component<any, any> {
  public render() {
    const { navState, toggleNav } = this.props;

    return (
      <div className="application">
        <div className="row">
          <div className="small-3 columns">
            <NavMenu expanded={navState.expanded} toggleNav={toggleNav} />
          </div>
          <div className="small-9 columns">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export const Layout = connect((state) => {
    return {
      navState: state.nav
    };
  },
  { toggleNav: Nav.actionCreators.toggleNav })(LayoutComponent);
