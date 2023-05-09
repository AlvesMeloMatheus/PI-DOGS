import React from 'react';
// ---------- React --------

import "./Pagination.css";
import Card from '../Cards/Card/Card';
// ---------- CSS ----------


// ---------- Components ---

const Pagination = ({dogsData}) => {
  return (
    <div>
        {dogsData.map((dog, index) => {
            return (
                <Card
                    key={index}
                    name={dog.name}
                    image={dog.image}
                    temperament={dog.temperament}
                    weight={dog.weight}
                />
            );
        })}
    </div>
  )
}

export default Pagination;