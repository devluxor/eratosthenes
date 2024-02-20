import axios from "axios"
const BASE_URL = 'http://localhost:3019/api/eratosthenes/'

export const primesAndMedian = async (n) => {
  if (n <= 2) return []

  try {
    const result = await axios.get(`${BASE_URL}${n}`)
    return result.data
  } catch(e) {
    return
  }
}