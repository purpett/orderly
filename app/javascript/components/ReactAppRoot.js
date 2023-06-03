import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

export default function ReactAppRoot() {
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
}