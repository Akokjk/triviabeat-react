import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu'
import './index.css';
import useSound from 'use-sound';
import boopSfx from './click.mp3';
function App(){
  // Declare a new state variable, which we'll call "count"
  const [display, setDisplay] = useState(true);
  const [play] = useSound(boopSfx, {
    volume: .05,
    playbackRate: 4,
    interrupt: true,
  });

  return(
    <div onClick={()=> {
      setDisplay(display? false: true);
      console.log(display)
      //display? document.getElementById("menu").style.visibility = 'hidden': document.getElementById("menu").style.visibility = 'visible';
      play();
    }}>
        {display && <Menu/>}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
