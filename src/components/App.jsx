import React from 'react';
import NavBar from './ui/NavBar';

export default function App({ children, admin }) {
  return (
    <div>
      <NavBar admin={admin} />
      {children}
    </div>
  );
}
