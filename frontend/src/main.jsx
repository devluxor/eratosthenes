
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/reset.css'
import './styles/general.css'
import './styles/animations.css'
import './styles/poem.css'

import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    {/* <Routes> */}
      {/* <Route  path='/primes/*' element={<App/>}/> */}
      {/* <Route  path='/' element={<Navigate replace to={'/primes'}/>}/> */}
    {/* </Routes> */}
    <App />
  </Router>
)
