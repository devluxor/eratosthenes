import { useState, useEffect } from 'react'
import { primesAndMedian } from './services/api'
import Spheres from './components/Spheres'
import { useMatch, useNavigate } from 'react-router-dom'

import PlotinusSkull from './components/PlotinusSkull'
import Flare from './components/Flare'

function App() {
  const [primes, setPrimes] = useState([])
  const [median, setMedian] = useState([])
  const urlMatch = useMatch('/:number/*')
  const navigate = useNavigate()
  
  useEffect(() => {
    (async () => {
      if (!urlMatch) return

      const {number, ['*']: withMedian} = urlMatch.params
      const validNumber = number.match(/^\d+$/)
      const areValidPaths = validNumber && (withMedian === '' || withMedian === 'median')

      if (!areValidPaths) {
        navigate(validNumber ? `/${number}` : '/')
        console.error('Invalid URL path: ', urlMatch.params)
        return
      }

      try {
        const result = await primesAndMedian(number)
        if (!result) return
        setPrimes(result.primes)
        if (withMedian) setMedian(result.median)
      } catch(e) {
        console.error(e)
      }
    })()
  }, [urlMatch, navigate])

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
        primes={primes}
        median={median}
      />
    </>
  )
}

export default App
