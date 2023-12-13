import React from 'react';
import NavBar from './ui/NavBar';

export default function App({ children }) {
  return (<div classname="container">
    <NavBar />
    {children}
  </div>
  )
}
