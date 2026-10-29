const myFunc = function(){
    console.log(this)  // this inside a function refered to the window object
}
myFunc()


//using strict mode to prevent window object

const newFunc = function(){
    "use strict"
    console.log(this) // in strict mode this inside functiuon refered undefined 
}

newFunc()

