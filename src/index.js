import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import
import App from './app';
import './index.css';  // optional: for global styles

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
