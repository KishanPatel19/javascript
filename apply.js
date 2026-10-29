const user1 = {
    firstName : "Kishan",
    age:10,
    about : function( hobby , favFruit){
        console.log(this.firstName , this.age , hobby , favFruit)
    }
}

const user2 = {
    firstName : "Vipul",
    age:16
    
}

user1.about.apply(user2 ,["treaking " , " Mango"])
// user1.about.call(user1 , "Banana " , "Camping")
user1.about.apply(user1 , ["skeating" , "Guava"])