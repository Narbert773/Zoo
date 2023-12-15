import React, { useState } from 'react';
import TarifCard from '../ui/TarifCard';

export default function TarifsPage({ tarifs, admin }) {
  const [setTarifs, setTarifState] = useState(tarifs);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundImage:
          'url(https://img.freepik.com/free-photo/billie-dollar-money-background_1150-749.jpg)',
        height: '100%',
        width: '100%',
      }}
    >
      {setTarifs?.map((tarif) => (
        <div key={tarif.id} className="row justify-content-center">
          <div className="col-8">
            <TarifCard tarif={tarif} setTarifState={setTarifState} admin={admin} />
          </div>
        </div>
      ))}
    </div>
  );
}
