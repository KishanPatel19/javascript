let navItems = document.getElementsByTagName("a")//HTMLCollection
console.log(navItems.length)

for(let i = 0 ; i < navItems.length ; i++){
    console.log(navItems[i])
    let navItem = navItems[i]

    navItem.style.color = "yellow"
}

for(let  navItem of navItems){
    console.log(navItem)
   navItem.style.backgroundColor = "pink"
}
navItems = Array.from(navItems)
navItems.forEach((navItem)=>{
    console.log(navItem)
})