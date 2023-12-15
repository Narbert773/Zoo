import React from 'react';
import AddAnimalForm from '../ui/AddAnimalForm';

export default function AnimalsAddPage() {
  return (
    <div
      style={{
        backgroundImage:
          'url(https://images.pling.com/img/00/00/59/57/30/1579568/cfb1b56890a91da19e99e1b9e81ab30684a0316fe6e6e9eed4e0110ff7adfda60b97.jpg)',
        height: '100vh',
      }}
    >
      <div className="row text-center">
        <div className="col-xs-12">
          <h1 style={{ color: 'white', fontWeight: '600' }}>Добавь новое животное</h1>
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
