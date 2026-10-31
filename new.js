function CreateUser(firstName , age ){
    this.firstName = firstName
    this.age =age 
}

CreateUser.prototype.about = function(){
    console.log(this.firstName , this.age )
}
const user1 = new CreateUser("Kishan", 31)
console.log(user1)

for(let key in user1){
    if(user1.hasOwnProperty(key)){
            console.log(key)
    }
}