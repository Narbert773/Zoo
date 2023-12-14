import React from 'react';
import TarifCard from '../ui/TarifCard';

export default function TarifsPage({ tarifs }) {
  return (
    <div className="container m-2">
      {tarifs.map((tarif) => (
        <div key={tarif.id} className="row justify-content-center">
          <div className="col-8">
            <TarifCard tarif={tarif} />
          </div>
        </div>
      ))}
    </div>
  );
}
