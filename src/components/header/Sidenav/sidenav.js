import React from 'react';
import Sidenav from 'react-simple-sidenav';
import SideNavItem from './sidenav_items';

const SideNav = (props) => {
  return (
    <div>
      <Sidenav
        showNav={props.showNav}
        onHideNav={props.onHideNav}
        navStyle={{
          background: '#242424',
          maxWidth: '220px'
        }}
      >
        <SideNavItem/>
      </Sidenav>
    </div>
  );
};

export default SideNav;