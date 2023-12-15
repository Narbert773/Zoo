import React from 'react';

export default function LoginPage() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    });

    if (response.status === 200) {
      alert('Добро пожаловать в нашу команду ;)');
      window.location.href = '/';
    }

    if (response.status === 400) {
      alert('Упс! Кажется вы не работник зоопарка, продолжить как гость.');
      window.location.href = '/';
    }
  };

  const backgroundStyle = {
    backgroundImage: 'url(https://img.goodfon.ru/original/2560x1440/8/70/tigr-fon-zver-1786.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
  };

  const h1Style = {
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
  };

  return (
    <div style={backgroundStyle}>
      <h1 style={h1Style}>Авторизация</h1>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="mb-3">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label"
              style={{ color: 'white', fontWeight: '600' }}
            >
              Email address
            </label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              style={{ opacity: '0.5' }}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label"
              style={{ color: 'white', fontWeight: '600' }}
            >
              Password
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              style={{ opacity: '0.5' }}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
