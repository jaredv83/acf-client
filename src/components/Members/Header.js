import React from 'react';
import { IndexLink, Link } from 'react-router';

const NavbarLink = ({to, className, component, children}) => {
  const Comp = component || Link;

  return (
    <Comp to={to} className={className} activeStyle={{
      color: '#33e0ff',
    }}>
      {children}
    </Comp>
  );
};

function Header({ navLinks, styles, title, user }) {
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
          <a className="logo pull-left" href="index.html">
            <img src="https://composersforum.org/sites/all/themes/acfzen/acfzen/logo.png" alt />
          </a>
          <div className="navbar-collapse pull-right nav-main-collapse collapse">
            <nav className="nav-main">
              {/*
            NOTE

            For a regular link, remove "dropdown" class from LI tag and "dropdown-toggle" class from the href.
            Direct Link Example:

            <li>
              <a href="#">HOME</a>
            </li>
          */}
              <ul id="topMain" className="nav nav-pills nav-main">
                <li className="dropdown">
                  <a className="dropdown-toggle" href="#">
                    HOME
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
