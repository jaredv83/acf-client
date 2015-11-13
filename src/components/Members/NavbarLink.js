import React from 'react';
import { Link } from 'react-router';

function NavbarLink({to, href, className, component, children}) {
  const Comp = component || Link;

  return (
    <span>
      { href ?
        <a href={href}>Yo</a>
        :
        <Comp to={to} className={className} activeStyle={{
          color: '#A94545',
        }}>
          {children}
        </Comp>
      }
    </span>
  );
}


export default NavbarLink;
