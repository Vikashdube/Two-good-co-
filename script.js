const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

gsap.to("#nav-part1 svg",{
    transform: "translateY(-100%)",
    scrollTrigger:{
        trigger: "#page1",
        scroller : "#main",
        markers :true,
        start: "top 0",
        end : "top -5%",
        scrub: true 
    }
})


function videoconAnimation(){

    var videocon = document.querySelector("#video-container");
var palybtn = document.querySelector("#play");

videocon.addEventListener("mouseenter", function(){

    gsap.to(palybtn,{
        scale:1,
        opacity:1,

    })

})

videocon.addEventListener("mouseleave", function(){
    gsap.to(palybtn,{
        scale:0,
        opacity:0,
    });
});


videocon.addEventListener("mousemove", function(dets){
    gsap.to(palybtn,{
        left:dets.x,
        top:dets.y,

    });
});






}
videoconAnimation();


function lodinganimation(){
   
gsap.from("#page1 h1" ,{
    y:100,
    opacity:0,
    delay:0.4,
    duration:0.9,
    stagger:0.3
});

gsap.from("#page1 #video-container" ,{
    scale:0.9,
    opacity:0,
    delay:1.2,
    duration:0.5,

});

}
lodinganimation();



document.addEventListener("mousemove",function(dets){
   gsap.to("#cursor", {
    left:dets.x,
    top:dets.y
   });
})


// document.querySelector("#child1").addEventListener("mouseenter" ,function(){
//     gsap.to("#cursor",{
//         transform: `translate(-50%,-50%) scale(1)`
//     })
// })

// document.querySelector("#child1").addEventListener("mouseleave" ,function(){
//     gsap.to("#cursor",{
//         transform: `translate(-50%,-50%) scale(0)`
//     })
// })


document.querySelectorAll(".child").forEach(function(elem){
    elem.addEventListener("mouseenter", function (){
        gsap.to("#cursor" , {
            transform: "translate(-50%,-50%) scale(1)"
        });
    });

    elem.addEventListener("mouseleave", function (){
        gsap.to("#cursor" , {
            transform: "translate(-50%,-50%) scale(0)"
        });
    });
});