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

function Navbar({ navLinks, styles, title, user }) {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <NavbarLink to="/" className="navbar-brand" component={IndexLink}>
          <div className={styles.brand}/>
          { title }
        </NavbarLink>

        <ul className="nav navbar-nav">
          {
            navLinks.map( ({id, to, className, text}) => (
              <li key={id} className={className}>
                <NavbarLink to={to}>{text}</NavbarLink>
              </li>
            ))
          }
        </ul>
        {user &&
        <p className={styles.loggedInMessage + ' navbar-text'}>Logged in as <strong>{user.name}</strong>.</p>}
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="https://github.com/cape-io/cape-editor"
               target="_blank" title="View on Github"><i className="fa fa-github"/></a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
