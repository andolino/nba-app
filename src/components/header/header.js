import React from 'react';
import style from './header.css';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import SideNav from './Sidenav/sidenav';

const Header = (props) => {

  const navBars = () => (
    <div className={style.bars}>
      <FontAwesome name="bars" 
        onClick={props.onOpenNav}
        style={{
          color:'#dfdfdf',
          padding: '13px',
          cursor: 'pointer',
        }}
      />
    </div>
  );
  
  const logo = () => {
    return (
      <Link to="/">
        <img src="/images/nba_logo.png" className={style.logo} alt="nbs logo"/>
      </Link>
    );
  }

  return(
    <header className={style.header}>
      <SideNav {...props}/>
      <div className={style.headerOth}>
        {navBars()}
        {logo()}
      </div>
    </header>
  );


}

export default Header;