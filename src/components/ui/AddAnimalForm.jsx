import React from 'react';

export default function AddAnimalForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    const response = await fetch('/animals', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.status === 200) {
      window.location.href = '/animals';
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label
            style={{ color: 'white', fontWeight: '600' }}
            htmlFor="animalTitleId"
            className="form-label"
          >
            Название животного
          </label>
          <input
            style={{ opacity: '0.5' }}
            name="name"
            type="text"
            className="form-control"
            id="animalTitleId"
          />
        </div>
        <div className="mb-3">
          <label
            style={{ color: 'white', fontWeight: '600' }}
            htmlFor="animalDescriptionId"
            className="form-label"
          >
            Описание
          </label>
          <input
            style={{ opacity: '0.5' }}
            name="description"
            type="text"
            className="form-control"
            id="animalDescriptionId"
          />
        </div>
        <div className="mb-3">
          <label
            style={{ color: 'white', fontWeight: '600' }}
            htmlFor="animalCoverId"
            className="form-label"
          >
            Изображение
          </label>
          <input
            style={{ opacity: '0.5' }}
            name="img"
            type="text"
            className="form-control"
            id="animalCoverId"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Добавить
        </button>
      </form>
    </div>
  );
}
