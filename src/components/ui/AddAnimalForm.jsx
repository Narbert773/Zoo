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
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="animalTitleId" className="form-label">
          Название животного
        </label>
        <input name="name" type="text" className="form-control" id="animalTitleId" />
      </div>
      <div className="mb-3">
        <label htmlFor="animalDescriptionId" className="form-label">
          Описание
        </label>
        <input name="description" type="text" className="form-control" id="animalDescriptionId" />
      </div>
      <div className="mb-3">
        <label htmlFor="animalCoverId" className="form-label">
          Изображение
        </label>
        <input name="img" type="text" className="form-control" id="animalCoverId" />
      </div>
      <button type="submit" className="btn btn-primary">
        Добавить
      </button>
    </form>
  );
}
