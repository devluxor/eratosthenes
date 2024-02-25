/* eslint-disable react/no-unknown-property */
import { useMatch } from 'react-router-dom'
import { medianFormatter, primesFormatter } from "../src/js/mini"
import flare from '../images/flare.png'
import sphere1 from '../images/sphere1.svg'
import sphere2 from '../images/sphere2.svg'
import sphere3 from '../images/sphere3.svg'

export const Button = ({goToRandomNumber}) => {
  return (
    <div 
    className='button'
    onClick={goToRandomNumber}
  ></div>
  )
}

export const Flare = () => {
  return (
    <img className="flare" src={flare}></img>
  )
}

export const Median = ({median}) => {
  if (median.length < 1) return

  return (
    <svg className={'sphere sphere0b-median'} viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <path 
        id="SunCatcherStudio" 
        fill="none"
        // stroke='#000'
        d="M 32.550491,148.48008 A -108.15144,-108.15144 0 0 1 140.70194,40.328644 -108.15144,-108.15144 0 0 1 248.85338,148.48008 -108.15144,-108.15144 0 0 1 140.70194,256.63153 -108.15144,-108.15144 0 0 1 32.550491,148.48008 Z" />  
      <text fontSize="34" fill="#000" letterSpacing="4" fontFamily="serif" fontWeight="normal">
      <textPath 
        xlinkHref="#SunCatcherStudio"
        side="left" 
        startOffset="5"
      >{median.length > 0 && medianFormatter(median)}</textPath></text>
    </svg>
  )
}

export const Poem = ({goToRandomNumber}) => {
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

export const Primes = ({primes}) => {
  const urlMatch = useMatch('*')

  return (
      <svg className={'sphere sphere0-primes'} viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <path 
          id="SunCatcherStudio" 
          fill="none"
          stroke={primes.length < 1 && urlMatch.pathname.match(/\d+/) ? '#241904' : ''}
          d="M 32.550491,148.48008 A -108.15144,-108.15144 0 0 1 140.70194,40.328644 -108.15144,-108.15144 0 0 1 248.85338,148.48008 -108.15144,-108.15144 0 0 1 140.70194,256.63153 -108.15144,-108.15144 0 0 1 32.550491,148.48008 Z" />  
        <text fontSize="19" fill="#241904" letterSpacing="2" fontFamily="serif" fontWeight="normal">
        <textPath
          xlinkHref="#SunCatcherStudio"
          side="left" 
          startOffset="5"
        >{primes.length > 0 && primesFormatter(primes)}</textPath></text>
      </svg>
  )
}

export const Spheres = ({primes, median}) => {
  return (
    <div className='spheres'>
      <Primes primes={primes}/>
      <Median median={median}/>
      {/* <img className={'sphere sphere1'} src={sphere1} alt="Sphere of Text 1" />
      <img className={'sphere sphere2'} src={sphere2} alt="Sphere of Text 2" />
      <img className={'sphere sphere3'} src={sphere3} alt="Sphere of Text 3" /> */}
    </div>
  )
}