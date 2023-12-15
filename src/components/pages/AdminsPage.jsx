import React from 'react';

export default function AdminsPage() {
  return (
    <div
      style={{
        height: '100vh',
        backgroundImage:
          'url(https://poknok.art/uploads/posts/2022-12/1669873517_6-poknok-art-p-gepard-cherno-beloe-6.jpg)',
      }}
    >
      <h1 style={{ width: 'fit-content', margin: 'auto', color: 'white', fontWeight: '600' }}>
        Добро пожаловать в команду нашего зоопарка!
      </h1>
      <div
        style={{
          width: 'fit-content',
          margin: 'auto',
          marginTop: '200px',
          marginRight: '300px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          minHeight: '300px',
        }}
      >
        <div>
          <a
            style={{
              textDecoration: 'none',
              fontSize: '35px',
              lineHeight: '30px',
              fontWeight: '600',
              color: 'white',
            }}
            href="/animals"
          >
            Редактирование животных
          </a>
        </div>
        <div>
          <a
            style={{
              textDecoration: 'none',
              fontSize: '35px',
              lineHeight: '30px',
              fontWeight: '600',
              color: 'white',
            }}
            href="/tarifs"
          >
            Редактирование тарифов
          </a>
        </div>
        <div>
          <a
            style={{
              textDecoration: 'none',
              fontSize: '35px',
              lineHeight: '30px',
              fontWeight: '600',
              color: 'white',
            }}
            href="/animals/add"
          >
            Добавить новое животное
          </a>
        </div>
      </div>
    </div>
  );
}
