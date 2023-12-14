import React from 'react';

export default function AnimalCard({ animal }) {
  return (
    <div className="card mb-3" style={{ maxWidth: '540px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={animal.img} className="img-fluid rounded-start" alt={animal.name} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              <a href={`/animals/${animal.id}`}>{animal.name}</a>
            </h5>
            <p className="card-text">{animal.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
