import './Landing.css';
//--------- ^^ css ^^ ----------------

import React from 'react';
import { Link } from 'react-router-dom';
// ------------ React ----------------

const Landing = () => {
  return (
    <div className='LandingCSS'>
        <Link to="/home">
            <button id='Welcome'>WELCOME</button>
        </Link>
    </div>
  )
}

export default Landing;