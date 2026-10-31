class Animal{
    constructor(name , age){
        this.name = name
        this.age = age
    }
    eat(thing){
        console.log(`${this.name} eats ${thing}`)
    }
}

const animal1 = new Animal("Rabbit" , 15)
console.log(animal1)
animal1.eat("Carrot")