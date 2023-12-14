import React from 'react';
import AnimalCard from '../ui/AnimalCard';

export default function AnimalsPage({ animals }) {
  return (
    <div className="container m-2">
      {animals.map((animal) => (
        <div key={animal.id} className="row justify-content-center">
          <div className="col-8">
            <AnimalCard animal={animal} />
          </div>
        </div>
      ))}
    </div>
  );
}
