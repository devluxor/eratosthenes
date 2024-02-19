import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { medianOfPrimes } from './services/api'
import { numberFormatter } from './utils/helpers'

function App() {
  const [count, setCount] = useState(1000000)
  const [result, setResult] = useState([])

  useEffect(() => {
    (async () => {
      const n = await medianOfPrimes(count)
      setResult(n)
    })()
  }, [count])


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <h2>Result: </h2>
        <p>
          {numberFormatter(result)}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
