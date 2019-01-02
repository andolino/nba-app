import React from 'react';
import { Link } from "react-router-dom";
import style from './footer.css'
import { CURRENT_YR } from "../../config";

const Footer = () => {
  return(
    <div>
      <div className={style.footer}>
        <Link to="/" className={style.logo}>
          <img src="/images/nba_logo.png" className={style.logo} alt="nbs logo"/>      
        </Link>
        <div className={style.right}>
          @NBA {CURRENT_YR} All rights reserved.
        </div>
      </div>      
    </div>
  );
}

export default Footer;