import { useNavigate } from 'react-router-dom'
import { MAX_NUMBER } from '../utils/variables'

const PlotinusSkull = ({setPrimes, setMedian}) => {
  const navigate = useNavigate()

  const goToRandomNumber = () => {
    setMedian([])
    setPrimes([])
    const number = Math.floor(Math.random() * MAX_NUMBER)
    navigate(`/${number}/median`)
  } 

  return (
    <p 
      className='vertical'
      onClick={goToRandomNumber}
    >
      Never stop sculpting your own statue: 
      contemplate the immediate simplicity of the Forms; 
      try to bring back the god in you 
      to the divine in all
      to flee alone, towards the solitary one.
    </p>
  )
}

export default PlotinusSkull