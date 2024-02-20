import { MAX_NUMBER } from "./variables"

const WHITESPACE = '\u00A0'
const MAX_LENGTH = 23


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
  return Math.floor(Math.random() * MAX_NUMBER)
}