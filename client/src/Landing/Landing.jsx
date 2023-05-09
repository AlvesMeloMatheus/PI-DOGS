import './Landing.css';
//--------- ^^ css ^^ ----------------

import React from 'react';
import { Link } from 'react-router-dom';
import {Provider } from 'react-redux'
import store from '../Redux/store'
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { getTemperaments } from '../Redux/actions';
// ------------ React ----------------

const Landing = () => {
    
  const dispatch = useDispatch();

  useEffect((() => {
    dispatch(getTemperaments())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [])

  return (
    <div className='LandingCSS'>
            <Provider store={store} >

        <Link to="/home">
            <button id='Welcome'>WELCOME</button>
        </Link>
        </Provider>
    </div>
    
  )
}

export default Landing;