import axios from "axios"
const BASE_URL = 'http://localhost:3019/api/eratosthenes/'

export const medianOfPrimes = async (n) => {
  if (n <= 2) return []

  // warning with high numbers ???
  const result = await axios.get(`${BASE_URL}${n}`)
  return result.data
}

