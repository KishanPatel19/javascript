const userCart = [
    {productId:1 , price:23000},
    {productId:2 , price:25000},
    {productId:3 , price:1000},

]

const myProduct = userCart.find((product)=>{
    return product.productId === 2
})

console.log(myProduct)