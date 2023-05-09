import React from 'react'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {Provider } from 'react-redux'
import store from '../../Redux/store'
// ---------- React ---------
import './Cards.css'
// ---------- CSS -----------

import Card from './Card/Card'
import PaginationCards from './PaginationCards.jsx';
import { getAllDogs } from '../../Redux/actions';
import FilterAndOrderBar from './FilterAndOrderBar/FilterAndOrderBar'
// ---------- Components ----


const Cards = () => {
  
  const dispatch = useDispatch();
  const dogs = useSelector(store => store.dogs)

  useEffect((() => {
    dispatch(getAllDogs())
    console.log("effect"+JSON.stringify(dogs))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [])

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);


  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = Array.from(dogs).slice(firstPostIndex, lastPostIndex)

  return (
    <div className='Container'>
      <Provider store={store} >

        <FilterAndOrderBar />

      {currentPosts.map((dog, index) => (
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
      <div id='NumPages'>
        <PaginationCards  
          totalPosts={dogs.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
      </Provider>
    </div>
  )
}

export default Cards;