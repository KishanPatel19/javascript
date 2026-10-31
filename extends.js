class Animal{
    constructor(name , age){
        this.name = name
        this.age = age
    }
    eat(thing){
        console.log(`${this.name} eats ${thing}`)
    }
}

class Dog extends Animal{
 barking(){
    console.log("Bhav Bhav")
 }
}
const tommy = new Dog("tommy" , 2)
tommy.eat("Bones")
tommy.barking()