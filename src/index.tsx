import './index.css';
import React from 'react';
import { render } from 'react-dom';
import App from './App';
import AppProvider from './Provider/AppProvider';

render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root') as HTMLDivElement
);