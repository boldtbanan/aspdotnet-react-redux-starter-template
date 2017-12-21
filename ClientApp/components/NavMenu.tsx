import * as React from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import * as classNames from 'classnames';
import * as NavStore from '../store/Nav';
import { ApplicationState } from '../store/index';
import { RouteProps } from 'react-router';

class NavMenuComponent extends React.Component<any, {}> {

  public render() {
    const { nav, toggleNav } = this.props;
    const { expanded } = nav;
    
    return (
      <div className={classNames({'main-nav': true, expanded})}>
        <div className="navbar navbar-inverse">
          <div className="top-bar">
            <div className="top-bar-left">
              <Link to="/">aspdotnet_react_redux_starter_template</Link>
            </div>
            <div className="top-bar-right">
              <ul className="menu">
                <li>
                  <button type="button" className="button toggle-menu" onClick={toggleNav}>
                    <i className="fa fa-bars"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="clearfix"></div>

          <div className="collapsible-menu">
            <ul className="vertical menu">
              <li>
                <NavLink exact to="/" activeClassName="active">
                  <i className="fa fa-fw fa-lg fa-home"></i> Home
                </NavLink>
              </li>
              <li>
                <NavLink to={'/counter'} activeClassName='active'>
                  <i className="fa fa-fw fa-lg fa-graduation-cap"></i> Counter
                </NavLink>
              </li>
              <li>
                <NavLink to="/fetchdata" activeClassName="active">
                  <i className="fa fa-fw fa-lg fa-th-list"></i> Fetch data
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export const NavMenu = connect(
  (state) => {
    return {
      nav: state.nav,
      routing: state.routing
    };
  }, // Selects which state properties are merged into the component's props
  NavStore.actionCreators                 // Selects which action creators are merged into the component's props
)(NavMenuComponent);

export default NavMenu;