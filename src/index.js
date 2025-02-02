import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App /> {/* App est utilisé ici pour être rendu dans le DOM */}
  </React.StrictMode>,
  document.getElementById("root")
);