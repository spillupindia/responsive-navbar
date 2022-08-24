const bars = document.querySelector('.bars')
bars.addEventListener("click",()=>{
    const navbar = document.querySelector(".navbar-nav")
    navbar.classList.toggle("toggle")
    if(bars.name=="menu-outline"){
        bars.name="close-outline"
    }else{
        bars.name='menu-outline'
    }
})