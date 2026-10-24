const userCart = [
    {productId: 1 , price:24000},
    {productId: 2 , price:65000},
    {productId: 3 , price:124000},
    {productId: 4 , price:4000},

]

const ans = userCart.every((cartItem)=>cartItem.price < 125000)
 console.log(ans)
