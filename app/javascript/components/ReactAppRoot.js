import React from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

export default function ReactAppRoot() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  )
}