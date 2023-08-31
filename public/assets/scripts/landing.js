// Register plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ScrollSmoother); // , SplitText

ScrollTrigger.normalizeScroll(true)

if (typeof vw === 'undefined' || typeof vh === 'undefined') {
let vw = Math.max(document.documentElement.clientWidth);
let vh = Math.max(document.documentElement.clientHeight);
console.log( 'vw: ' + vw + ' and vh: ' + vh);

// create the scrollSmoother before your scrollTriggers
const enableScrollSmoother = () => {
  ScrollSmoother.create({
    smooth: 2,
    effects: true,
    smoothTouch: 0.1,
  });
}

const removeUnwantedElements = () => {
  if(vw >= 992){
    $('.mob-only').remove();
  }else{
    $('.desk-only').remove();
  }
}

const handleScrollDirection = () => {
  let lastScrollTop = 0;

  // Function to handle the mouse scroll event and toggle the class
  function handleMouseScroll() {
    const elements = document.querySelectorAll('.truckSec'); // Replace 'your-target-class' with the class name of the elements you want to apply the class toggle to

    const st = window.pageYOffset || document.documentElement.scrollTop;

    elements.forEach(element => {
      const scrollDirection = st > lastScrollTop ? 1 : -1;

      // Toggle the class based on the scroll direction
      if (scrollDirection === 1) {
        element.classList.remove('upwards'); // Replace 'your-class' with the class name you want to add when scrolling downwards
        element.classList.add('downwards');
      } else if (scrollDirection === -1) {
        element.classList.remove('downwards');
        element.classList.add('upwards'); // Replace 'your-class' with the class name you want to remove when scrolling upwards
      }
    });

    lastScrollTop = st <= 0 ? 0 : st; // Save the current scroll position for the next scroll event
  }

  // Add an event listener to the window to detect mouse scroll
  window.addEventListener('scroll', handleMouseScroll);
}

// Reload page if resized
function reloadPageIfAbove1200() {
  if (window.innerWidth > 1200) {
    location.reload();
  }
}
window.addEventListener("resize", reloadPageIfAbove1200);


// Play SplitText Animation on Viewport
// function playAnimation() {
//   var tl = gsap.timeline(),
//     mySplitText = new SplitText(".split-text", { type: "words,chars" }),
//     chars = mySplitText.chars; //an array of all the divs that wrap each character

//   gsap.set(".split-text", { perspective: 400 });

//   tl.from(chars, {
//     duration: 0.8,
//     opacity: 0,
//     scale: 0,
//     y: 80,
//     rotationX: 180,
//     transformOrigin: "0% 50% -50",
//     ease: "back",
//     stagger: 0.01
//   });
// }

// const enableSplitTextAnim = () => {
//   gsap.utils.toArray(".split-text").forEach(function (element) {
//     ScrollTrigger.create({
//       trigger: element,
//       onEnter: function () {
//         playAnimation();
//         ScrollTrigger.getById(this.vars.id).kill();
//       }
//     });
//   });
// }

const initFadeInAnimation = () => {
  const fadeElements = document.querySelectorAll(".fade-in");
  
  fadeElements.forEach((element) => {
    let classesArray = Array.from(element.classList);
    let matchingClass = classesArray.find(className => className.startsWith("fade-in-delay-"));
    let delayValue = 0;
    if (matchingClass) {
      delayValue = matchingClass.slice("fade-in-delay-".length);
    }
    
    gsap.fromTo(element, {
        opacity: 0, 
        y: 100,
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: delayValue,

        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          end: "bottom 0%",
          toggleActions: "play none none reverse",
        },
    });
  });
}

const initUpDownAnim = () => {
  const fadeElements = document.querySelectorAll(".anim-up-down");
  
  fadeElements.forEach((element) => {
    gsap.fromTo(element, {
       
      }, {
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          end: "bottom 0%",
          toggleActions: "play none none reverse",
          toggleClass: 'active',
        },
    });
  });
}

// Add active class to all element on viewport
// const toggleClassOnViewport = () => {
//   let elements = $(".viewport-check");
  
//   elements.each(function() {
//     let element = this;
  
//     ScrollTrigger.create({
//       trigger: element,
//       start: "top bottom",
//       end: "bottom top",
//       onEnter: function() {
//         element.classList.add('viewport-active');
        
