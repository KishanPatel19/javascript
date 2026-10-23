const userCart = [
    {productId:1 , price:23000},
    {productId:2 , price:25000},
    {productId:3 , price:1000},

]

// userCart.sort((a,b)=>{
//     return a.price - b.price
// })

// console.log(userCart)
const lowToHigh = userCart.slice(0,).sort((a,b)=>{
   return a.price - b.price
})

console.log(lowToHigh)

const highToLow = userCart.slice(0).sort((a,b)=>{
    return b.price - a.price
})
console.log(highToLow)