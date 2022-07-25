window.addEventListener("scroll", function() {
    let scrollHeight = document.documentElement.scrollTop;
        menuBtn = document.getElementsByClassName("menu-btn");

        vh = this.innerHeight;
        vh1 = vh-1
        vh2min = vh-10;
        vh2 = vh*2-10;
        vh3 = vh*3-10;



    let container = document.getElementsByClassName("container");
        hello = document.getElementsByClassName("hello");
    
    for(let i = 0; i < menuBtn.length; i++) {
        menuBtn[i].classList.remove("on");
        if(scrollHeight >= 0 && scrollHeight <= vh1) {
            menuBtn[0].classList.add("on");
        } else if(scrollHeight > vh2min && scrollHeight < vh2) {
            menuBtn[1].classList.add("on");
            // hyewon페이지 진입시 인삿말 말풍선 등장
            container[0].classList.add("on");
            hello[0].classList.add("shake");
        } else if(scrollHeight > vh2 && scrollHeight < vh3) {
            menuBtn[2].classList.add("on");
        } else {
            menuBtn[3].classList.add("on");
        }
    }

    let underBar = document.getElementsByClassName("under");


    if(scrollHeight >= vh2min+200) {
        container[1].classList.add("on");
    }
    if(scrollHeight >= vh2min+400) {
        container[2].classList.add("on"); 
    }
    if(scrollHeight >= vh2min+650) {
        container[3].classList.add("on"); 
    }
    if(scrollHeight >= vh2min+850) {
        container[4].classList.add("on");

        for(let u = 0; u <= underBar.length; u++) {
        underBar[u].classList.add("on");
    }

    }
});

