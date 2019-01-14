import React from 'react';
import styles from '../videosList.css';
import VideosListTemplate from '../videosListTemplate';

const videoRelated = (props) => (
    <div className={styles.relatedWrapper}>
      <VideosListTemplate
        articles={props.data}
        teams={props.teams}
      />
    </div>
  );

export default videoRelated;