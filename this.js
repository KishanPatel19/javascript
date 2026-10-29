
const personInfo = function(){
    console.log(`person name is ${this.firstName} and person age is ${this.age}`)
}

const person1 = {
    firstName:"Kishan",
    age:19,
    about : personInfo
}

const person2 = {
    firstName:"Dash",
    age:13,
    about : personInfo
}
const person3 = {
    firstName:"Aryan",
    age:29,
    about : personInfo
}

person1.about()
person3.about()
person2.about()
