import React, { useState } from 'react';

export default function TarifCard({ tarif, setTarifState, admin }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...tarif });

  const changeHandler = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const editHandler = async (tarifId, formTarifData) => {
    const response = await fetch(`/tarifs/${tarifId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formTarifData),
    });
    if (response.status === 200) {
      const updatedTarif = await response.json();
      console.log(updatedTarif);
      setTarifState((prev) => prev.map((t) => (t.id === tarifId ? updatedTarif : t)));
    }
  };

  const handleEditState = async () => {
    if (isEditing) {
      await editHandler(tarif.id, formData);
      return setIsEditing(false);
    }
    setIsEditing(true);
  };

  return (
    <div
      className="card"
      style={{
        width: '18rem',
        height: '250px',
      }}
    >
      {isEditing ? (
        <>
          <input onChange={changeHandler} value={formData.name} name="name" type="text" />
          <input
            onChange={changeHandler}
            value={formData.description}
            name="description"
            type="text"
          />
          <input onChange={changeHandler} value={formData.price} name="price" type="text" />
        </>
      ) : (
        <>
          <div className="card-body">
            <h5 className="card-title">{tarif.name}</h5>
            <p className="card-text">{tarif.description}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Цена: {tarif.price}</li>
          </ul>
        </>
      )}
      <div className="card-body">
        {admin ? (
          <button onClick={handleEditState} type="button" className="btn btn-primary">
            {isEditing ? 'Сохранить' : 'Редактировать'}
          </button>
        ) : null}
      </div>
    </div>
  );
}
