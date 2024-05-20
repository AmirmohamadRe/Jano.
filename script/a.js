const navBtn = document.querySelector('.navBtn')
const navMenu = document.querySelector('.mobileNavMenu')

let navOpen =false;

navBtn.addEventListener("click" , function(){
    if(navOpen){
        navBtn.classList.remove('navBtnOpen')
        navMenu.classList.remove('mobileNavMenuOpen')
        navOpen = false
    }else{
        navBtn.classList.add('navBtnOpen')
        navMenu.classList.add('mobileNavMenuOpen')
        navOpen = true
    }
})