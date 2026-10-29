const obj1 ={
    fruit:"Banana",
    color:"red"
}

const obj2 = Object.create(obj1)
obj2.fruit= "Mango"

console.log(obj2.__proto__)
