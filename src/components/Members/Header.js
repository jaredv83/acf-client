import React from 'react';
import { IndexLink } from 'react-router';
import NavbarLink from './NavbarLink';

function Header({ navLinks }) {
  return (
    <div id="header" className="sticky clearfix">
      <header id="topNav">
        <div className="container">
          {/* Mobile Menu Button */}
          <button className="btn btn-mobile" data-toggle="collapse" data-target=".nav-main-collapse">
            <i className="fa fa-bars" />
          </button>
          {/* BUTTONS */}
          <ul className="pull-right nav nav-pills nav-second-main">
            {/* SEARCH */}
            <li className="search">
              <a href="#">
                <i className="fa fa-search" />
              </a>
              <div className="search-box">
                <form action="page-search-result-1.html" method="get">
                  <div className="input-group">
                    <input type="text" name="src" placeholder="Search" className="form-control" />
                    <span className="input-group-btn">
                      <button className="btn btn-primary" type="submit">Search</button>
                    </span>
                  </div>
                </form>
              </div>
            </li>
            {/* /SEARCH */}
          </ul>
          {/* /BUTTONS */}
          {/* Logo */}
          <NavbarLink to="/" className="logo pull-left" component={IndexLink}>
            <img src="https://composersforum.org/sites/all/themes/acfzen/acfzen/logo.png" alt />
          </NavbarLink>
          <div className="navbar-collapse pull-right nav-main-collapse collapse">
            <nav className="nav-main">
              <ul id="topMain" className="nav nav-pills nav-main">
                {
                  /* Inline navigation link style */
                  navLinks.map( ({id, to, className, text}) => (
                    <li key={id} className={className}>
                      <NavbarLink to={to}>{text}</NavbarLink>
                    </li>
                  ))
                }
                {/* Dropdown navigation link style */}
                <li className="dropdown">
                  <a className="dropdown-toggle" href="#">
                    DROPDOWN EXAMPLE
                  </a>
                  <ul className="dropdown-menu">
                    {
                      navLinks.map( ({id, to, className, text}) => (
                        <li key={id} className={className}>
                          <NavbarLink to={to}>{text}</NavbarLink>
                        </li>
                      ))
                    }
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}
Header.propTypes = {
};
// Logout.defaultProps = {};

export default Header;
