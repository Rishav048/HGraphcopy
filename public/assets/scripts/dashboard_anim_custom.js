// Register plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ScrollSmoother, SplitText);

// ScrollTrigger.normalizeScroll(true)
if (typeof vw1 === 'undefined' || typeof vh1 === 'undefined') {
let vw1 = Math.max(document.documentElement.clientWidth);
let vh1 = Math.max(document.documentElement.clientHeight);

 
const initFadeInAnimationDashboard = () => {
  const fadeElements = document.querySelectorAll(".fade-in");
  fadeElements.forEach((element) => {
    gsap.set(element, { opacity: 0, y: 200, duration: 1 }); // Set initial opacity to 0

    gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        end: "bottom 80%",
        toggleActions: "play none none reverse",
        scrub: 2,
      },
    });
  });
};

// First animation section
const newProdAnim = () => {
  gsap.fromTo(
    "#truck-itself, #img01-full-truck-image",
    {
      transform: "translate3d(400px, -230px, 0)",
    },
    {
      transform: "translate3d(0px, 0px, 0)",

      scrollTrigger: {
        trigger: ".dashboard-anim--purpleBg",
        toggleActions: "restart complete none none",
        start: "top 95%",
        end: "bottom 50%",
        scrub: 3,
        markers: false,
      },
    }
  );
};

// Second animation section
const trackProdAnim = () => {
  gsap.fromTo(
    "#img02-full-drone-image",
    {
      transform: "translate3d(620px, -10px, 0)",
    },
    {
      transform: "translate3d(-80px, 0px, 0)",

      scrollTrigger: {
        trigger: ".dashboard-anim--greenBg",
        toggleActions: "restart complete none none",
        start: "top 95%",
        end: "bottom 80%",
        scrub: 2,
        markers: false,
      },
    }
  );
};

// Third animation section
const exploreProdAnim = () => {
  gsap.fromTo(
    "#img03-full-shield-image",
    {
      transform: "translate3d(520px, -10px, 0)",
    },
    {
      transform: "translate3d(-50px, 0px, 0)",

      scrollTrigger: {
        trigger: ".dashboard-anim--blueBg",
        toggleActions: "restart complete none none",
        start: "top 95%",
        end: "bottom 80%",
        scrub: 2,
        markers: false,
      },
    }
  );
};

// Pin wave image
// gsap.to(".wave-top", {
//   scrollTrigger: {
//     trigger: ".full-width-wrapper",
//     toggleActions: "restart none none reverse",
//     id: "pin",
//     pinnedContainer: ".full-width-wrapper",
//     markers: true,
//     pin: true,
//     end: "bottom 90%",
//   },
// });

// Replace image tag with svg
const replaceWithSVG = () => {
  let imgSelector = ".replaceWithSVG";
  $(imgSelector).each(function (index, element) {
    let classes = $(element).attr("class");
    let imgsrc = $(element).attr("src");
    fetch($(element).attr("src"))
      .then((response) => response.text())
      .then((svgCode) => {
        let tempElement = $(svgCode);
        tempElement.addClass(classes);
        $(element).after(tempElement);
        $(element).remove();

        // Initialise animations
        runAnimationAfterSvgLoad();
      })
      .catch((error) => {
        console.error("Error fetching SVG image:", error);
      });
  });
};

// Add animation on document load
const initAnims = () => { 
  initFadeInAnimationDashboard();
};

// Run animations after SVG load
const runAnimationAfterSvgLoad = () => {
  newProdAnim();
  trackProdAnim();
  exploreProdAnim();
  // dashboardInnerAnim();
}; 

$(document).ready(function () {
  initAnims(); // Initialise animations

  replaceWithSVG(); // Relace image with SVG
})
}
