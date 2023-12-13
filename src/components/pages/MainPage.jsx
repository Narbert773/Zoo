import React from 'react';

export default function MainPage({ hello }) {
  const backgroundImageStyle = {
    backgroundImage: `url('https://m.media-amazon.com/images/M/MV5BZDAzN2FhMTgtMzg5YS00ZDFkLWFiMTUtZTVmMzk4ZjEyMmJmXkEyXkFqcGdeQXVyNjkzMjkzMTY@._V1_.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // Высота экрана
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white', // Цвет текста
  };
  const textContainerStyle = {
    marginBottom: '450px',
    marginRight: '359px',
    color: 'transparent',
    fontSize: '25px' // Устанавливаем отступы (можете изменить значение по своему усмотрению)
  };

  return (
    <div style={backgroundImageStyle}>
      <div style={textContainerStyle}>
        Добро пожаловать в наш {hello}
      </div>
    </div>
  );
}
