window.addEventListener("scroll", function() {
    let scrollHeight = document.documentElement.scrollTop;
    let menuBtn = document.getElementsByClassName("menu-btn");

    let vp = this.innerHeight;
    let vh = vp;
    let vh2 = vp*2;
    let vh3 = vp*3-10;


    for(let i = 0; i < menuBtn.length; i++) {
        menuBtn[i].classList.remove("on");
        if(scrollHeight >= 0 && scrollHeight <= vh) {
            menuBtn[0].classList.add("on");
        } else if(scrollHeight > vh && scrollHeight < vh2) {
            menuBtn[1].classList.add("on");
        } else if(scrollHeight >= vh2 && scrollHeight < vh3) {
            menuBtn[2].classList.add("on");
        } else {
            menuBtn[3].classList.add("on");
        }
    }
});