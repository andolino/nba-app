import React from 'react';

const Userhoc = (WrapContent, arg1) => {
  return (props) => (
    <div>
      <WrapContent {...props}/>
    </div>
  )
}

export default Userhoc;