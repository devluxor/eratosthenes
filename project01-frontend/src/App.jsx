import { useState, useEffect } from 'react'
import { primesAndMedian } from './services/api'
import Spheres from './components/Spheres'
import { useMatch, useNavigate } from 'react-router-dom'
import { randomNumber } from './utils/helpers'

import PlotinusSkull from './components/PlotinusSkull'
import Flare from './components/Flare'

import { MAX_NUMBER } from './utils/variables'
import Button from './components/Button'

function App() {
  const [primes, setPrimes] = useState([])
  const [median, setMedian] = useState([])
  const urlMatch = useMatch('/:number/*')
  const navigate = useNavigate()
  
  useEffect(() => {
    (async () => {
      if (!urlMatch) return

      const {number, ['*']: withMedian} = urlMatch.params
      const validNumber = number.match(/^\d+$/) && 
        Number(number) > 1 && 
        Number(number) < MAX_NUMBER

      const areValidPaths = validNumber && 
        (withMedian === '' || withMedian === 'median')

      if (!areValidPaths) {
        const errorMessage = validNumber ? 
        'Invalid URL path parameters: ' :
        `Invalid number: ${number}`
        
        console.error(errorMessage, urlMatch.params)
        navigate(validNumber ? `/${number}` : '/')
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

  const goToRandomNumber = () => {
    setMedian([])
    setPrimes([])
    navigate(`/${randomNumber()}/median`)
  } 

  return (
    <>
      <PlotinusSkull goToRandomNumber={goToRandomNumber}/>       
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
      <Button goToRandomNumber={goToRandomNumber} />
    </>
  )
}

export default App
