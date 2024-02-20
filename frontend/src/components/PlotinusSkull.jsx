import { POEM } from "../utils/variables"

const PlotinusSkull = ({goToRandomNumber}) => {
  return (
    <p 
      className='vertical'
      onClick={() => goToRandomNumber({noMedian: true})}
    >
    {POEM}
    </p>
  )
}

export default PlotinusSkull