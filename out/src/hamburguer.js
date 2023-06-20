rollPage = document.querySelector("body")
navBar = document.querySelector(".navbar")
ulnavBar = document.querySelector(".menu-ul")

function hamburguer() {
    if (hamburguer != onclick){
        navBar.classList.toggle("active-nav")
        rollPage.classList.toggle("inative-roll")
        
    }else{
        navBar.classList.toggle("inative-nav")
        ulnavBar.classList.toggle("inative-ul")
    }
    
}
