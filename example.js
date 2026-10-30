// example of proto and prototype

// proto is a reference of another object if value is not available in object then js will search it in its __proto__
//  prototype is a empty object of a function whare we can save extra info of a function in key value pair 

function createUser(firstName , age , gender){
    const user = Object.create(createUser.prototype)
    user.firstName =firstName
    user.age = age
    user.gender = gender

    return user
}
// console.log(createUser.prototype)
createUser.prototype.about = function(){
    console.log(`${this.firstName} is ${this.age} old`)
}
createUser.prototype.sing=function(){
    console.log("la lala la")
}
const user1 = createUser("kishan" , 18 , "male")
console.log(user1)

const user2 = createUser("aryan " , 21 , "female")
user2.about()