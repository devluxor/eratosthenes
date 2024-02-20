/* eslint-disable react/no-unknown-property */
import { medianFormatter } from "../utils/helpers"

import { useMatch } from 'react-router-dom'

const Median = ({median}) => {
  const urlMatch = useMatch('*')
  if (median.length < 1) return
  console.log(urlMatch)
  const isMedianLoading = median.length < 1 && urlMatch.pathnameBase.includes('/median')
  return (
    <svg className={'sphere sphere0b-median'} viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <path 
        id="SunCatcherStudio" 
        fill="none"
        stroke={isMedianLoading ? '#000' : '' }
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

export default Median