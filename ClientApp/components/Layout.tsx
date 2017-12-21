import * as React from 'react';
import { connect } from 'react-redux';
import NavMenu from './NavMenu';
import * as Nav from '../store/Nav';

//class LayoutComponent extends React.Component<any, any> {
//  shouldComponentUpdate() {
//    console.log('should?');
//    return true;
//  }

//  render() {
//    return (
//      <div className="application">
//        <div className="row">
//          <div className="small-3 columns">
//            <NavMenu />
//          </div>
//          <div className="small-9 columns">
//            {this.props.children}
//          </div>
//        </div>
//      </div>
//    );
//  }
//}

//export const Layout = connect((state, ownProps) => {
//    //console.log(ownProps);

//    return {
//      navState: state.nav,
//      location: state.location
//    };
//  },
//  { toggleNav: Nav.actionCreators.toggleNav })(LayoutComponent);


export class Layout extends React.Component<any, any> {
  render() {
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

export default Layout;