//       },
//       onEnterBack: function() {
//         element.classList.add('viewport-active');
//       },
//       onLeave: function() {
//         element.classList.remove('viewport-active');
//       },
//       onLeaveBack: function() {
//         element.classList.remove('viewport-active');
//       },
//       markers: false,
//     });
//   });
// }


// Truck animation for tablets
const tabTruckAnim = () => {
  gsap.fromTo( ".truckSec", {
    left: '45vw',
    top: '80vh',
  }, {
    left: '15vw',
    top: '120vh',
    ease: 'linear',
    
    scrollTrigger: {
        trigger: ".heroSec", 
        toggleActions: 'restart complete none none',
        start: "70% center",
        end: "bottom+=" + document.querySelector(".partnersSec").offsetHeight + "px top",
        scrub: true,
        markers: false,
        onEnter: function(){
          $('.truckSec').removeClass('vertical right');
          $('.truckSec').removeClass('flip');
        },
        onEnterBack: function(){
          $('.truckSec').removeClass('vertical right');
          $('.truckSec').removeClass('flip');
        }
    }
  })
}

// Truck animation 
const truckAnimMobile = () => {
  gsap.fromTo( "#truck-mob", {
    transform: 'translate3d(0, 0, 0)',
  }, {
    transform: 'translate3d(-200px, 200px, 0)',
    ease: 'linear',
    
    scrollTrigger: {
        trigger: "#truck-mob", 
        toggleActions: 'restart complete none none',
        start: "top center",
        end: "bottom top",
        scrub: 1,
        markers: false,
        onEnter: function(){
          $('.truckSec').removeClass('vertical right');
          $('.truckSec').removeClass('flip');
        },
        onEnterBack: function(){
          $('.truckSec').removeClass('vertical right');
          $('.truckSec').removeClass('flip');
        }
    }
  });
}

