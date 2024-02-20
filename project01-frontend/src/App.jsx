import { useState, useEffect } from 'react'
import { primesAndMedian } from './services/api'
import Spheres from './components/Spheres'
import { useLocation } from 'react-router-dom'

import PlotinusSkull from './components/PlotinusSkull'
import Flare from './components/Flare'

function App() {
  const [primes, setPrimes] = useState([])
  const [median, setMedian] = useState([])
  const location = useLocation()

  useEffect(() => {
    (async () => {
      const path = location.pathname
      const numberPath = path.match(/\d+/)[0]
      const withMedian = path.match(/\/median$/)
      try {
        const result = await primesAndMedian(numberPath)
        setPrimes(result.primes)
        if (withMedian) setMedian(result.median)
      } catch(e) {
        console.error(e)
      }
    })()
  }, [location])

  return (
    <>
      <PlotinusSkull/>       
        {/* 
        





        
        Never stop sculpting your own statue: 
        contemplate the immediate simplicity of the Forms; 
        try to bring back the god in you 
        to the divine in all
        to flee alone, towards the solitary one. 
        









        */}
      <Flare/>
      <Spheres
        n={location.pathname.match(/\d+/)[0]}
        primes={primes}
        median={median}
      />
    </>
  )
}

export default App
