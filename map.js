const users = [
    {firstName : "Kishan" , age:12},
    {firstName : "Pankaj" , age:12},

    {firstName : "Aryan" , age:12},

]

// printing firstname 

 const userName = users.map((user)=>{
    return user.firstName
})

console.log(userName)