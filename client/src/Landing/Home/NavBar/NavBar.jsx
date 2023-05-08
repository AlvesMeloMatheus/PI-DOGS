import React from 'react';
import { NavLink } from 'react-router-dom';

import {Provider } from 'react-redux'
import store from '../../../Redux/store'

import "./NavBar.css";


import SearchBar from './SearchBar/SearchBar';

const NavBar = () => {


  return (
    <div>

        <div >

            <NavLink to='/home'>
              <button id='BtnHOME' >Home</button>
            </NavLink>

            <NavLink to='/dogs/create'>
              <button id='BtnCREATE' >Create your Dog</button>
            </NavLink>

            <NavLink to='/'>
              <button id='BtnEXIT' >Exit</button>
            </NavLink>
        </div>

        <div>
        <Provider store={store} > 
            <SearchBar />
            </Provider>
        </div>

    </div>
  )
}

export default NavBar;