const truckAnim = () => {
  
  let headerHeight = document.querySelector(".headerSec").offsetHeight;

  gsap.fromTo( ".truckSec", {
    left: '45vw',
    top: '111vh',
  }, {
    left: '0vw',
    top: document.querySelector('.liveTrackSec').offsetTop + headerHeight,
    ease: 'linear',
    
    scrollTrigger: {
        trigger: ".heroSec", 
        toggleActions: 'restart complete none none',
        start: "70% center",
        end: "bottom+=" + document.querySelector(".partnersSec").offsetHeight + "px top",
        scrub: true,
        markers: false,
        onEnter: function(){
          $('.truckSec').removeClass('vertical right');
          $('.truckSec').removeClass('flip');
        },
        onEnterBack: function(){
          $('.truckSec').removeClass('vertical right');
          $('.truckSec').removeClass('flip');
        }
    }
  });

  gsap.fromTo( ".truckSec", {
    left: '0vw',
    top: document.querySelector('.liveTrackSec').offsetTop + headerHeight,
  }, {
    left: '75vw',
    top: document.querySelector('.featuresSec').offsetTop,
    ease: 'linear',
    
    scrollTrigger: {
        trigger: ".liveTrackSec", 
        toggleActions: 'restart complete none none',
        start: "top top",
        end: "bottom top",
        markers: false,
        scrub: true,
        onEnter: function(){
          $('.truckSec').removeClass('vertical right');
          $('.truckSec').addClass('flip');
        },
        onEnterBack: function(){
          $('.truckSec').removeClass('vertical right');
          $('.truckSec').addClass('flip');
        }
    }
  });

  gsap.fromTo( ".truckSec", {
    left: '75vw',
    top: document.querySelector('.featuresSec').offsetTop,
  }, {
    left: '0vw',
    top: document.querySelector('.journeySec').offsetTop + headerHeight + vh/8,
    ease: 'linear',
    
    scrollTrigger: {
        trigger: ".featuresSec", 
        toggleActions: 'restart complete none none',
        start: "top top",
        end: "bottom top",
        markers: false,
        scrub: true,
        onEnter: function(){
          $('.truckSec').removeClass('flip right');
          $('.truckSec').removeClass('vertical');
        },
        onEnterBack: function(){
          $('.truckSec').removeClass('flip right');
          $('.truckSec').removeClass('vertical');
        }
    }
  });

  gsap.fromTo( ".truckSec", {
    left: '0vw',
    top: document.querySelector('.journeySec').offsetTop + headerHeight + vh/8,
  }, {
    left: '0vw',
    top: document.querySelector('.whyUsSec').offsetTop + headerHeight + vh/5,
    ease: 'linear',
    
    scrollTrigger: {
        trigger: ".journeySec", 
        toggleActions: 'restart complete none none',
        start: "top top",
        end: "bottom+=" + document.querySelector(".numbersSec").offsetHeight + "px top",
        markers: false,
        scrub: true,
        onEnter: function(){
          $('.truckSec').removeClass('flip right');
          $('.truckSec').addClass('vertical');
        },
        onEnterBack: function(){
          $('.truckSec').removeClass('flip right');
          $('.truckSec').addClass('vertical');
        }
    }
  });

  gsap.fromTo( ".truckSec", {
    left: '0vw',
    top: document.querySelector('.whyUsSec').offsetTop + headerHeight + vh/5,
  }, {
    left: '0vw',
    top: document.querySelector('.contactSec').offsetTop + headerHeight + vh/5,
    ease: 'linear',
    
    scrollTrigger: {
        trigger: ".whyUsSec", 
        toggleActions: 'restart complete none none',
        start: "top top",
        end: "bottom top",
        markers: false,
        scrub: true,
        onEnter: function(){
          $('.truckSec').removeClass('flip right');
          $('.truckSec').addClass('vertical');
        },
        onEnterBack: function(){
          $('.truckSec').removeClass('flip right');
          $('.truckSec').addClass('vertical');
        }
    }
  });

  gsap.fromTo( ".truckSec", {
    left: '0vw',
    top: document.querySelector('.contactSec').offsetTop + headerHeight + vh/5,
  }, {
    left: '0vw',
    top: document.querySelector('.queAnsSec').offsetTop + headerHeight,
    ease: 'linear',
    
    scrollTrigger: {
        trigger: ".contactSec", 
        toggleActions: 'restart complete none none',
        start: "top top",
        end: "bottom top",
        markers: false,
        scrub: true,
        onEnter: function(){
          $('.truckSec').removeClass('flip right');
          $('.truckSec').addClass('vertical');
        },
        onEnterBack: function(){
          $('.truckSec').removeClass('flip right');
          $('.truckSec').addClass('vertical');
        }
    }
  });


  
  gsap.fromTo( ".truckSec", {
    left: '0vw',
    top: document.querySelector('.queAnsSec').offsetTop + headerHeight,
  }, {
    left: '75vw',
    top: document.querySelector('.subscribeSec').offsetTop - 200,
    ease: 'linear',
    
    scrollTrigger: {
        trigger: ".queAnsSec", 
        toggleActions: 'restart complete none none',
        start: "top top",
        end: "bottom-=200 top",
        markers: false,
        scrub: true,
        onEnter: function(){
          $('.truckSec').removeClass('vertical right');
          $('.truckSec').addClass('flip');
        },
        onEnterBack: function(){
          $('.truckSec').removeClass('vertical right');
          $('.truckSec').addClass('flip');
        },
        onLeave: function(){
          let accordionItems = document.querySelectorAll('.queAnsSec .accordion-item');
          accordionItems.forEach(function(item) {
            let collapse = item.querySelector('.accordion-collapse');
            if (collapse.classList.contains('show')) {
              collapse.classList.remove('show');
            }
            let button = item.querySelector('.accordion-button');
            if (button.classList.contains('collapsed')) {
              
            }else{
              button.classList.add('collapsed');
            }
          });
        },
        onLeaveBack: function(){
        }
    }
  });

  gsap.fromTo( ".truckSec", {
    left: '75vw',
    top: document.querySelector('.subscribeSec').offsetTop - 200,
  }, {
    left: '-25vw',
    top: document.querySelector('.footerSec__logo').offsetTop - 50,
    ease: 'linear',

    scrollTrigger: {
        trigger: ".subscribeSec", 
        toggleActions: 'restart complete none none',
        start: "top-=200 top",
        end: "bottom+="+ document.querySelector(".infoSec").offsetHeight +" center",
        markers: false,
        scrub: true,
        onEnter: function(){
          $('.truckSec').removeClass('vertical right');
          $('.truckSec').removeClass('flip');
        },
        onEnterBack: function(){
          $('.truckSec').removeClass('vertical right');
          $('.truckSec').removeClass('flip');
        }
    }
  });

  gsap.fromTo( ".truckSec", {
    left: '-25vw',
    top: document.querySelector('.footerSec__logo').offsetTop - 50,
  }, {
    left: '11%',
    top: document.querySelector('.footerSec__logo').offsetTop - 50,
    ease: 'linear',

    scrollTrigger: {
        trigger: ".footerSec", 
        toggleActions: 'restart complete none none',
        start: "top center",
        end: "80% bottom",
        markers: false,
        scrub: true,
        onEnter: function(){
          $('.truckSec').removeClass('flip vertical');
          $('.truckSec').addClass('right');
        },
        onEnterBack: function(){
          $('.truckSec').removeClass('flip vertical');
          $('.truckSec').addClass('right');
        }, 
        onLeaveBack: function(){
          $('.truckSec').removeClass('vertical');
          $('.truckSec').removeClass('right');
        }
    }
  });

  gsap.set( ".truckSec", {
    left: '45vw',
    top: '111vh',
  });
}


