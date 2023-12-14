import React from 'react';

export default function TarifCard({ tarif }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{tarif.name}</h5>
        <p className="card-text">{tarif.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Цена: {tarif.price}</li>
      </ul>
      <div className="card-body">
        <button type="button" className="btn btn-primary">
          Редактировать
        </button>
      </div>
    </div>
  );
}
