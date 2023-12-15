import React, { useState } from 'react';

export default function AnimalCard({ animal, deleteHandler, setAnimalsState, admin }) {
  console.log(admin);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...animal });

  const changeHandler = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const editHandler = async (animalId, formData) => {
    const response = await fetch(`/animals/${animalId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (response.status === 200) {
      const updatedAnimal = await response.json();
      setAnimalsState((prev) =>
        prev.map((animal) => (animal.id === animalId ? updatedAnimal : animal)),
      );
    }
  };

  const handleEditState = async () => {
    if (isEditing) {
      await editHandler(animal.id, formData);
      return setIsEditing(false);
    }
    setIsEditing(true);
  };

  // return (
  //   <div className="card mb-3" style={{ maxWidth: '540px' }}>
  //     <div className="row g-0">
  //       <div className="col-md-4">
  //         <img src={animal.img} className="img-fluid rounded-start" alt={animal.name} />
  //       </div>
  //       <div className="col-md-8">
  //         <div className="card-body">
  //           {isEditing ? (
  //             <>
  //               <input onChange={changeHandler} value={formData.name} name="name" type="text" />
  //               <input
  //                 onChange={changeHandler}
  //                 value={formData.description}
  //                 name="description"
  //                 type="text"
  //               />
  //               <input onChange={changeHandler} value={formData.img} name="img" type="text" />
  //             </>
  //           ) : (
  //             <>
  //               <h5 className="card-title">
  //                 <a href={`/animals/${animal.id}`}>{animal.name}</a>
  //               </h5>
  //               <p className="card-text">{animal.description}</p>
  //             </>
  //           )}
  //         </div>
  //       </div>
  //     </div>
  //     {admin ? (
  //       <>
  //         <button onClick={handleEditState} type="button" className="btn btn-info">
  //           {isEditing ? 'Сохранить' : 'Редактировать'}
  //         </button>
  //         <button onClick={() => deleteHandler(animal.id)} type="button" className="btn btn-danger">
  //           Удалить
  //         </button>
  //       </>
  //     ) : null}
  //   </div>
  // );

  return (
    <div
      className="card mb-3"
      style={{
        minWidth: '450px',
        width: '100%',
        maxHeight: '260px',
        border: '2px solid black',
      }}
    >
      <div className="row g-0">
        <div className="col-md-4" style={{ alignItems: 'center' }}>
          <img
            src={animal.img}
            className="img-fluid rounded-start"
            alt={animal.name}
            style={{ width: '100%', objectFit: 'cover', minHeight: '150px', marginTop: '0' }}
          />
        </div>
        <div className="col-md-8">
          <div
            className="card-body"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              paddingTop: '0',
            }}
          >
            {isEditing ? (
              <>
                <input
                  onChange={changeHandler}
                  value={formData.name}
                  name="name"
                  type="text"
                  style={{ marginBottom: '5px' }}
                />
                <input
                  onChange={changeHandler}
                  value={formData.description}
                  name="description"
                  type="text"
                  style={{ marginBottom: '5px' }}
                />
                <input
                  onChange={changeHandler}
                  value={formData.img}
                  name="img"
                  type="text"
                  style={{ marginBottom: '5px' }}
                />
              </>
            ) : (
              <>
                <h5 className="card-title" style={{ marginBottom: '15px' }}>
                  <a href={`/animals/${animal.id}`} style={{ textDecoration: 'none' }}>
                    {animal.name}
                  </a>
                </h5>
                <p
                  className="card-text"
                  style={{
                    flex: 1,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    maxHeight: '100px',
                  }}
                >
                  {animal.description}
                </p>
              </>
            )}
            {admin ? (
              <div>
                <button
                  onClick={handleEditState}
                  type="button"
                  className="btn btn-info"
                  style={{ width: '200px', marginBottom: '10px' }}
                >
                  {isEditing ? 'Сохранить' : 'Редактировать'}
                </button>
                <button
                  onClick={() => deleteHandler(animal.id)}
                  type="button"
                  className="btn btn-danger"
                  style={{ width: '200px', marginTop: '0' }}
                >
                  Удалить
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
