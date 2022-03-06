const toggleNav = document.querySelector('.toggle-navbar');
const navMenu = document.querySelector('.nav-menu');
const product = document.querySelector('.product')
const dropDown = document.querySelector('.dropdown-menu')

toggleNav.addEventListener('click', function(){
    if(window.innerWidth < 600) {
navMenu.classList.add('show')
    }
})

product.addEventListener('click',function(){
    if(window.innerWidth < 600) {
        dropDown.classList.add('show')
    }
   
})