gsap.registerPlugin(ScrollTrigger);



gsap.to(".title", {
    scrollTrigger:{    
      pin: true,
      scrub: true,
      trigger: ".wrapper",
      endTrigger: ".pSecond",
      // start:"top 70%",
      // end: "bottom 30%",
      
      markers: {
      startColor: "purple",
      endColor: "fuschia",
    }
    }
  })
  



const tlpFirst = gsap.timeline({
    scrollTrigger:{
      scrub: true,
      markers: true,
      trigger: ".pFirst",
      start: "top 50%", // start at 30% from the top of the screen. When .red gets to 30% from top, the animation is triggered
      // start: () => '+=${document.querySelector(".title--bold")}',
      end: "top 0%",  
      pin: true,
      pinSpacing: true,
    }
  })
  
tlpFirst.to(".pFirst", {opacity: 0.05})
.to(".pFirst", {opacity: 1})
.to(".pFirst", {opacity: 1})
.to(".pFirst", {opacity: 0.05})
  

  


const tpSecond = gsap.timeline({
    scrollTrigger:{
      scrub: true,
      markers: true,
      trigger: ".pSecond",
      start: "top 50%", // start at 30% from the top of the screen. When .red gets to 30% from top, the animation is triggered
      end: "top 0%",  
      pin: true,
      pinSpacing: false,
      offset: 100,
    }
  })
  
tpSecond.to(".pSecond", {opacity: 0.05})
.to(".pSecond", {opacity: 1})
.to(".pSecond", {opacity: 1})
.to(".pSecond", {opacity: 0.05})
