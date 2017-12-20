import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
  public render() {
    return (
      <div className='main-nav'>
        <div className='navbar navbar-inverse'>
          <div className='top-bar'>
            <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
              <span className='hide-for-medium'>Toggle navigation</span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
            <Link className='navbar-brand' to={'/'}>aspdotnet_react_redux_starter_template</Link>
          </div>
          <div className='clearfix'></div>

          <div className='show-for-medium'>
            <ul className='vertical menu'>
              <li>
                <NavLink exact to={'/'} activeClassName='active'>
                  <i className='fa fa-fw fa-lg fa-home'></i> Home
                            </NavLink>
              </li>
              <li>
                <NavLink to={'/counter'} activeClassName='active'>
                  <i className='fa fa-fw fa-lg fa-graduation-cap'></i> Counter
                            </NavLink>
              </li>
              <li>
                <NavLink to={'/fetchdata'} activeClassName='active'>
                  <i className='fa fa-fw fa-lg fa-th-list'></i> Fetch data
                            </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
