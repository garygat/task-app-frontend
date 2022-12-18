import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppDeleted from './AppDeleted';
import NavBar from './components/navbar';
import Button from 'react-bootstrap/Button';
import About from './About';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<App />}
        />
        <Route
          path='/deleted'
          element={<AppDeleted />}
        />
        <Route
          path='/about'
          element={<About />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
