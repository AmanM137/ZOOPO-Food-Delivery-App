import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './context/StoreConstext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>{/*enabling the use of routing throughout the app*/}
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </BrowserRouter>
)
