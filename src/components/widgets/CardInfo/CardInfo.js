import React from 'react';
import FontAwesome from 'react-fontawesome';
import styles from './cardInfo.css';

const CardInfo = (props) => {

  const requestTeam = (team, id) => {
    let data = team.find((item) => {
      return item.id === id;
    });

    if (data) {
      return data.name;
    }else{
      return null;
    }
  }

  return (
    <div className={styles.cardNfo}>
      <span className={styles.teamName}>
        {requestTeam(props.teams, props.teamid)}
      </span>
      <span className={styles.date}>
        <FontAwesome name="clock-o" /> {props.date}
      </span>
    </div>
  )

}

export default CardInfo;