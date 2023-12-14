import React, { useState } from 'react';
import TarifCard from '../ui/TarifCard';

export default function TarifsPage({ tarifs }) {
  const [setTarifs, setTarifState] = useState(tarifs);
  return (
    <div className="container m-2">
      {setTarifs?.map((tarif) => (
        <div key={tarif.id} className="row justify-content-center">
          <div className="col-8">
            <TarifCard tarif={tarif} setTarifState={setTarifState} />
          </div>
        </div>
      ))}
    </div>
  );
}
