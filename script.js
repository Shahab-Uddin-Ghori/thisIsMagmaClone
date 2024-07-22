let navBtn = document.querySelector("#nav-btn")
navBtn.addEventListener("mousemove",(e)=>{
    let x = e.offsetX
    let y = e.offsetY
    let navBtnWdth = navBtn.clientWidth
    let navBtnHeight = navBtn.clientHeight
    let moveX = (x - navBtnWdth/2)
    let moveY = (y - navBtnHeight/2)
    navBtn.style.transform = `translateX(${moveX}px)translateY(${moveY}px`;
})

navBtn.addEventListener("mouseout",(e)=>{

    navBtn.style.transform = ``;
})

let clutter = "";
document.querySelector("#page2 h1").textContent.split(" ").forEach((dets)=>{
    clutter += `<span>${dets}</span>`

    document.querySelector("#page2 h1").innerHTML = clutter;
})

gsap.to("#page2 h1 span",{
scrollTrigger:{
    trigger: `#page2 h1 span`,
    start: `top bottom`,
    end: `bottom top`,
    scroller: `#main`,
    scrub: .2
},

    stagger:.01,
    color:`#fff`

})