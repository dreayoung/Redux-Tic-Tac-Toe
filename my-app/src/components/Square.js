import React from 'react';

const Square = ({marker, onclick}) => {
  return ( 
    <div className="square" onClick={() => onclick()}>
      {marker}
    </div>
  )
};

export default Square
