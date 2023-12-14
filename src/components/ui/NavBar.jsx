import React from 'react';

export default function NavBar() {
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
          </div>
          <div className="navbar-nav ms-auto">
            <a
              className="nav-link"
              href="/register"
              style={{ marginLeft: 'auto', marginRight: '40px', fontSize: '20px' }}
            >
              Вход
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
