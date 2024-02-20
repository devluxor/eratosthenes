// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import './styles/reset.css'
import './styles/general.css'
import './styles/animations.css'
import './styles/vertical.css'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Router>
    <App />
  </Router>
  /* </React.StrictMode>, */
)
