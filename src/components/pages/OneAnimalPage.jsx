// import React from 'react';

// export default function OneAnimalPage({ oneAnimal }) {
//   return (
//     <div className="card mb-3">
//       <div className="card-body">
//         <h5 className="card-title">{oneAnimal.name}</h5>
//         <div className="image-container">
//           {oneAnimal.Images.map((image, index) => (
//             <img key={index} src={image.link} alt={index + 1} />
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// }

import React from 'react';

export default function OneAnimalPage({ oneAnimal }) {
  return (
    <div
      className="card mb-3"
      style={{
        display: 'flex',
        justifyContent: 'center',
        border: 'none',
      }}
    >
      <div
        className="card"
        style={{
          border: 'none',
        }}
      >
        <h5
          className="card-title"
          style={{
            margin: 'auto',
            marginTop: '50px',
            fontSize: '50px',
          }}
        >
          {oneAnimal.name}
        </h5>
        <div
          className="image-container"
          style={{
            display: 'flex',
            marginTop: '250px',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          {oneAnimal.Images.map((image, index) => (
            <div
              key={index}
              style={{
                border: '1px solid #000',
                padding: '5px',
                transform: 'scale(3)',
              }}
            >
              <img
                src={image.link}
                alt={index + 1}
                style={{
                  width: '100px',
                  height: '100px',
                  objectFit: 'cover',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
