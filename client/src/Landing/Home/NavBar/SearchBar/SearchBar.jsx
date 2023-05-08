import React, { useState } from "react";
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import {Provider } from 'react-redux'
import store from '../../../../Redux/store'
import { getDogByName } from '../../../../Redux/actions';
import "./SearchBar.css"

import { NavLink } from 'react-router-dom';


const SearchBar = ({onSearch}) => {

    const dispatch = useDispatch();

    const [dog, setDog] = useState("");

    const handleChange = (event) => {
        const {value} = event.target;

        setDog(value);
    }


    function onSearch () {
     console.log(dog)
      // vaciar el input TODO
  
    }

  return (
    <div> 

        <input 
        type="search"
        id='search' 
        placeholder='Insert a name' 
        onChange={handleChange}
        />
        <NavLink to={`/search?name=${dog}`}>
          <button id="BtnSearch" onClick={onSearch}>🔎</button>
        </NavLink>

    </div>
  )
}

export default SearchBar;