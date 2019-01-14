import React from 'react';
import TeamInfo from '../../elements/teamInfo';

const header = (props) => {

  

  const teamNfo = (team) => {
    return team ? 
          ( <TeamInfo team={team} /> ) 
          : null
          
  }

  return (
    <div>
      {teamNfo(props.teamData)}
    </div>
  );
};

export default header;