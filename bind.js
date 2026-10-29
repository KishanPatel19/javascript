    function about( hobby , favFruit){
        console.log(this.firstName , this.age , hobby , favFruit)
    }

const user1 = {
    firstName : "Kishan",
    age:10,
 
}

const user2 = {
    firstName : "Vipul",
    age:16
    
}

const user1Info =  about.bind(user1 , "Guitar" , "Dragon")
user1Info()
