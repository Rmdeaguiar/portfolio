import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import { StoresProvider } from './stores';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <StoresProvider>
      <Home />
    </StoresProvider>
  </React.StrictMode>
);


