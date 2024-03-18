var t1 = gsap.timeline()

t1.to("#fs", {
    height: 0,
    duration: 2,
    ease: Expo.easeInOut
})
.to("#elem", {
    height: "100%" ,
    duration: 2,
    // delay: 2,
    delay: -2,
    // delay: 0,
    ease: Expo.easeInOut
})
.to("#white", {
    height: "100%" ,
    duration: 2,
    delay: -1.6,
    ease: Expo.easeInOut
})