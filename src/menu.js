let btnMenu =document.getElementById('btn-menu')
let  menuMobile= document.getElementById('menu-mobile')
let overlayMenu= document.getElementById('overlay-menu')

btnMenu.addEventListener('click',()=>{
    menuMobile.classList.add('abrir-menu')
})
menuMobile.addEventListener('click',()=>{
    menuMobile.classList.remove('abrir-menu')
})

overlayMenu.addEventListener('click',()=>{
    menuMobile.classList.remove('abrir-menu')
})



