export const numberFormatter = (numbers) => {
  return numbers.join(', ')
}

export const primesFormatter = (primes) => {
  const length = primes.length
  if (length > 100) return `·${primes.slice(0, 98).join('·')}·`
  
  const spaces = 120 - length
  const inBetween = String.fromCharCode(160).repeat(spaces)
  return primes.map(p => `·${p}·`).join(inBetween)
}

export const medianFormatter = (median) => {
  if (median.length > 1){
    const inBetween =  String.fromCharCode(160).repeat(20)
    return `${median[0]}${inBetween}${median[1]}${inBetween}`
  }

  return median.join('·')
}