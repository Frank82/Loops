// LOOPS

// for (let i = 0; i < fruits.length; i++) {
//   console.log(i, fruits[i])
// }

// for (const fruit of fruits) {
//   console.log(fruit)
// }

// const numbers = [1, 2, 3, 4, 5, 6]

const double = (numbers) => {
  let result = []
  for (const number of numbers) {
    result.push(number * 2)
  }
  return result
}

console.log(double([1, 2, 3, 4, 5, 6]))

// for ( let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i])
// }

// for (const number of numbers) {
//   console.log(number * 2)
//   result.push(number * 2)
// }

// console.log(result)

// Sum all numbers in an array

