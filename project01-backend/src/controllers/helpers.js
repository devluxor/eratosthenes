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
