import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react'
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Auth0Provider
      domain={import.meta.env.VITE_domain}
      clientId={import.meta.env.VITE_clientId}
      authorizationParams={{
        redirect_uri: 'http://localhost:5173/calculate'
      }}
    >
      <App />
    </Auth0Provider>
  </Router>
)
