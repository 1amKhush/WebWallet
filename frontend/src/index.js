import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from '../src/styles/GlobalStyles';
import { GlobalProvider } from './context/golbalContext';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
      <GlobalProvider>
        <App />
      </GlobalProvider>
  </React.StrictMode>
);

