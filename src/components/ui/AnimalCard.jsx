import React, { useState } from 'react';

export default function AnimalCard({ animal, deleteHandler, setAnimalsState }) {
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

  return (
    <div className="card mb-3" style={{ maxWidth: '540px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={animal.img} className="img-fluid rounded-start" alt={animal.name} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            {isEditing ? (
              <>
                <input onChange={changeHandler} value={formData.name} name="name" type="text" />
                <input
                  onChange={changeHandler}
                  value={formData.description}
                  name="description"
                  type="text"
                />
                <input onChange={changeHandler} value={formData.img} name="img" type="text" />
              </>
            ) : (
              <>
                <h5 className="card-title">
                  <a href={`/animals/${animal.id}`}>{animal.name}</a>
                </h5>
                <p className="card-text">{animal.description}</p>
              </>
            )}
          </div>
        </div>
      </div>
      <button onClick={handleEditState} type="button" className="btn btn-info">
        {isEditing ? 'Сохранить' : 'Редактировать'}
      </button>
      <button onClick={() => deleteHandler(animal.id)} type="button" className="btn btn-danger">
        Удалить
      </button>
    </div>
  );
}
