/* eslint-disable react/no-unknown-property */

import Median from './Median'
import Primes from './Primes'

import sphere1 from '../assets/sphere1.svg'
import sphere2 from '../assets/sphere2.svg'
import sphere3 from '../assets/sphere3.svg'

const Animatedspheres = ({primes, median}) => {
  return (
    <div className='spheres'>
      <Primes primes={primes}/>
      <Median median={median}/>
      <img className={'sphere sphere1'} src={sphere1} alt="Sphere of Text 1" />
      <img className={'sphere sphere2'} src={sphere2} alt="Sphere of Text 2" />
      <img className={'sphere sphere3'} src={sphere3} alt="Sphere of Text 3" />
    </div>
  )
}

export default Animatedspheres