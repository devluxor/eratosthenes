const PlotinusSkull = ({goToRandomNumber}) => {
  return (
    <p 
      className='poem'
      onClick={() => goToRandomNumber({noMedian: false})}
    >
      Never stop sculpting your own statue:
      contemplate the immediate simplicity of the <span className="poem-numbers">Numbers</span>;
      try to bring back the god in you 
      to the divine in all
      to flee alone, towards the solitary one.
    </p>
  )
}

export default PlotinusSkull