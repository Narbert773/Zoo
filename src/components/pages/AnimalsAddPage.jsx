import React from 'react';
import AddAnimalForm from '../ui/AddAnimalForm';

export default function AnimalsAddPage() {
  return (
    <div className="container">
      <div className="row text-center">
        <div className="col-xs-12">
          <h1>Добавь новове животное</h1>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-xs-4">
          <AddAnimalForm />
        </div>
      </div>
    </div>
  );
}
