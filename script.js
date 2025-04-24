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