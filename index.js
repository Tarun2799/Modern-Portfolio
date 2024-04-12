
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
        height:"100%",
        top: 0,
        duration: 1,
        delay:-1.49,
        ease: Expo.out,
    })
    tl.to("#green",{
        // top: 0,
        height: "0%",
        duration: 1,
        delay: -.85,
        ease: Expo.out,
        onComplete: function(){
            animateHomepage();
        }
    })
}


function animateSvg(){

    gsap.to("#Visual>g>g>path, #Visual>g>g>polyline", {
        strokeDashoffset: 0,
        duration:1.7,
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
        duration: 1,
        ease: Expo.easeInOut
    })
    .to("#home .row img", {
        opacity:1,
        // duration: 1.4,
        delay: -.4,
        ease: Expo.easeInOut,
        onComplete: function(){
            animateSvg();
        }
    })
}

function locoInitialize(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}

function cardHoverEffect(){
    document.querySelectorAll(".container")
    .forEach(function (cnt){
        let showingImage;
        cnt.addEventListener("mousemove", function(dets){
            // console.log();
            // console.log(document.querySelector("#cursor").children[dets.target.dataset.index]);
            showingImage = dets.target;
            document.querySelector("#cursor").children[dets.target.dataset.index].style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
            document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity = 1;

            showingImage.style.filter = "grayscale(1)";

            document.querySelector("#work").style.backgroundColor = "#"+dets.target.dataset.color;

        })

        cnt.addEventListener("mouseleave", function(dets){
            document.querySelector("#cursor").children[showingImage.dataset.index].style.opacity = 0;
            // document.querySelector("#cursor").children[dets.target.dataset.index].style.transform = `translate1(${dets.clientX}px, ${dets.clientY}px)`;
            showingImage.style.filter = "grayscale(0)";

            document.querySelector("#work").style.backgroundColor = "#d0d0d048";


        })
    })
}



revealToSpan();
valueSetters();
loaderAnimation();
locoInitialize();
cardHoverEffect();
// // animateSvg();
// animateHomepage();


let div = document.createElement('div');

div.innerHTML = `<svg class="ui-arrow" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"> <path class="downarrow" d="M3.10162 3.10156L62.9999 62.9999" stroke-linecap="round" stroke-linejoin="round"></path> <path class="downarrow" d="M63 1.00001L63 63L0.999989 63" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`

div.setAttribute('id', 'my-arr');
console.log(div); // 2 items are coming




let bg = document.getElementById('bg');
bg.before(div);


// gsap.to(".img-container:nth-child(1)",{
//     duration: 1,
//     // transform: translateX(-40%, -8%),
//     x: -30,
//     rotate: 0,
//     // opacity:0,
    
//     scrollTrigger: ".img-container:nth-child(3)"
//     // scrollTrigger:{
//     //     trigger: " #image-section",
//     //     scroller: "body",
//     //     markers: true,
//     //     start: "top 30%"
//     // }
// })