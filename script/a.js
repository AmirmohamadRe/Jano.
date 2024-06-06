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
let ac = document.querySelectorAll('.click')
ac.forEach( i =>{
    i.addEventListener('click' , function(){
        i.classList.toggle('ac')

        const lorem = i.nextElementSibling
        lorem.classList.toggle('ad')
        if(lorem.style.height){
            lorem.style.height = null
        }else{
            lorem.style.height = lorem.scrollHeight + 'px'
        }
    })
})
