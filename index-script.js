window.addEventListener("scroll", function() {
    let scrollHeight = document.documentElement.scrollTop;
        menuBtn = document.getElementsByClassName("menu-btn");

        vh = this.innerHeight;
        vh1 = vh-1
        vh2min = vh-10;
        vh2 = vh*2-10;
        vh3 = vh*3-10;

        underBar = document.getElementsByClassName("under");

    for(let i = 0; i < menuBtn.length; i++) {
        menuBtn[i].classList.remove("on");
        if(scrollHeight >= 0 && scrollHeight <= vh1) {
            menuBtn[0].classList.add("on");
        } else if(scrollHeight > vh2min && scrollHeight < vh2) {
            menuBtn[1].classList.add("on");
        } else if(scrollHeight > vh2 && scrollHeight < vh3) {
            menuBtn[2].classList.add("on");
            underBar[i].classList.add("on");
        } else {
            menuBtn[3].classList.add("on");
        }
    }
});