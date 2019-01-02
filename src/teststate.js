import React from 'react';
import Userhoc from './userHoc';

const Teststate = (props) => {
  console.log(props);
  return(
    <div>
      User 1
    </div> 
  )
}

export default Userhoc(Teststate, 'Hello');