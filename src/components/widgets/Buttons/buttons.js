import React from 'react';
import { Link } from 'react-router-dom';
import styles from './buttons.css';

const buttons = (props) => {
  let template = null;
  switch (props.type) {
      case 'loadmore':
        template = (
          <div onClick={props.loadMore} className={styles.blue_btn}>
              {props.cta}
          </div>
        );        
        break;
      case 'linkTo': 
        template = (
            <Link className={styles.blue_btn} to={props.linkTo}>
              {props.cta}
            </Link>
        ); 
        break;
      default:
        template = null;
        break;
    }
    return template;
}

export default buttons;