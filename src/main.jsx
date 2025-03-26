import React from 'react';
import ReactDOM from 'react-dom/client'; // Обратите внимание на изменение здесь
import App from './App';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Используйте createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
