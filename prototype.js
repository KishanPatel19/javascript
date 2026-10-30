const hello = function(){
    console.log("Hello world")
}


console.log(hello.prototype)

hello.prototype.abc = "abc"
hello.prototype.info = {name : "hello",
                        print : "World"
}
hello.prototype.sing = function(){
    return "lalllallla"
}

console.log(hello.prototype.abc)
console.log(hello.prototype.info)
console.log(hello.prototype.sing())

