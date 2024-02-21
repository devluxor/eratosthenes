/* eslint-disable react/no-unknown-property */
import { useMatch } from 'react-router-dom'
import { primesFormatter } from "../utils/helpers"

const Primes = ({primes}) => {
  const urlMatch = useMatch('*')
  primes = [15,5,5,5,5,5,555,344,2,34,42,34,75,7,442,4,3,3,3,42,2,234,]
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

export default Primes