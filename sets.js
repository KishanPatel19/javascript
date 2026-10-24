// sets 

// no index basedv acccess
// no duplicates allowed

const numbers = new Set()
const myArray = ["item1","item2", "item3"]

numbers.add(1)
numbers.add(2)
numbers.add(3)
numbers.add(myArray)
numbers.add(myArray)


console.log(numbers)