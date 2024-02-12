function togglePopupCall(){
    document.getElementById("popup-1").classList.toggle('active');
}
function togglePopupMail(){
    document.getElementById("popup-2").classList.toggle('active');
}
function togglePopupBooklet(){
    document.getElementById("popup-3").classList.toggle('active');
}

window.addEventListener("scroll",function(){
    var header = document.querySelector('header')
    header.classList.toggle("sticky",this.window.scrollY > 0)
})

const navLinks = document.querySelectorAll('.nav_link')
const sections = document.querySelectorAll('.section')
let currentSection = 'home'
window.addEventListener('scroll',()=>{
    sections.forEach(section=>{
        if(window.scrollY>=section.offsetTop){
            currentSection = section.id
        }
    })
    navLinks.forEach(navLink =>{
        if(navLink.href.includes(currentSection)){
            navLink.classList.add('active')
        }
        else navLink.classList.remove('active')
    })
})