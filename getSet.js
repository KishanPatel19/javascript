class Person{
    constructor(firstName , lastName){
        this.firstName = firstName
        this.lastName=lastName
    }

    get  fullName(){
        return `${this.firstName}  ${this.lastName}`
    }
    set fullName(fullName){
        const [firstName , lastName] = fullName.split(" ")
            this.firstName = firstName
            this.lastName = lastName
    }
}

const person1 = new Person("Kishan" , "Patel")
console.log(person1.fullName)
person1.fullName = "Ram yadav"
console.log(person1.fullName)