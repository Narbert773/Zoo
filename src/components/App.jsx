import React from 'react';
import NavBar from './ui/NavBar';

export default function App({ children, admin }) {
  return (
    <div style={{ height: '100%' }}>
      <NavBar admin={admin} />
      {children}
    </div>
  );
}
