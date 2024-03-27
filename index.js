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

function valueSetters(){
    gsap.set("#nav a", { y: "-100%", opacity: 0})
    gsap.set("#home span .child", { y: "100%"})
    gsap.set("#home .row img", {opacity:0});

    document.querySelectorAll("#Visual>g").forEach( function (e){
        var character = e.childNodes[1].childNodes[1];

        character.style.strokeDasharray = character.getTotalLength() + 'px';
        character.style.strokeDashoffset = character.getTotalLength() + 'px'; 
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
        onComplete: function(){
            animateHomepage();
        }
    })
}


function animateSvg(){

    gsap.to("#Visual>g>g>path, #Visual>g>g>polyline", {
        strokeDashoffset: 0,
        duration:2,
        ease: Expo.easeInOut,
        // delay: 5
    })

}


function animateHomepage(){


    var tl = gsap.timeline();
    tl.to("#nav a", {
        y: 0,
        opacity: 1,
        stagger: .05,
        ease: Expo.easeInOut
    })
    .to("#home .parent .child", {
        y: 0,
        stagger: .1,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    .to("#home .row img", {
        opacity:1,
        // duration: 1.4,
        delay: -.5,
        ease: Expo.easeInOut,
        onComplete: function(){
            animateSvg();
        }
    })
}

revealToSpan();
valueSetters();
loaderAnimation();
