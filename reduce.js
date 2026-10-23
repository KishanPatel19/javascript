// const numbers = [1,423,4,21,5]

//  const sum = numbers.reduce((accumalator , currentValue )=>{
//     return accumalator + currentValue
// }, -100)

// console.log(sum)


const userCart = [
    {productId:1 , price:23000},
    {productId:2 , price:25000},
    {productId:3 , price:1000},

]

 const amount = userCart.reduce((totalPrice , currProduct)=>{
  return totalPrice + currProduct.price
},0)

console.log(amount)

