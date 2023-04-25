import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client'
import { UserContext, InvoiceContext } from './contexts/contexts'
import initialInvoiceContext from './contexts/initialInvoiceContext';
import initialUserContext from './contexts/initialUserContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContext.Provider value={initialUserContext}>
      <InvoiceContext.Provider value={initialInvoiceContext}>
        <App />
      </InvoiceContext.Provider>
    </UserContext.Provider>

  </React.StrictMode>
);
