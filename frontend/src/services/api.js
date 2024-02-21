import axios from "axios"
// const PORT = import.meta.env.VITE_PORT
const SERVER = import.meta.env.VITE_SERVER

const BASE_URL = `https://${SERVER}/api/eratosthenes/`

export const primesAndMedian = async (n) => {
  if (n <= 2) return []

  try {
    const result = await axios.get(`${BASE_URL}${n}`)
    return result.data
  } catch(e) {
    return
  }
}