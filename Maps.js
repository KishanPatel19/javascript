const person = new Map()

person.set("firstName","Kishan")
person.set(1,"one")  // numbers as a key
person.set([1,2,3] , "onetwothree") // array as a key
// console.log(person.get(1)) // accessing value
// console.log(person)

// console.log(person.keys())

// for(let key of person.keys()){
//     console.log(key , typeof key)
// }

for( let [key , value] of person){
    console.log(key , value)
}