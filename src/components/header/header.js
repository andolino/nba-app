import React from 'react';
import style from './header.css';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

const navBars = () => (
  <div className={style.bars}>
    <FontAwesome name="bars" 
      style={{
        color:'#dfdfdf',
        padding: '13px',
        cursor: 'pointer',
      }}
    />
  </div>
);

const logo = () => (
  <Link to="/">
    <img src="/images/nba_logo.png" className={style.logo} alt="nbs logo"/>
  </Link>
);

const Header = () => {
  return(
    <header className={style.header}>
      <div className={style.headerOth}>
        {navBars()}
        {logo()}
      </div>
    </header>
  );
}

export default Header;