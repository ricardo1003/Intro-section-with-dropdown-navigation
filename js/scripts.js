const navbarElement = document.getElementsByClassName("navbar")[0]
const openNavButtonElement = document.getElementsByClassName("openNav")[0]
const expandableElements = document.getElementsByClassName("expand")



openNavButtonElement.addEventListener("click", ()=>{
    if(navbarElement.classList.contains("opened")){
        navbarElement.classList.add("closed")
    }else{
        navbarElement.classList.remove("closed")
    }
    navbarElement.classList.toggle("opened")
})
for (let i = 0; i < expandableElements.length; i++){
    expandableElements[i].addEventListener("click", ()=>{
        expandableElements[i].classList.toggle("expanded")
    }
)}