let source = document.getElementById('Source')
let dealdivs = document.querySelectorAll('.hidden-divs')

source.addEventListener("click",()=>{
    dealdivs.forEach((div)=>{
        div.classList.toggle('hidden')
    })
})
let source2 = document.getElementById('Source-section-2')
let section2divs = document.querySelectorAll('.hidden-sections-2')

source2.addEventListener("click",()=>{
    section2divs.forEach((div)=>{
        div.classList.toggle('hidden')
    })
})
let source3 = document.getElementById('Source-section-3')
let section3divs = document.querySelectorAll('.hidden-sections-3')

source3.addEventListener("click",()=>{
    section3divs.forEach((div)=>{
        div.classList.toggle('hidden')
    })
})

let icon = document.getElementById('nav-menu')
let navBar = document.getElementsByClassName('nav-bar')
icon.addEventListener("click",()=>{
    navBar.classList.remove('hidden')
})