// Hero section animation
const heroSecAnim = () => {
  gsap.fromTo( "#heroSectionSvg", {
  }, {
    scrollTrigger: {
        trigger: ".heroSec", 
        toggleActions: 'restart complete none none',
        start: "65%-200 center",
        end: "bottom top",
        scrub: true,
        preventOverlaps: true,
        fastScrollEnd: true,
        markers: false,

        onEnter: function(){
          $('#heroSectionSvg').addClass('active');
        },

        onEnterBack: function(){
          $('#heroSectionSvg').addClass('active');
        },

        onLeave: function(){
          $('#heroSectionSvg').removeClass('active');
        },
    }
  });

  gsap.fromTo( "#heroSec__truck1", {
    transform: 'translate3d(0, 0, 0)',
  }, {
    transform: 'translate3d(-300px, 300px, 0)',

    scrollTrigger: {
        trigger: ".heroSec", 
        toggleActions: 'restart complete none none',
        start: "65% center",
        end: "bottom top",
        scrub: true,
        preventOverlaps: true,
        fastScrollEnd: true,
        markers: false,
    }
  });

  gsap.fromTo( "#heroSec__drone-wrapper3", {
    transform: 'translate3d(0, 0, 0)',
  }, {
    transform: 'translate3d(0, 220px, 0)',

    scrollTrigger: {
        trigger: ".heroSec", 
        toggleActions: 'restart complete none none',
        start: "65% center",
        end: "bottom top",
        scrub: true,
        preventOverlaps: true,
        fastScrollEnd: true,
        markers: false,
    }
  });
}

// Subscribe animation
const subscribeSecAnim = () => {
  gsap.fromTo( ".subscribeSec__layer1", {
    transform: 'translate3d(100%, -70%, 0)',
  }, {
    transform: 'translate3d(0px, 0, 0)',

    scrollTrigger: {
        trigger: ".subscribeSec", 
        toggleActions: 'restart complete none none',
        start: "top 100%",
        end: "bottom top",
        scrub: true,
        preventOverlaps: true,
        fastScrollEnd: true,
        markers: false,
    }
  });
}

// journeySecAnim animation
const journeySecAnim = () => {
  gsap.fromTo( ".journeySec", {
    
  }, {

    scrollTrigger: {
        trigger: ".journeySec", 
        toggleActions: 'restart complete none none',
        start: "top 100%",
        end: "bottom 0%",

        onEnter: function(){
          $('.trackDotsMoving, .journeySVG').addClass('active');
        },
        onEnterBack: function(){
          $('.trackDotsMoving, .journeySVG').addClass('active');
        },
        onLeave: function(){
          $('.trackDotsMoving, .journeySVG').removeClass('active');
        },
        onLeaveBack: function(){
          $('.trackDotsMoving, .journeySVG').removeClass('active');
        },
    }
  });

  
}
const journeySecMobAnim = () => {
  gsap.fromTo( ".journeySec", {
    
  }, {
    scrollTrigger: {
        trigger: ".journeySec", 
        toggleActions: 'restart complete none none',
        start: "top bottom",
        end: "bottom top",

        onEnter: function(){
          $('.hiw-mob-svg, .journeySVG').addClass('active');
        },
        onEnterBack: function(){
          $('.hiw-mob-svg, .journeySVG').addClass('active');
        },
        onLeave: function(){
          $('.hiw-mob-svg, .journeySVG').removeClass('active');
        },
        onLeaveBack: function(){
          $('.hiw-mob-svg, .journeySVG').removeClass('active');
        },
    }
  });
  
}

