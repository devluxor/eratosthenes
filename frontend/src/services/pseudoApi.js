import { primesGenerator } from "../utils/primesGenerator"
import { median } from "../utils/helpers"
import { MAX_NUMBER } from "../utils/variables"
import { error } from "../utils/logger"

export const primesAndMedian = async (nInput) => {
  const n = Number(nInput)

  if (n <= 1) {
    // res.status(400).send(`Number ${n} is too small!`)
    return null
  }

  if (n >= MAX_NUMBER) {
    // res.status(400).send(`Number ${n} is too big!`)
    return null
  }

  try {
    const primes = await primesGenerator(n)
    const result = median(primes)
    return {primes, median: result}
  } catch (e) {
    error('Error: ', e)
  }
}