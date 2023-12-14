import React from 'react';

export default function OneAnimalPage({ oneAnimal }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{oneAnimal.name}</h5>
        <div className="image-container">
          {oneAnimal.Images.map((image, index) => (
            <img key={index} src={image.link} alt={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
}
