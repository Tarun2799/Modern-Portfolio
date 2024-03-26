function revealToSpan(){
    document.querySelectorAll('.reveal')
    .forEach(function(elem){
        // create two spans parent and child
        let parent = document.createElement("span");
        let child = document.createElement("span");

        //parent and child classes 
        parent.classList.add("parent");
        child.classList.add("child");

        // span parent gets child and child gets elem innerHTML
        child.innerHTML = elem.innerHTML;
        parent.appendChild(child);

        // elem replaces its innerHTML with parent span
        elem.innerHTML='';
        elem.appendChild(parent);

    })

}


function loaderAnimation(){
    var tl = gsap.timeline();
    
    
    tl.from("#loader .child span",{
        x: 200,
        // delay: 1,
        stagger: .2,
        duration: 1.4,
        ease: Power3.easeInOut,
        
    })
    tl.to("#loader .parent .child",{
        y:"-104%",
        duration: 1,
        ease: Circ.easeInOut,
    })
    tl.to("#loader",{
        height:0,
        duration: 1,
        ease: Circ.easeInOut,
    })
    tl.to("#green",{
        // bottom: 100,
        height:"100vh",
        duration: 1,
        delay:-1,
        ease: Circ.easeInOut,
    })
    tl.to("#green",{
        top: 0,
        height: "0vh",
        duration: .5,
        // delay: .1,
        ease: Circ.easeInOut,
    })
}

revealToSpan();
loaderAnimation();
