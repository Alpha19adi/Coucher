var t=gsap.timeline();

t.from("#nav",{
    opacity:0,
    delay:0.2
})
t.from("#nav h1,#nav h4,#nav h3",{
    y:-40,
    opacity:0,
    duration:0.5,
    delay:0.5,
    stagger:0.09
})
t.from("#left-1",{
    duration:0.5,
    opacity:0
})
t.from("#left h1",{
    x:-500,
    duration:0.5,
    opacity:0,
    stagger:0.4
})
t.from("#left-2 h5",{
    // x:-500,
    duration:0.4,
    opacity:0,
    stagger:0.4
})
t.from("#right img",{
    scale:0.5,
    duration:0.8,
    opacity:0,
})


gsap.from("#page2 .box",{
    opacity:0,
    scale:0.4,
    duration:0.8,
    scrollTrigger:{
        trigger:"#page2 .box",
        scroll:"body",
        // markers:true,    
        start:"top 60%"
    }
})