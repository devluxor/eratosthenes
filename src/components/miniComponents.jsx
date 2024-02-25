import{useMatch as e}from"react-router-dom";import{medianFormatter as _,primesFormatter as $}from"../js/mini";import t from"../images/flare.png";export const Button=({goToRandomNumber:e})=><div className="button"onClick={e}></div>;export const Flare=()=><img className="flare"src={t}></img>;export const Median=({median:e})=>{if(!(e.length<1))return<svg className={"sphere sphere0b-median"}viewBox="0 0 300 300"xmlns="http://www.w3.org/2000/svg"xmlnsXlink="http://www.w3.org/1999/xlink">

      <path id="SunCatcherStudio"fill="none"d="M 32.550491,148.48008 A -108.15144,-108.15144 0 0 1 140.70194,40.328644 -108.15144,-108.15144 0 0 1 248.85338,148.48008 -108.15144,-108.15144 0 0 1 140.70194,256.63153 -108.15144,-108.15144 0 0 1 32.550491,148.48008 Z"/>  

      <text fontSize="34"fill="#000"letterSpacing="4"fontFamily="serif"fontWeight="normal">

      <textPath xlinkHref="#SunCatcherStudio"side="left"startOffset="5">{e.length>0&&_(e)}</textPath></text>

    </svg>};export const Poem=({goToRandomNumber:e})=><p className="poem"onClick={()=>e({noMedian:!1})}>

      Never stop sculpting your own statue:

      contemplate the immediate simplicity of the <span className="poem-numbers">Numbers</span>;

      try to bring back the god in you 

      to the divine in all

      to flee alone, towards the solitary one.

    </p>;export const Primes=({primes:_})=>{let t=e("*");return<svg className={"sphere sphere0-primes"}viewBox="0 0 300 300"xmlns="http://www.w3.org/2000/svg"xmlnsXlink="http://www.w3.org/1999/xlink">

        <path id="SunCatcherStudio"fill="none"stroke={_.length<1&&t.pathname.match(/\d+/)?"#241904":""}d="M 32.550491,148.48008 A -108.15144,-108.15144 0 0 1 140.70194,40.328644 -108.15144,-108.15144 0 0 1 248.85338,148.48008 -108.15144,-108.15144 0 0 1 140.70194,256.63153 -108.15144,-108.15144 0 0 1 32.550491,148.48008 Z"/>  

        <text fontSize="19"fill="#241904"letterSpacing="2"fontFamily="serif"fontWeight="normal">

        <textPath xlinkHref="#SunCatcherStudio"side="left"startOffset="5">{_.length>0&&$(_)}</textPath></text>

      </svg>};export const Spheres=({primes:e,median:_})=><div className="spheres">

      <Primes primes={e}/>

      <Median median={_}/>

      <svg alt="Sphere of Text 1" className={'sphere sphere1'} viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <path id="SunCatcherStudio" fill="none" d="M 32.550491,148.48008 A -108.15144,-108.15144 0 0 1 140.70194,40.328644 -108.15144,-108.15144 0 0 1 248.85338,148.48008 -108.15144,-108.15144 0 0 1 140.70194,256.63153 -108.15144,-108.15144 0 0 1 32.550491,148.48008 Z" />  
        <text fontSize="17" fill="#332612" letterSpacing="2.7" fontFamily="serif" fontWeight="normal">
        <textPath xlinkHref="#SunCatcherStudio" startOffset="5">Eratosthenes of Cyrene (276 BC - c. 195 BC) was a Greek polymath...</textPath></text>
      </svg>

      <svg alt="Sphere of Text 2" className={'sphere sphere2'} viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <path id="SunCatcherStudio" fill="none" d="M 32.550491,148.48008 A -108.15144,-108.15144 0 0 1 140.70194,40.328644 -108.15144,-108.15144 0 0 1 248.85338,148.48008 -108.15144,-108.15144 0 0 1 140.70194,256.63153 -108.15144,-108.15144 0 0 1 32.550491,148.48008 Z" />  
        <text fontSize="14" fill="#2b240f" letterSpacing="3" fontFamily="serif" fontWeight="normal">
        <textPath xlinkHref="#SunCatcherStudio" startOffset="5">...a mathematician, geographer, poet, astronomer, and music theorist. He was a...</textPath></text>
      </svg>

      <svg alt="Sphere of Text 3" className={'sphere sphere3'} viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <path id="SunCatcherStudio" fill="none" d="M 32.550491,148.48008 A -108.15144,-108.15144 0 0 1 140.70194,40.328644 -108.15144,-108.15144 0 0 1 248.85338,148.48008 -108.15144,-108.15144 0 0 1 140.70194,256.63153 -108.15144,-108.15144 0 0 1 32.550491,148.48008 Z" />  
        <text fontSize="13" fill="#3b3012" letterSpacing="0" fontFamily="serif" fontWeight="normal">
        <textPath xlinkHref="#SunCatcherStudio" startOffset="5">...of learning, becoming the chief librarian at the Library of Alexandria, and the first to calculate the circumference of the Earth...</textPath></text>
      </svg>

    </div>;