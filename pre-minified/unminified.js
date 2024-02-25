export const MAX_NUMBER = 9_999_999
export const WHITESPACE = '\u00A0'
export const MAX_LENGTH = 23

export const numberFormatter = (numbers) => {
  return numbers.join(', ')
}

export const primesFormatter = (primes) => {
  const length = primes.length
  if (length > MAX_LENGTH) return `·${getRandom(primes).join('·')}...`
  
  const spaces = MAX_LENGTH - length
  const inBetween = WHITESPACE.repeat(spaces)
  return primes.map(p => `·${p}·`).join(inBetween)
}

const getRandom = (arr) => {
  let n = MAX_LENGTH
  let result = new Array(n)
  let len = arr.length
  let taken = new Array(len)

  while (n--) {
    let x = Math.floor(Math.random() * len)
    result[n] = arr[x in taken ? taken[x] : x]
    taken[x] = --len in taken ? taken[len] : len
  }
  
  return result;
}

export const medianFormatter = (median) => {
  if (median.length > 1){
    return `x͂${median[0]}; ${median[1]}`
  }

  return `x͂${median[0]}`
}

export const randomNumber = () => {
  return Math.floor(Math.random() * (MAX_NUMBER / 100))
}

export const median = (numbers) => {
  const length = numbers.length
  const middle = Math.floor(numbers.length / 2)

  if (isEven(length)) {
    return [numbers[middle - 1 ], numbers[middle]]
  }

  return [numbers[middle]]
}

export const isEven = (number) => {
  return number % 2 === 0
}

export const info = (...params) => {
  console.log(...params)
}

export const error = (...params) => {
  console.error(...params)
}

export const primesGenerator = async (n) => {
  const primes = function* primes() {
    yield 2; yield 3; yield 5; yield 7;
  
    const sieve = new Map();
    const ps = primes(); 
    ps.next(); 
    ps.next();
    
    for (let p = 3, i = 9; true; i += 2) {
      let s = sieve.get(i);
  
      if (s !== undefined) {
        sieve.delete(i);
      } else if (i < p * p) {
        yield i;
        continue;
      } else {
        s = 2 * p;
        p = ps.next().value;
      }
      
      let k = i + s;
      while (sieve.has(k)) k += s;
      sieve.set(k, s);
    }
  }

  const generator = primes()
  const result = []
  for (let prime of generator) {
    if (prime > n) break
    result.push(prime)
  }

  return result
}

export const primesAndMedian = async (nInput) => {
  const n = Number(nInput)

  if (n <= 1) {
    return null
  }

  if (n >= MAX_NUMBER) {
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
