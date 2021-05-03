import React from 'react';
import './contribute.css';


export default function Contribute({setDisplay}){

  return(
    <div>
      <h1>Add Questions</h1>
      <button onClick={() => setDisplay(0)}>Go back</button>
    </div>
  );


}
