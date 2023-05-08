import './Detail.css'
// ------------- CSS ---------

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// --------------- React ----------------------

import { useDispatch, useSelector } from "react-redux"
import {Provider } from 'react-redux'
// --------------- Redux ----------------------

import store from '../../Redux/store';
import { getDogsDetail } from '../../Redux/actions';

const Detail = () => {

  const { idRaza } = useParams();
  // console.log(useParams()) ---> nada mas para acordar que hace;

  const dispatch = useDispatch();
  const dogDetail = useSelector(store => store.dogDetail)

  useEffect((() => {
    dispatch(getDogsDetail(idRaza))
    console.log("effect"+JSON.stringify(dogDetail))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [idRaza])

  return (
    <div className='DetBox'>

      <Provider store={store} >
        <h4 id='DetId'>{dogDetail.id}.</h4>

        <h2 id='DetName'>{dogDetail.name}</h2>

        <img id='DetImg' src={dogDetail.image} alt={dogDetail.name} />
        
        <div className='DetBoxChar'>
            <h3 id='DetH'>Height: {dogDetail.height}</h3>
            <h3 id='DetW'>Weight: {dogDetail.weight}</h3>
            <h3 id='DetT'>Temperaments: {dogDetail.temperament}</h3>
            <h3 id='DetL'>Life Span: {dogDetail.life_span}</h3>
        </div>
      </Provider>

    </div>
  )

}

export default Detail;