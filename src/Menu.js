import React from 'react';
import './menu.css';
import WebFont from 'webfontloader';
import { AiFillHeart } from "@react-icons/all-files/ai/AiFillHeart";
import { BsFillDiamondFill } from "@react-icons/all-files/bs/BsFillDiamondFill";
import { IoLogoUsd } from "@react-icons/all-files/io/IoLogoUsd";
WebFont.load({
  google: {
    families: ['New Tegomin', 'Chilanka', 'Press Start 2P']
  }
});

export default class Menu extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      hearts: 0,
      gems: 0,
      usd: 0.00,
      display: props.display
    }
  }
  render(){
    return(
      <div id="menu">
        <div id="currency">
          <p>{this.state.hearts} <AiFillHeart/></p>
          <p>{this.state.gems} <BsFillDiamondFill/></p>
          <p><IoLogoUsd/>{this.state.usd}</p>
        </div>
        <h1>Trivia Beat</h1>
        <button value="test">Play</button>
        <button value="test">Contribute</button>
        <button value="test">Leaderboard</button>
        <button value="test">Store</button>
        <button value="test">Account</button>
      </div>
    );

  }
}
