import React from 'react';
import { Link } from 'react-router-dom';
import Fontawesome from 'react-fontawesome';
import style from './sidenav.css';

const SideNavItems = () => {
  
  const items = [
    {
      s_sheet: style.option,
      url: '/',
      icon: 'home',
      text: 'Home'
    },
    {
      s_sheet: style.option,
      url: '/news',
      icon: 'file-text-o',
      text: 'News'
    },
    { 
      s_sheet: style.option,
      url: '/videos',
      icon: 'play',
      text: 'Videos'
    },
    { 
      s_sheet: style.option,
      url: '/sign-in',
      icon: 'sign-in',
      text: 'Sign In'
    },
    { 
      s_sheet: style.option,
      url: '/sign-out',
      icon: 'sign-out',
      text: 'Sign out'
    }
  ];

  const showNav = () => {
    return items.map((item, i) => {
      return (
        <div key={i} className={item.s_sheet}>
          <Link to={item.url}>
            <Fontawesome
              name={item.icon}
            />
            {item.text}
          </Link>
        </div>
      )
    });
  }

  return (
    <div>
      {showNav()}
    </div>
  );

  
};

export default SideNavItems;