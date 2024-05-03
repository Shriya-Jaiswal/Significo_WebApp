function homePageAnimatin(){
    gsap.set(".slidesm", {scale:5})

let tl = gsap.timeline({
    scrollTrigger:{
        trigger : ".home",
        start : "top top",
        end : "bottom bottom",
        // markers : true,
        // pin : true,
        scrub : 1
    }
})


tl.to(".videodiv",{
    '--clip' : "0%",
    ease : Power2,
    // duration: 2
}, 'a')

.to(".slidesm",{
    scale : 1,
    ease : Power2,
}, 'a')

.to(".slidesm",{
    
    scale : 1,
    ease : Power2,
}, 'a')
.to(".lft",{
    xPercent : -10,
    stagger : .03,
    ease : Power4
},'b')
.to(".rgt",{
    xPercent : 10,
    stagger : .03,
    ease : Power4
},'b')


// gsap.to(".slidesm",{
//     scrollTrigger:{
//         trigger : ".home",
//         start : "top top",
//         end : "bottom top",
//         // markers : true,
//         scrub : 2
//     },
//     scale : 1,
//     ease : Power2
// })
}


function realPageAnimation(){
    gsap.to(".slide", {
        scrollTrigger:{
            trigger : ".real",
            start : "top top",
            end : "bottom bottom",
            // marker : true,
            scrub : 1
        }, 
        xPercent : -312,
        ease : Power4
    });
    
}

function teamPageAnimation(){
    document.querySelectorAll(".listElem")
    .forEach(function(el){
        el.addEventListener("mousemove", function(dets){
            
            gsap.to(this.querySelector(".picture"), {opacity:1 , x : gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX), ease : Power4, duration : .5})
            gsap.to(this.querySelector(".blueLayer").style.height = '100%')

        })

        el.addEventListener("mouseleave", function(dets){
            gsap.to(this.querySelector(".picture"), {opacity:0 , ease : Power4, duration : .5}),
            gsap.to(this.querySelector(".blueLayer").style.height = '0%')
        })
    })
}

function peraAnimation1(){
    let clutter = "";
    document.querySelector(".textPera")
    .textContent.split("")
    .forEach(function(e){
        if(e === " ") clutter += `<span>&nbsp;</span>`
        clutter += `<span>${e}</span>`
    })

    document.querySelector(".textPera").innerHTML = clutter;

    gsap.set(".textPera span", {opacity : .1})
    gsap.to(".textPera span",{
        scrollTrigger : {
            trigger : ".pera",
            start : "top 60%",
            end : "bottom 90%",
            scrub : 2,
            // markers : true
        },
        opacity : 1,
        stagger : .03,
        ease : Power4
    })
}


function peraAnimation2(){
    let clutter = "";
    document.querySelector(".textPera2")
    .textContent.split("")
    .forEach(function(e){
        if(e === " ") clutter += `<span>&nbsp;</span>`
        clutter += `<span>${e}</span>`
    })

    document.querySelector(".textPera2").innerHTML = clutter;

    gsap.set(".textPera2 span", {opacity : .1})
    gsap.to(".textPera2 span",{
        scrollTrigger : {
            trigger : ".pera2",
            start : "top 60%",
            end : "bottom 90%",
            scrub : 2,
            // markers : true
        },
        opacity : 1,
        stagger : .03,
        ease : Power4
    })
}

function loco(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}


function capsulesAnimation(){
    gsap.to(".capsule:nth-child(2)",{
        scrollTrigger : {
            trigger : ".capsules",
            start : "top 70%",
            end : "bottom bottom",
            // markers : true,
            scrub : 1
        },
        y : 0,
        ease : Power4
    })
}

function bodyColorChange(){
    document.querySelectorAll(".section")
    .forEach(function(e){
        ScrollTrigger.create({
            trigger : e,
            start : "top 50%",
            end : "bottom 50%",
            // markers : true,
            onEnter : function(){
                document.body.setAttribute("theme", e.dataset.color);
            },
            onEnterBack : function(){
                document.body.setAttribute("theme", e.dataset.color);
            }
        })
    })
}

loco();
homePageAnimatin();
realPageAnimation();
teamPageAnimation();
peraAnimation1();
peraAnimation2();
capsulesAnimation();
bodyColorChange();