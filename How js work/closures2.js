function myfunction(power){
    return function(number){
        return number ** power
    }
}

const squre = myfunction(2)
console.log(squre(3))

const cube = myfunction(3)
console.log(cube(2))