import React from 'react';
import './contribute.css';
import { RiArrowGoBackFill } from "@react-icons/all-files/ri/RiArrowGoBackFill";
import { FaCheck } from "@react-icons/all-files/fa/FaCheck";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
//import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
export default function Contribute({setDisplay}){

  return(
    <div>
      <div id="header">
        <button>Add</button>
        <button>Verify</button>
        <button id="back" onClick={() => setDisplay(0)}><RiArrowGoBackFill /></button>
      </div>
      <div id="verify">
        <div id="question">
          <div class="title">
            What is the time and what is the meaning of life with the big pie in the sky?
          </div>
          <div class="option">
            <div class="list"><FaTimes/></div>
            <div class="content">A</div>
          </div>
          <div class="option">
            <div class="list"><FaTimes/></div>
            <div class="content">A</div>
          </div>
          <div class="option">
            <div class="list"><FaCheck/></div>
            <div class="content">A</div>
          </div>
          <div class="option">
            <div class="list"><FaTimes/></div>
            <div class="content">A</div>
          </div>
          <div class="choice">
            <div class="a">
              <FaCheck/>
            </div>
            <div class="b">
              <FaTimes/>
            </div>
          </div>
        </div>

      </div>

    </div>
  );


}
