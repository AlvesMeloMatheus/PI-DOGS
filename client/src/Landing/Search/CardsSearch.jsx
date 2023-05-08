import React from 'react'
import { useEffect, } from "react"
import { useDispatch, useSelector } from "react-redux"
// ---------- React ---------
import {Provider } from 'react-redux'
import store from '../../Redux/store'
import './Cards.css'
// ---------- CSS -----------

import Card from '../Cards/Card/Card'
import { getDogByName } from '../../Redux/actions';
// ---------- Components ----


const CardsSearch = () => {
  
  const dispatch = useDispatch();
  const dogsByName = useSelector(store => store.dogsByName)

  useEffect((() => {
    const queryParams = new URLSearchParams(window.location.search)
    const name = queryParams.get("name")
    console.log(name)

    
    dispatch(getDogByName(name))
    console.log("effect"+JSON.stringify(dogsByName))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [])

  return (
    <div className='Container'>
      <Provider store={store} >
      {dogsByName.map((dog, index) => (
          <Card
          key={index}
          id={dog.id}
          image={dog.image}
          name={dog.name}
          height={dog.height}
          weight={dog.weight}
          temperament={dog.temperament}
          life_span={dog.life_span}
          />
        ))
      }
      </Provider>
    </div>
  )
}

export default CardsSearch;