// Contact section animation
const whuUsSecAnim = () => {

  gsap.fromTo('#whyUs__plane', {
    transformOrigin: 'right center', scale: 0.25, transform: 'translateX(100px)',
  },{
    scale: 1, transform: 'translateX(0)',
    duration: 1,
    scrollTrigger: {
      trigger: '#whyUs__plane',
      start: "top 80%",
      end: "top 20%",
      toggleActions: "play none none reverse",
      scrub: true,
        preventOverlaps: true,
        fastScrollEnd: true,
    },
  });

  gsap.fromTo('.whyUsSec', {},{
    scrollTrigger: {
      trigger: '.whyUsSec',
      start: "top bottom",
      end: "bottom top",
      toggleActions: "play none none reverse",

      onEnter: function(){
        $('.whyDotsMoving').addClass('active');
      },
      onEnterBack: function(){
        $('.whyDotsMoving').addClass('active');
      },
      onLeave: function(){
        $('.whyDotsMoving').removeClass('active');
      },
      onLeaveBack: function(){
        $('.whyDotsMoving').removeClass('active');
      },
    },
  });
  
}



// Contact section animation
const contactSecAnim = () => {

  gsap.fromTo(".contactSec__layer2", {
      
    },{
      
    scrollTrigger: {
      trigger: ".contactSec__layer2",
      start: "top bottom",
      end: "bottom top",
      toggleActions: "play none none reverse",
      scrub: true,

      onEnter: function() {
        $('.contactSec__layer2').addClass('fade-updown-active');
        
      },
      onEnterBack: function() {
        $('.contactSec__layer2').addClass('fade-updown-active');
      },
      onLeave: function() {
        $('.contactSec__layer2').removeClass('fade-updown-active');
      },
      onLeaveBack: function() {
        $('.contactSec__layer2').removeClass('fade-updown-active');
      },
    },
  });

}


/* Check if all SVGs got loaded */
function executeAfterSVGsLoaded(className, callback) {
  const svgs = document.querySelectorAll(`.${className}`);
  let unloadedSVGs = svgs.length;
  
  function handleSVGLoad() {
    unloadedSVGs--;
    if (unloadedSVGs === 0) {
      console.log('All SVGs with class "' + className + '" loaded successfully..');
      callback();
    }
  }

  for (const svg of svgs) {
    if (svg.complete) {
      handleSVGLoad();
    } else {
      svg.addEventListener("load", handleSVGLoad());
    }
  }
}


// Replace image tag with svg
const replaceWithSVG = () => {
  let imgSelector = '.replaceWithSVG';
  $(imgSelector).each(function(index, element) {
    const totalElements = $(imgSelector).length;
    let classes = $(element).attr('class');
    if( $(element).attr('src') ){
      let imgsrc = $(element).attr('src');
      fetch( $(element).attr('src') )
      .then((response) => response.text())
      .then((svgCode) => {
        let tempElement = $(svgCode);
        tempElement.addClass( classes );
        $(element).after(tempElement);
        $(element).remove();
        if (index === totalElements - 1) {
          setTimeout(function(){
            executeAfterSVGsLoaded("replaceWithSVG", function () {
              setTimeout(function(){
                runAnimationAfterSvgLoad();
              }, 1000);
            });
          }, 1000);
        }
      })
      .catch((error) => {
        console.error("Error fetching SVG image:", error);
      });
    }else{
      let imgsrc = $(element).attr('data-src');
      fetch( $(element).attr('data-src') )
      .then((response) => response.text())
      .then((svgCode) => {
        let tempElement = $(svgCode);
        tempElement.addClass( classes );
        $(element).after(tempElement);
        $(element).remove();
        if (index === totalElements - 1) {
          setTimeout(function(){
            executeAfterSVGsLoaded("replaceWithSVG", function () {
              setTimeout(function(){
                runAnimationAfterSvgLoad();
              }, 1000);
            });
          }, 1000);
          
        }
      })
      .catch((error) => {
        console.error("Error fetching SVG image:", error);
      });
    }
  });
  
  if($(imgSelector).length == 0){
    setTimeout(function(){
      runAnimationAfterSvgLoad();
    }, 1000);
  }
}


