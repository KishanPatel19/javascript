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
     
    constructor(name , age , speed){
        super(name , age)
        this.speed = speed
    }

    run(){
        console.log(`${this.name} run at ${this.speed} km/h`)
    }
 barking(){

    console.log("Bhav Bhav")
 }
}
const tommy = new Dog("tommy" , 2 , 43)
console.log(tommy)
tommy.run()