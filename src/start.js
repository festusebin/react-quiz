import React from 'react';
import { Link } from 'react-router-dom';

function StartScreen() {
  return (
    <div id="start">
      <div id="js-box">
        <span id="ui-black"></span>
        <h1>JS</h1>
      </div>
      <div id="pro-box">
        <h1>PRO</h1>
        <span id="ui-green"></span>
        <Link to="/web">Start Now</Link>
      </div>
    </div>
  )
}

export default StartScreen;