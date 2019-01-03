import React from 'react';
import styles from './videosList.css';
import { Link } from 'react-router-dom';
import CardInfo from '../CardInfo/CardInfo';

const videoList_Template = (props) => {
  return props.videos.map((item, i) => (
    <Link to={`/videos/${item.id}`} key={i}>
      <div className={styles.videoListItem_wrapper}>
          <div className={styles.left}
              style={{
                  background:`url(/images/videos/${item.image})`
              }}
          >
              <div></div>
          </div>
          <div className={styles.right}>
            <CardInfo teams={props.teams} teamid={item.team} date={item.date}/>
            <h2>{item.title}</h2>
          </div>
      </div>
    </Link>
  ));
}

export default videoList_Template;