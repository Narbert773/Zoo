import React, { useState } from 'react';
import AnimalCard from '../ui/AnimalCard';

export default function AnimalsPage({ animals, admin }) {
  const [animalsState, setAnimalsState] = useState(animals);

  const deleteHandler = async (animalId) => {
    const response = await fetch(`/animals/${animalId}`, { method: 'DELETE' });
    if (response.status === 200) {
      setAnimalsState((prev) => prev.filter((animal) => animal.id !== animalId));
    } else if (response.status === 500) {
      const message = await response.json();
      console.log(message.name);
    }
  };
  // return (
  //   <div className="container m-2">
  //     {animalsState?.map((animal) => (
  //       <div key={animal.id} className="row justify-content-center">
  //         <div className="col-8">
  //           <AnimalCard
  //             animal={animal}
  //             deleteHandler={deleteHandler}
  //             setAnimalsState={setAnimalsState}
  //             admin={admin}
  //           />
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // );

  const backgroundStyle = {
    backgroundImage: 'url(https://wallup.net/wp-content/uploads/2016/01/136687-animals-tiger.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
    margin: '0',
  };

  return (
    <div style={backgroundStyle}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        {animalsState?.map((animal) => (
          <div key={animal.id} style={{ margin: '5px' }}>
            <AnimalCard
              animal={animal}
              deleteHandler={deleteHandler}
              setAnimalsState={setAnimalsState}
              admin={admin}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
