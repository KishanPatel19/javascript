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

for(let number of numbers ){
    console.log(number)
}


console.log(numbers)

const newArr = [1,2,3,3,4,4,5,5]

const uniqueNumbers = new Set(newArr)

console.log(uniqueNumbers)