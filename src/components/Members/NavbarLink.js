import React from 'react';
import { Link } from 'react-router';

function NavbarLink({to, className, component, children}) {
  const Comp = component || Link;

  return (
    <Comp to={to} className={className} activeStyle={{
      color: '#A94545',
    }}>
      {children}
    </Comp>
  );
}


export default NavbarLink;
