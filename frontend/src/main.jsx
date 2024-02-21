
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/reset.css'
import './styles/general.css'
import './styles/animations.css'
import './styles/poem.css'

import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router basename='/primes'>
    <App />
  </Router>
)
