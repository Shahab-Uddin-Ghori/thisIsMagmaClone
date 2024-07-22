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