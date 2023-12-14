import React from 'react';

export default function AddAnimalForm() {
  return (
    <form action="/animals" method="POST">
      <div className="mb-3">
        <label htmlFor="animalTitleId" className="form-label">
          Название животного
        </label>
        <input name="title" type="text" className="form-control" id="animalTitleId" />
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
