export const MOCKmedianOfPrimes = async (n) => {
  if (n < 2) return 0
  // memoization!!
  const result = await erathosthenes(n)
  return result
}

const erathosthenes = async (n) => {
  // Eratosthenes algorithm to find all primes under n
  let array = []
  let upperLimit = Math.sqrt(n)
  let output = []

  // Make an array from 2 to (n - 1)
  // filled with `true` values
  for (let i = 0; i < n; i++) {
    array.push(true)
  }

  // Remove multiples of primes starting from 2, 3, 5,...
  for (let i = 2; i <= upperLimit; i++) {
    if (array[i]) {
      for (let j = i * i; j < n; j += i) {
        array[j] = false
      }
    }
  }

  // All array[i] set to true are primes
  for (let i = 2; i < n; i++) {
    if(array[i]) {
      output.push(i)
    }
  }

  return output
}