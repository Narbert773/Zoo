import React from 'react';

export default function AdminsPage() {
  return (
    <>
      <h1>Добро пожаловать в команду нашего зоопарка!</h1>
      <div>
        <a href="/animals">Редактирование животных</a>
      </div>
      <div>
        <a href="/tarifs">Редактирование тарифов</a>
      </div>
      <div>
        <a href="/animals/add">Добавить новое животное</a>
      </div>
    </>
  );
}
