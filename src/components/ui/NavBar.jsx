import React from 'react';

export default function NavBar({ admin }) {
  console.log(admin);
  return (
    <nav className="navbar navbar-expand" style={{ backgroundColor: '#e3f2fd' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/" style={{ fontSize: '25px' }}>
          Zoo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a
              className="nav-link"
              aria-current="page"
              href="/animals"
              style={{ marginLeft: '40px', fontSize: '20px' }}
            >
              Животные
            </a>
            <a className="nav-link" href="/tarifs" style={{ marginLeft: '40px', fontSize: '20px' }}>
              Тарифы
            </a>
            {admin ? (
              <a
                className="nav-link"
                href="/admins"
                style={{ marginLeft: '50px', fontSize: '20px' }}
              >
                Администрирование
              </a>
            ) : null}
          </div>
          <div className="navbar-nav ms-auto">
            {admin ? null : (
              <a
                className="nav-link"
                href="/auth/login"
                style={{ marginLeft: 'auto', marginRight: '40px', fontSize: '20px' }}
              >
                Вход
              </a>
            )}
            {admin ? (
              <a
                className="nav-link"
                href="/auth/logout"
                style={{ marginLeft: 'auto', marginRight: '40px', fontSize: '20px' }}
              >
                Выход
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  );
}
