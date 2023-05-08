import React from 'react'
// ----------- React -----------

import './Card.css';
// ----------- CSS -------------

import { NavLink } from 'react-router-dom';
// ----------- Componentes -----

const Card = ({name, image, temperament, weight, id}) => {
  return (
    <div className='BorderCard'>

        <h2 id='CardName'>{name}</h2>

        <img className='DogImg' src={image} alt={image} />

        <div className='BorderDogCharacter'>

            <NavLink to={`/dogs/${id}`}>
              <button className='BtnDetail'>Detail:</button>
            </NavLink>

            <h4 id='CharacterT'>Temperament: {temperament}</h4>
            
            <h4 id='CharacterW'>Weight: {weight}</h4>
        </div>
    </div>
  )
}

export default Card;