const partnersSec = () => {
  // Owl Carousels
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: false,
    margin: 40,
    slideTransition: "linear",
    autoplayTimeout: 2000,
    autoplaySpeed: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 4,
        margin: 10,
      }, 
      600: {
        items: 5,
      },
      768: {
        items: 6,
      },
      1200: {
        items: 7,
      },
      1600: {
        items: 9,
      },
    },
  });

  gsap.fromTo( ".partnersSec", {
  }, {
    scrollTrigger: {
        trigger: ".partnersSec", 
        toggleActions: 'restart complete none none',
        start: "top bottom",
        end: "bottom top",
        onEnter: function(){
          $('.owl-carousel').trigger('play.owl.autoplay');
        },
        onEnterBack: function(){
          $('.owl-carousel').trigger('play.owl.autoplay');
        },
        onLeave: function(){
          $('.owl-carousel').trigger('stop.owl.autoplay');
        },
        onLeaveBack: function(){
          $('.owl-carousel').trigger('stop.owl.autoplay');
        }
    }
  });
}




// Animate numbers
const animateNumbers = () =>{
  gsap.fromTo( ".numbersSec", {
  }, {
    scrollTrigger: {
        trigger: ".numbersSec", 
        toggleActions: 'restart complete none none',
        start: "top 75%",
        end: "bottom top",
        toggleClass: 'animate',
        onEnter: function(){
          $('.animate-number').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 1500,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
          });
        }
    }
  });
}


const smoothScrollToSection = () => {
  // Smooth scroll to section
  let headerHeight = 90;
  if(vw > 2200){
    headerHeight = 117;
  }
  if(vw < 1300){
    headerHeight = 70;
  }
  if(window.location.hash) { // Checks # on URL
    let targetPosition = $(window.location.hash).offset().top - headerHeight;
    gsap.to(window, {duration: 2, scrollTo:  targetPosition });
  }
  $("a").click(function( event ) {
    let href = $(this).attr('href');
    let hash = href.substring(href.indexOf('') + 1);
    if(hash){
      if ($('' + hash).length) {
        event.preventDefault();
        $(this).closest('ul').find('li').removeClass('active');
        $(this).closest('li').addClass('active');
        let targetPosition = $('' + hash).offset().top - headerHeight;
        gsap.to(window, {duration: 2, scrollTo:  targetPosition });
      }
    }
  });
}


// Add animation on document load
const initAnims = () =>  {
  removeUnwantedElements();
  
  if  (vw >= 1200){
    enableScrollSmoother();
  }
}

// Run animations after SVG load
const runAnimationAfterSvgLoad = () => {
  
  if(vw >= 992){
    heroSecAnim();
    journeySecAnim();
    whuUsSecAnim();
  }else{
    journeySecMobAnim();
  }
  
  partnersSec();
  subscribeSecAnim();
  contactSecAnim();
  animateNumbers();
  smoothScrollToSection();
  initFadeInAnimation();
  initUpDownAnim();
  handleScrollDirection();

  if  (vw > 1200){
    truckAnim();
  } else if ( vw > 991 && vw < 1200 ){
    tabTruckAnim();
  } else{
    truckAnimMobile();
  }

  
}

// Scroll to section when id is not found in the page
$(document).ready(function() {
  initAnims(); // Initialise animations
  replaceWithSVG(); // Relace image with SVG
  
  // Toggle class on header on scroll
  if ($(this).scrollTop() > 50 ) {
    $('.headerSec').addClass('scrolling');
  }else{
    $('.headerSec').removeClass('scrolling');
  }
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50 ) {
      $('.headerSec').addClass('scrolling');
    }else{
      $('.headerSec').removeClass('scrolling');
    }
  });
  
});


/* menu-btn */
$('.menu-btn, .menuSec__links a').click(function(){
  $('.menuSec').addClass('animating');
  $('body').toggleClass('no-scroll');
  $('.menuSec').toggleClass('active');
  setTimeout(function(){
    $('.menuSec').removeClass('animating');
  }, 1000)
})
}