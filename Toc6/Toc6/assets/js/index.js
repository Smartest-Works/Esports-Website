gsap.registerPlugin(ScrollTrigger);

let scroll;

const body = document.body;
const select = (e) => document.querySelector(e);
const selectAll = (e) => document.querySelectorAll(e);
//const container = select('.site-main');

initPageTransitions();

// Animation - First Page Load
function initLoader() { 

   var tl = gsap.timeline();

   tl.set("html", { 
		cursor: "wait"
	});

   tl.set(".loading-screen", {
      yPercent: 0,
      autoAlpha: 1,
   });

   tl.set(".nav-desktop .btn-link", {
      yPercent: 100,
   });
  
   if ($(window).width() > 1024) { 
      tl.set(".once-in", {
         y: "10vh",
         opacity: 0,
      });
   }
   
   // Calculate offset because of Rotate -11deg
   $('.default-header .span-line .span-line-inner').each(function() {
      let spanInner = $(this);
      let fontSize = parseInt($(spanInner).css('font-size'));
  
      tl.set(spanInner, {
        yPercent: 110,
        x: (fontSize * -.25) + 'px',
        rotate: "0.001deg",
      });
  
   });

   tl.to(".loading-screen svg path", {  
      yPercent: -160,
      duration: 1.1, 
      stagger: -.015,
      ease: Elastic.easeIn.config(1, 0.65),
      delay: 0.25,
   });

   tl.to(".loading-screen", {
      yPercent: -150,
      duration: .9,
      ease: "Power4.easeInOut"
   },"=-.25");
  
   tl.to(".nav-desktop .btn-link", {
      duration: 1.1,
      yPercent: 0,
      stagger: .05,
      ease: Elastic.easeOut.config(1, 0.75),
      onStart: staggerSpanTitle,
   },"=-.5");
  
   function staggerSpanTitle() {
      gsap.to(".default-header .span-line .span-line-inner", {
         duration: 1.1,
         yPercent: 0,
         x: "0px",
         ease: Elastic.easeOut.config(1, 0.75),
         stagger: .05,
         delay: 0.15,
         onStart: staggerOnceIn
      });
   }
  
   if ($(window).width() > 1024) { 
      function staggerOnceIn() {
         gsap.to(".once-in", {
            duration: 1.1,
            y: "0vh",
            opacity: 1,
            stagger: .05,
            // ease: "Power4.easeOut",
            ease: Elastic.easeOut.config(1, 0.65),
            delay: .3,
         });
      }
   }

   tl.set("html", { 
		cursor: "auto",
      delay: .5
	});

}

// Animation - Page transition In Red
function pageTransitionInRed() {

  gsap.set(".loading-slide", { 
    backgroundColor: "var(--color-primary)",
    autoAlpha: 0,
  });	

  pageTransitionIn();

}

// Animation - Page transition In Gray
function pageTransitionInGray() {

  gsap.set(".loading-slide", { 
    backgroundColor: "var(--color-lightgray)",
    autoAlpha: 0,
  });	

  pageTransitionIn();

}

// Animation - Page transition In Dark
function pageTransitionInDark() {

  gsap.set(".loading-slide", { 
    backgroundColor: "var(--color-dark-dark)",
    autoAlpha: 0,
  });	

  pageTransitionIn();

}

// Animation - Page transition In White
function pageTransitionInWhite() {

  gsap.set(".loading-slide", { 
    backgroundColor: "var(--color-light)",
    autoAlpha: 0,
  });	

  pageTransitionIn();

}

// Animation - Page transition In
function pageTransitionIn() {
	var tl = gsap.timeline();

   tl.set(".loading-slide", {
	  yPercent: 150,
      autoAlpha: 1,
	});

   if(document.querySelector(".start-home-video")) {
      tl.set(".start-home-video", { 
         display: "none"
      });
   }

   tl.set(".loading-fade", {
      autoAlpha: 0,
   });

   tl.to(".loading-slide", {
		duration: .9,
      yPercent: 0,
		ease: "Power3.easeInOut"
	});

   if(document.querySelector(".start-home-video")) {
      gsap.set(".start-home-video", { 
         display: "block"
      });
   }

   tl.to(".loading-fade", {
		duration: .9,
      autoAlpha: 1,
		ease: "Power1.easeInOut"
	},"=-.9");

   tl.to(".nav-desktop .btn-link", {
		duration: .4,
      yPercent: -100,
      stagger: .05,
		ease: "Power3.easeIn"
	},"=-.9");

   tl.set(".loading-fade", {
      autoAlpha: 0
	});

   tl.to(".loading-slide", {
		duration: .5,
		autoAlpha: 0,
		ease: "Power1.EaseInOut",
      delay: .05
	});

}

// Animation - Page transition Out
function pageTransitionOut() {
	var tl = gsap.timeline();

  tl.call(function() {
    scroll.start();
  });

  tl.set(".nav-desktop .btn-link", {
    yPercent: 100,
	});

   if ($(window).width() > 1024) { 
      tl.set(".once-in", {
         y: "10vh",
         opacity: 0,
      });
   }

  // Calculate offset because of Rotate -11deg
  $('.default-header .span-line .span-line-inner').each(function() {
    let spanInner = $(this);
    let fontSize = parseInt($(spanInner).css('font-size'));

    tl.set(spanInner, {
      yPercent: 110,
      x: (fontSize * -.25) + 'px',
      rotate: "0.001deg",
    });

  });

  tl.to(".nav-desktop .btn-link", {
		duration: 1.1,
    yPercent: 0,
    stagger: .05,
		ease: Elastic.easeOut.config(1, 0.75),
    onStart: staggerSpanTitle,
    delay: .25
	});

  function staggerSpanTitle() {
  
    gsap.to(".default-header .span-line .span-line-inner", {
      duration: 1.1,
      yPercent: 0,
      x: "0px",
      ease: Elastic.easeOut.config(1, 0.75),
      stagger: .05,
      delay: 0.15,
      onStart: staggerOnceIn
    });
  }

  if ($(window).width() > 1024) { 
   function staggerOnceIn() {
      gsap.to(".once-in", {
         duration: 1.1,
         y: "0vh",
         opacity: 1,
         stagger: .05,
         // ease: "Power4.easeOut",
         ease: Elastic.easeOut.config(1, 0.65),
         delay: .3,
      });
   }
   }


}

function initPageTransitions() {

  //let scroll;

  // do something before the transition starts
  barba.hooks.before(() => {
    select('html').classList.add('is-transitioning');
  });

  // do something after the transition finishes
  barba.hooks.after(() => {
    select('html').classList.remove('is-transitioning');
    // reinit locomotive scroll
    scroll.init();
    scroll.stop();
  });

  // scroll to the top of the page
  barba.hooks.enter(() => {
    scroll.destroy();
  });

  // scroll to the top of the page
  barba.hooks.afterEnter(() => {
    window.scrollTo(0, 0);
  });

  barba.hooks.leave(() => {
    $(".btn-menu .btn-click").removeClass('magnetic');
    initBtnMenuOpenClose();
    $(".nav-main").removeClass('active');
    $(".nav-main").addClass('not-active');
  }); 


  barba.init({
    sync: true,
    debug: false,
    timeout:7000,
    transitions: [{ 
      name: 'to-dark',
      from: {
      },
      to: {
        namespace: ['home']
      },
      once(data) {
        initSmoothScroll(data.next.container);
        initScript();
        initLoader();
      },
      async leave(data) {
        // animate loading screen in
        pageTransitionInDark(data.current);
        await delay(400);
        $("main, .nav-main").removeClass('theme-nav-light');
        $("main, .nav-main").addClass('theme-nav-dark');
        await delay(495);
        data.current.container.remove();
      },
      async enter(data) {
        // animate loading screen away
        pageTransitionOut(data.next);
        initBarbaNavUpdate(data);
      },
      async beforeEnter(data) {
        ScrollTrigger.getAll().forEach(t => t.kill());
        scroll.destroy();
        initSmoothScroll(data.next.container);
        initScript(); 
      },
    },
    { 
      name: 'to-red',
      from: {
      },
      to: {
        namespace: ['cultuur', 'contact' , 'success', 'error']
      },
      async leave(data) {
        // animate loading screen in
        pageTransitionInRed(data.current);
        await delay(400);
        $("main, .nav-main").removeClass('theme-nav-light');
        $("main, .nav-main").addClass('theme-nav-dark');        
        await delay(495);
        data.current.container.remove();
      },
      async enter(data) {
        // animate loading screen away
        pageTransitionOut(data.next);
        initBarbaNavUpdate(data);
      },
      async beforeEnter(data) {
        ScrollTrigger.getAll().forEach(t => t.kill());
        scroll.destroy();
        initSmoothScroll(data.next.container);
        initScript(); 
      },
    },
    { 
      name: 'to-gray',
      from: {
      },
      to: {
        namespace: ['press', 'textpage', 'partners']
      },
      async leave(data) {
        // animate loading screen in
        pageTransitionInGray(data.current);
        await delay(400);
        $("main, .nav-main").removeClass('theme-nav-dark');
        $("main, .nav-main").addClass('theme-nav-light');
        await delay(395);
        data.current.container.remove();
      },
      async enter(data) {
        // animate loading screen away
        pageTransitionOut(data.next);
        initBarbaNavUpdate(data);
      },
      async beforeEnter(data) {
        ScrollTrigger.getAll().forEach(t => t.kill());
        scroll.destroy();
        initSmoothScroll(data.next.container);
        initScript(); 
      },
    },
    {
      name: 'default',
      once(data) {
        // do something once on the initial page load
        initSmoothScroll(data.next.container);
        initScript();
        initLoader();
      },
      async leave(data) {
        // animate loading screen in
        pageTransitionInWhite(data.current);
        await delay(400);
        $("main, .nav-main").removeClass('theme-nav-dark');
        $("main, .nav-main").addClass('theme-nav-light');
        await delay(395);
        data.current.container.remove();
      },
      async enter(data) {
        // animate loading screen away
        pageTransitionOut(data.next);
        initBarbaNavUpdate(data);
      },
      async beforeEnter(data) {
        ScrollTrigger.getAll().forEach(t => t.kill());
        scroll.destroy();
        initSmoothScroll(data.next.container);
        initScript(); 
      },
    }]
  });

  function initSmoothScroll(container) {

    scroll = new LocomotiveScroll({
      el: container.querySelector('[data-scroll-container]'),
      smooth: true,
      lerp: 0.1
    });

    window.onresize = scroll.update();

    scroll.on("scroll", () => ScrollTrigger.update());

    ScrollTrigger.scrollerProxy('[data-scroll-container]', {
      scrollTop(value) {
        return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: container.querySelector('[data-scroll-container]').style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.defaults({
      scroller: document.querySelector('[data-scroll-container]'),
    });

    /**
     * Remove Old Locomotive Scrollbar
     */

    const scrollbar = selectAll('.c-scrollbar');

    if(scrollbar.length > 1) {
      scrollbar[0].remove();
    }

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener('refresh', () => scroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

  }  
}

function delay(n) {
	n = n || 2000;
	return new Promise((done) => {
		setTimeout(() => {
			done();
		}, n);
	});
}

/**
 * Refresh Nav Fixed
 */
function initBarbaNavUpdate(data) {

    let parser = new DOMParser();
    let dom = parser.parseFromString(data.next.html, 'text/html');
    let navs = dom.querySelectorAll('[data-barba-update]');
    document.querySelectorAll('[data-barba-update]').forEach(function(el, index) {
        const classes = navs[index].classList.value;
        el.setAttribute('class', classes);
    });

}


/**
 * Fire all scripts on page load
 */
function initScript() {
  select('body').classList.remove('is-loading');
  initFlickitySlider();
  initWindowInnerheight();
  initCheckTouchDevice();
  initBtnMenuOpenClose();
  initPlayCaseThumbHover();
  initScrollToLoco();
  initStickyCursorWithDelay();
  initLazyLoad();
  initPlayVideoInview();
  initAnimateLocoOnScroll();
  initMagneticButtons();
  initDataBackground();
  initScrollLetters();
  initVimeoBackground();
  initVimeoPopup();
  initVimeoPlayPauze();
  initTricksWords();
  initScrolltriggerCheckScroll();
  initScrolltriggerAnimations();
}

/**
* Window Inner Height Check
*/
function initWindowInnerheight() {
    
  // https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

}

/**
* Check touch device
*/
function initCheckTouchDevice() {
    
  function isTouchScreendevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints;      
  };
  
  if(isTouchScreendevice()){
    $('main').addClass('touch');
    $('main').removeClass('no-touch');
  } else {
    $('main').removeClass('touch');
    $('main').addClass('no-touch');
  }
  $(window).resize(function() {
    if(isTouchScreendevice()){
       $('main').addClass('touch');
       $('main').removeClass('no-touch');
    } else {
       $('main').removeClass('touch');
       $('main').addClass('no-touch');
    }
  });

}

/**
* Hamburger Nav Open/Close
*/

function initCloseNavFunction() {
  var tl = gsap.timeline({paused: true});
  tl.fromTo(".nav-main .nav-full .giant-badge",{
    yPercent: -50,
    xPercent: -65,
  }, {
    duration: .6,
    yPercent: -50,
    xPercent: 0,
    ease: Elastic.easeIn.config(1, 0.99),
  });
  tl.fromTo(".nav-main .nav-full .giant-badge svg",{
    rotation: 52,
  }, {
    duration: .6,
    rotation: 0.001,
    ease: "Power2.easeIn",
  },"=-.6");
  tl.fromTo(".nav-main .nav-full .nav-full-bg", {
    autoAlpha: 1,
  }, {
    duration: .6,
    autoAlpha: 0,
    ease: "Power2.easeIn",
  },"=-.6");

  tl.play();
}

function initOpenNavFunction() {
  var tl = gsap.timeline({paused: true});
  tl.fromTo(".nav-main .nav-full .giant-badge",{
    yPercent: -50,
    xPercent: 0,
  }, {
    duration: 1.5,
    yPercent: -50,
    xPercent: -65,
    ease: Elastic.easeOut.config(1, 1.3),
  });
  tl.fromTo(".nav-main .nav-full .giant-badge svg",{
    rotation: 0.001,
  }, {
    duration: 1.5,
    rotation: 52,
    ease: Elastic.easeOut.config(1, 1.3),
  },"=-1.5");
  tl.fromTo(".nav-main .nav-full .nav-full-bg",{
    autoAlpha: 0,
  }, {
    duration: 1.5,
    autoAlpha: 1,
    ease: "Power4.easeOut",
  },"=-1.5");

  tl.play();
}

function initBtnMenuOpenClose() {
  $(".btn-menu .btn-click, .nav-full-bg").click(function(){
    if ($(".nav-main").hasClass('not-active')) {   
      $(".nav-main").addClass('active');
      $(".nav-main").removeClass('not-active');
      scroll.stop();   
      initWindowInnerheight();
    } else {
      $(".nav-main").addClass('not-active');
      $(".nav-main").removeClass('active');
      scroll.start();
      initWindowInnerheight();
    }
  });
}

/**
* Play Video Thumb Hover
*/
function initPlayCaseThumbHover() {
   
   $(".single-case a").each(function (index) {
      let videoCaseSingle = $(this).find('video');
      videoCaseSingle.trigger('pause');

      $(this).find(".thumb.has-video").on('mouseenter', function() {
         videoCaseSingle.trigger('load');
      });
      $(this).find(".thumb.has-video").on('mouseleave', function() {
         videoCaseSingle.trigger('pause');
      });
   });
}


/**
 * ScrollTo Anchor Links
 */
function initScrollToLoco() {
  $(".scroll-to-loco a").click (function(e) {
    e.preventDefault();
    let target = e.target.getAttribute("href");
    scroll.scrollTo(target,{
      'duration': 800,
      'easing':[0.7, 0, 0.3, 1],
      'disableLerp': false
    });
  })
}

/**
* Sticky Cursor with Delay
*/
function initStickyCursorWithDelay() {
    
  // Sticky Cursor with delay
  // https://greensock.com/forums/topic/21161-animated-mouse-cursor/
  var cursorFill = $(".custom-cursor-fill");
  var cursorSpan = $(".custom-cursor-span");

  var posXFill = -200
  var posYFill = -200
  var posXSpan = -200
  var posYSpan = -200
  var mouseX = -200
  var mouseY = -200

  if(document.querySelector(".custom-cursor-fill, .custom-cursor-span")) {
  gsap.to({}, 0.0083333333, {
    repeat: -1,
    onRepeat: function() {

      if(cursorFill) {
        posXFill += (mouseX - posXFill) / 3;
        posYFill += (mouseY - posYFill) / 3;
        gsap.set(cursorFill, {
          css: {
          left: posXFill,
          top: posYFill
          }
        });
      }
      if(cursorSpan) {
        posXSpan += (mouseX - posXSpan) / 2.75;
        posYSpan += (mouseY - posYSpan) / 2.75;   
        gsap.set(cursorSpan, {
          css: {
          left: posXSpan,
          top: posYSpan 
          }
        });
      }
    }
  });
  }

  $(document).on("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });


  // Work Grid Hover
  $('.cases-grid a').on('mouseenter', function() {
    cursorFill.add(cursorSpan).addClass('cursor-normal');
	 cursorFill.add(cursorSpan).removeClass('cursor-video-pause');
	 cursorFill.add(cursorSpan).removeClass('cursor-video-play');
    cursorFill.add(cursorSpan).addClass("hover").delay(100).queue(function(next){
      cursorFill.add(cursorSpan).removeClass("hover");
      next();
    });
  });
  $('.cases-grid a').on('mouseleave', function() {
    cursorFill.add(cursorSpan).removeClass('cursor-normal');
  });
  // $('.cases-grid .single-case a').hover(function() {
  //   $(this).parent().siblings().toggleClass("no-hover")
  // });

//   $('.archive-work-grid li').on('mouseenter', function() {
//     $(".mouse-pos-list-btn").addClass("hover").delay(100).queue(function(next){
//       $(this).removeClass("hover");
//       next();
//     });
//   });

  // Pressed
  $(document).on('mousedown', function() {
    cursorFill.add(cursorSpan).addClass('pressed');
  });
  $(document).on('mouseup', function() {
    cursorFill.add(cursorSpan).removeClass('pressed');
  });

  // Home Header Hover

  $('.home-header .start-home-video').on('mouseenter', function() {
    cursorFill.add(cursorSpan).addClass('cursor-home');
    cursorFill.add(cursorSpan).removeClass('cursor-close');
  });
  $('.home-header .start-home-video').on('mouseleave', function() {
    cursorFill.add(cursorSpan).removeClass('cursor-home');
  });

  // Single Vimeo
  $('.video-hover').on('mouseenter', function() {
    cursorFill.add(cursorSpan).addClass('cursor-video');
  });
  $('.video-hover').on('mouseleave', function() {
    cursorFill.add(cursorSpan).removeClass('cursor-video');
  });
  $('.video-hover .vimeo-control-play').on('mouseenter', function() {
    cursorFill.add(cursorSpan).addClass('cursor-video-play');
    cursorFill.add(cursorSpan).removeClass('cursor-video-pause');
  });
  $('.video-hover .vimeo-control-pause').on('mouseenter', function() {
    cursorFill.add(cursorSpan).addClass('cursor-video-pause');
    cursorFill.add(cursorSpan).removeClass('cursor-video-play');
  });


  // // Close
  // $('.close-showreel-lightbox').on('mouseover', function() {
  //     cursorFill.add(cursorSpan).addClass('cursor-close');
  // });
  // $('.close-showreel-lightbox').on('mouseleave', function() {
  //   cursorFill.add(cursorSpan).removeClass('cursor-close');
  // });

}

/**
* Lazy Load
*/
function initLazyLoad() {
    // https://github.com/locomotivemtl/locomotive-scroll/issues/225
    // https://github.com/verlok/vanilla-lazyload
    var lazyLoadInstance = new LazyLoad({ 
      elements_selector: ".lazy",
    });

}

/**
* Play Video Inview
*/
function initPlayVideoInview() {

  let allVideoDivs = gsap.utils.toArray('.playpauze');

  allVideoDivs.forEach((videoDiv, i) => {

    let videoElem = videoDiv.querySelector('video')

    ScrollTrigger.create({
      scroller: document.querySelector('[data-scroll-container]'),
      trigger: videoElem,
      start: '0% 200%',
      end: '100% -100%',
      onEnter: () => videoElem.play(),
      onEnterBack: () => videoElem.play(),
      onLeave: () => videoElem.pause(),
      onLeaveBack: () => videoElem.pause(),
    });

  });
}

/**
* Animate Loco on Scroll
*/
function initAnimateLocoOnScroll() {
  
   function startCheckScroll() {
      scroll.on('scroll', (instance) => {
         // console.log(instance.scroll.y);
         gsap.set($('.btn-menu .btn-fill'), {
            css: { 
               rotate: (instance.scroll.y / 20)
            }
         });

         //   if(window.innerWidth > 1024){
            
         //     var caseCount = $( ".cases-grid-cases .single-case" ).length;
         //     if(document.querySelector(".cases-grid-cases .single-case.odd")) {
         //       gsap.set($('.cases-grid-cases .single-case.odd'), {
         //         css: {
         //           y: (instance.scroll.y / (caseCount * -2))
         //         }
         //       });
         //     }
         //     if(document.querySelector(".cases-grid-cases .single-case.odd-flip")) {
         //       gsap.set($('.cases-grid-cases .single-case.odd-flip'), {
         //         css: {
         //           y: (instance.scroll.y / (caseCount * .9))
         //         }
         //       });
         //     }
         //   }
         // });

         if(window.innerWidth > 1024){
            
            var caseCount = $( ".cases-grid-cases-3 .single-case" ).length;
            if(document.querySelector(".cases-grid-cases-3 .single-case")) {
               gsap.set($('.cases-grid-cases-3 .single-case:nth-child(3n+2)'), {
               css: {
                  y: (instance.scroll.y / (caseCount * -2))
               }
               });
            }
            if(document.querySelector(".cases-grid-cases-3 .single-case")) {
               gsap.set($('.cases-grid-cases-3 .single-case:nth-child(3n+3)'), {
               css: {
                  y: (instance.scroll.y / (caseCount * -1))
               }
               });
            }
         }
      });
   }
   startCheckScroll();

   barba.hooks.after(() => {
      startCheckScroll();
   });

}

/**
* Magnetic Buttons
*/
function initMagneticButtons() {
    
  // Magnetic Buttons
  // Found via: https://codepen.io/tdesero/pen/RmoxQg
  var magnets = document.querySelectorAll('.magnetic');
  var strength = 100;
  
  // START : If screen is bigger as 1024 px do magnetic
  if(window.innerWidth > 1024){
  // Mouse Reset
  magnets.forEach( (magnet) => {
    magnet.addEventListener('mousemove', moveMagnet );
    $(this.parentNode).removeClass('not-active');
    magnet.addEventListener('mouseleave', function(event) {
        gsap.to( event.currentTarget, 1.5, {
          x: 0, 
          y: 0, 
          ease: Elastic.easeOut
        });
        gsap.to( $(this).find(".btn-text"), 1.5, {
          x: 0, 
          y: 0, 
          ease: Elastic.easeOut
        });
    });
  });

  // Mouse move
  function moveMagnet(event) {
    var magnetButton = event.currentTarget;
    var bounding = magnetButton.getBoundingClientRect();
    var magnetsStrength = magnetButton.getAttribute("data-strength");
    var magnetsStrengthText = magnetButton.getAttribute("data-strength-text");
      
    gsap.to( magnetButton, 1.5, {
        x: ((( event.clientX - bounding.left)/magnetButton.offsetWidth) - 0.5) * magnetsStrength,
        y: ((( event.clientY - bounding.top)/magnetButton.offsetHeight) - 0.5) * magnetsStrength,
        rotate: "0.001deg",
        ease: Power4.easeOut
    });
    gsap.to( $(this).find(".btn-text"), 1.5, {
        x: ((( event.clientX - bounding.left)/magnetButton.offsetWidth) - 0.5) * magnetsStrengthText,
        y: ((( event.clientY - bounding.top)/magnetButton.offsetHeight) - 0.5) * magnetsStrengthText,
        rotate: "0.001deg",
        ease: Power4.easeOut
    });
  }

  }; // END : If screen is bigger as 540 px do magnetic

  // Hover Rounded btn Rotate

  if(window.innerWidth > 1024){ 
  if(document.querySelector(".btn-badge-rotate .magnetic")) {

    $(".btn-badge-rotate").each(function (index) {
      let triggerElement = $(this);
      let targetElementSVG = $(this).find(".magnetic svg");
  
      let tl = gsap.timeline({
        paused: true
      });

      tl.to(targetElementSVG, {  
        rotation:18, 
        transformOrigin:'center',
        duration:.3, 
        repeat:-1, 
        ease:'none'
      });

      triggerElement.hover(function(index) {
        tl.restart();
      }, function() {
        tl.kill();
      });

    });
  }
  }

  // Hover Cursor

  if(window.innerWidth > 1024){ 
  if(document.querySelector(".custom-cursor-fill")) {

    $(".custom-cursor-fill").each(function (index) {
      let triggerElement = $(".hover-rotate-cursor");
      let targetElementSVG = $(this).find("svg");
  
      let tl = gsap.timeline({
        paused: true
      });

      tl.to(targetElementSVG, {  
        rotation:18, 
        transformOrigin:'center',
        duration:.3, 
        repeat:-1, 
        ease:'none'
      });

      triggerElement.hover(function(index) {
        tl.restart();
      }, function() {
        tl.kill();
      });

    });
  }
  }

  // Auto Rotate

  if(window.innerWidth < 1024){ 
    if(document.querySelector(".auto-rotate-mobile")) {
  
      $(".auto-rotate-mobile").each(function (index) {
        let triggerElement = $(".auto-rotate-mobile");
        let targetElementSVG = $(this).find("svg");
    
        let tl = gsap.timeline({
          paused: false
        });
  
        tl.to(targetElementSVG, {  
          rotation:18, 
          transformOrigin:'center',
          duration:.45, 
          repeat:-1, 
          ease:'none'
        });
  
      });
    }
    }

  // Hover Logo

  if(document.querySelector(".btn-logo")) {

    $(".btn-logo").each(function (index) {
      let triggerElement = $(this);
      let targetElementSVG = $(this).find("svg path");
  
      let tl = gsap.timeline({
        paused: true
      });

      tl.set(targetElementSVG, {  
        yPercent: 0
      });
      tl.to(targetElementSVG, {  
        yPercent: -50,
        duration: .4, 
        stagger: .03,
        onStart: btnLogoDown,
        ease: "Power3.easeInOut",
      });
      function btnLogoDown() {
        gsap.to(targetElementSVG, {  
          yPercent: 0,
          duration: .4, 
          stagger: .03,
          delay: .3,
          ease: "Power3.easeInOut",
        });
      }

      triggerElement.hover(function(index) {
        tl.restart();
      }, function() {
      });

    });
  }

}


/**
* Dark/Light check data-background-color
*/
// https://codepen.io/akapowl/pen/vYyaYrN/9c4d4d9fbb9a34547789139a21216509

function initDataBackground() {

  const sectionsDark = gsap.utils.toArray('.theme-dark');
  sectionsDark.forEach(sectionDark => {
    
    ScrollTrigger.create({
      trigger: sectionDark,
      start: '0% 9%',
      end: '100% 9%',
      onEnter: () => functionAddDark(),
      onEnterBack: () => functionAddDark(),
      markers: false,
    });
    function functionAddDark() {
      if ($("main, .nav-main").hasClass('theme-nav-dark')) {
      } else {
        $("main, .nav-main").removeClass('theme-nav-light');
        $("main, .nav-main").addClass('theme-nav-dark');
      }
    };
  });

  const sectionsLight = gsap.utils.toArray('.theme-light');
  sectionsLight.forEach(sectionLight => {
    
    ScrollTrigger.create({
      trigger: sectionLight,
      start: '0% 9%',
      end: '100% 9%',
      onEnter: () => functionAddLight(),
      onEnterBack: () => functionAddLight(),
      markers: false,
    });
    function functionAddLight() {
      if ($("main, .nav-main").hasClass('theme-nav-light')) {
      } else {
      $("main, .nav-main").removeClass('theme-nav-dark');
      $("main, .nav-main").addClass('theme-nav-light');
      }
    };
  });

}

/**
* Scrolltrigger Scroll Letters
*/
function initScrollLetters() {
  // Scrolling Letters Both Direction
  // https://codepen.io/GreenSock/pen/rNjvgjo
  // Fixed example with resizing
  // https://codepen.io/GreenSock/pen/QWqoKBv?editors=0010

  let direction = 1; // 1 = forward, -1 = backward scroll

  const roll1 = roll(".loop-trigger .loop-target", {duration: 24}),
        roll2 = roll(".loop-trigger-flip .loop-target", {duration: 24}, true),
        scroll = ScrollTrigger.create({
    trigger: document.querySelector('[data-scroll-container]'),
    onUpdate(self) {
      if (self.direction !== direction) {
        direction *= -1;
        gsap.to([roll1, roll2], {timeScale: direction, overwrite: true});
      }
    }
  });

  // helper function that clones the targets, places them next to the original, then animates the xPercent in a loop to make it appear to roll across the screen in a seamless loop.
  function roll(targets, vars, reverse) {
    vars = vars || {};
    vars.ease || (vars.ease = "none");
    const tl = gsap.timeline({
            repeat: -1,
            onReverseComplete() { 
              this.totalTime(this.rawTime() + this.duration() * 10); // otherwise when the playhead gets back to the beginning, it'd stop. So push the playhead forward 10 iterations (it could be any number)
            }
          }), 
          elements = gsap.utils.toArray(targets),
          clones = elements.map(el => {
            let clone = el.cloneNode(true);
            el.parentNode.appendChild(clone);
            return clone;
          }),
          positionClones = () => elements.forEach((el, i) => gsap.set(clones[i], {position: "absolute", overwrite: false, top: el.offsetTop, left: el.offsetLeft + (reverse ? -el.offsetWidth : el.offsetWidth)}));
    positionClones();
    elements.forEach((el, i) => tl.to([el, clones[i]], {xPercent: reverse ? 100 : -100, ...vars}, 0));
    window.addEventListener("resize", () => {
      let time = tl.totalTime(); // record the current time
      tl.totalTime(0); // rewind and clear out the timeline
      positionClones(); // reposition
      tl.totalTime(time); // jump back to the proper time
    });
    return tl;
  }

}

/**
* Vimeo Background Embed
*/
function initVimeoBackground() {

   // Found on Codepen:
   // https://codepen.io/ciorici/pen/VVMOxv
   
   $('[data-vimeo-background-target]').each(function(index){
 
      var playerID = $(this);

      var videoIndexID = 'vimeo-background-index-' + index;
      $(this).attr('id', videoIndexID);

      var iframe = $(this).attr('id');
      var player = new Vimeo.Player(iframe);

      // Loaded
      player.on('play', function() {
         playerID.attr('data-vimeo-status-loaded', 'true');
         playerID.attr('data-vimeo-status-activated', 'true');
      });
      
   });
}

/**
* Vimeo Pop-up
*/
function initVimeoPopup() {

  if(document.querySelector(".lightbox-showreel")) {
    var cursorFill = $(".custom-cursor-fill");
    var cursorSpan = $(".custom-cursor-span");

    var iframe = document.querySelector('.lightbox-showreel');
    var player = new Vimeo.Player(iframe);
    player.setColor('#FF0033');

    player.on('play', function() {
      $(".lightbox-placeholder").addClass('loaded');
    });

    // Open
    $('.open-showreel-lightbox').click(function(){
      $(".nav-main-top, .nav-desktop").addClass('hidden-nav');
      $('.lightbox-showreel').addClass('active');
      player.play();
      player.setVolume(1);
      scroll.stop();
      setTimeout(function(){
        cursorFill.add(cursorSpan).addClass('cursor-close');
      },800);
    });
    function closeVimeo() {
      $(".nav-main-top, .nav-desktop").removeClass('hidden-nav');
      $('.lightbox-showreel').addClass('remove');
      cursorFill.add(cursorSpan).removeClass('cursor-close');
      player.setVolume(0);
      scroll.start();
      setTimeout(function(){
        $('.lightbox-showreel').removeClass('remove');
        $('.lightbox-showreel').removeClass('active');
        player.unload();
      },1200);
    }
    // Close
    $('.close-showreel-lightbox').click(function(){
      closeVimeo();
    });
    // Ended
    var onPlay = function(data) {
      closeVimeo();
    };
    player.on('ended', onPlay);
  }
}

/**
* Vimeo Video Play/Pauze
*/
function initVimeoPlayPauze() {

  // Full controls
  // https://codepen.io/simpson77/pen/YXowmy
  
  $('.single-vimeo-target').each(function(index){

    var playerID = $(this);

    var videoIndexID = 'vimeo-control-' + index;
    $(this).attr('id', videoIndexID);

    var iframe = $(this).attr('id')
    var player = new Vimeo.Player(iframe);

    player.setColor('#FF0033');
    player.setVolume(1);

    // Loaded
    player.on('play', function() {
      playerID.addClass('vimeo-status-loaded');
    });

    // Play
    playerID.find(".vimeo-control-play").click(function(){
      playerID.addClass('vimeo-status-active');
      playerID.addClass('vimeo-status-play');
      player.play();
    });

    // Pause
    playerID.find(".vimeo-control-pause").click(function(){
      playerID.removeClass('vimeo-status-play');
      player.pause();
    });

    // Mute
    playerID.find(".vimeo-control-mute").click(function(){
      if (playerID.hasClass('vimeo-status-muted')) {
        player.setVolume(1);
        playerID.removeClass('vimeo-status-muted');
      } else {
        player.setVolume(0);
        playerID.addClass('vimeo-status-muted');
      }
    });

    // Convert number into seconds & hrs
    // https://stackoverflow.com/questions/11792726/turn-seconds-into-hms-format-using-jquery
    function secondsTimeSpanToHMS(s) {
      var h = Math.floor(s / 3600); //Get whole hours
      s -= h * 3600;
      var m = Math.floor(s / 60); //Get remaining minutes
      s -= m * 60;
      return (m) + ":" + (s < 10 ? '0' + s : s); //zero padding on minutes and seconds
    }

    // Progress Time
    var vimeoStatus = $('.time');
    player.on('timeupdate', function(data) {
      vimeoStatus.text(secondsTimeSpanToHMS(Math.trunc(data.seconds)));
    });

    // Duration

    var vimeoDuration = $('.duration');
    player.getDuration().then(function(duration) {
      vimeoDuration.text(secondsTimeSpanToHMS(duration));
    }).catch(function(error) {
        // an error occurred
    });

    // Ended
    var onEnd = function() {
      playerID.removeClass('vimeo-status-active');
      playerID.removeClass('vimeo-status-play');
      player.unload();
    };
    player.on('ended', onEnd);
      
  });
}

/**
* Flickity Slider
*/
function initFlickitySlider() {

  // Source
  // https://flickity.metafizzy.co/
  
  $('.flickity-carousel-cases').each(function(index){

    $('.flickity-carousel-cases').flickity({
      // options
      watchCSS: true,
      contain: true,
      wrapAround: false,
      dragThreshold: 10,
      prevNextButtons: false,
      pageDots: false,
      cellAlign: 'left',
      selectedAttraction: 0.015,
			friction: 0.15,
    });
      
  });

  $('.block-slider').each(function(){

    var newSlider = $(this);
    var carousel = newSlider.find('.flickity-carousel-slider').flickity({
      // options
      watchCSS: true,
      wrapAround: true,
      dragThreshold: 10,
      prevNextButtons: false,
      pageDots: false,
      cellAlign: 'left',
      selectedAttraction: 0.015,
			friction: 0.15,
    });
    
    // Custom Previous Btn
    newSlider.find('.flickity-btn-prev').click(function(){
      carousel.flickity('previous');
    });

    // Custom Next Btn
    newSlider.find('.flickity-btn-next').click(function(){
      carousel.flickity('next');
    });

      
  });


}

/**
* Trickswords Split
*/
function initTricksWords() {
    
  // Copyright start
  // Â© Code by T.RICKS, https://www.tricksdesign.com/
  // You have the license to use this code in your projects but not redistribute it to others
  // Tutorial: https://www.youtube.com/watch?v=xiAqTu4l3-g&ab_channel=TimothyRicks

  // Find all text with .tricks class and break each letter into a span
  var spanWord = document.getElementsByClassName("span-lines");
  for (var i = 0; i < spanWord.length; i++) {

  var wordWrap = spanWord.item(i);
  wordWrap.innerHTML = wordWrap.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="span-line"><span class="span-line-inner">$2</span></span>');

  }

}


/**
* Scrolltrigger Scroll Check
*/
function initScrolltriggerCheckScroll() {
    
  ScrollTrigger.create({
    start: 'top -30%',
    onUpdate: self => {
      $("main").addClass('scrolled');
    },
    onLeaveBack: () => {
      $("main").removeClass('scrolled');
    },
  });

}

/**
* Scrolltrigger Animations Desktop + Mobile
*/
function initScrolltriggerAnimations() {
    
  if(document.querySelector(".single-usp")) {
    // Scrolltrigger Animation : Count Up
    $(".single-usp").each(function (index) {
      let triggerElement = $(this);
      let targetElement = $(this).find(".count-up");
    
    let tl = gsap.timeline({
		scrollTrigger: {
			trigger: triggerElement,
			start: "0% 75%",
			end: "100% 0%"
        	}
      	});
      	tl.from(targetElement, {
			duration: 1.5,
			ease: Expo.easeOut,
			innerText: 0,
			roundProps: "innerText",
			onUpdate: function() {
				this.targets().forEach(target => {
					const val = gsap.getProperty(target, "innerText");
					target.innerText = numberWithCommas(val);
				});
			},
		}, "<");
		function numberWithCommas(n) {
			var parts=n.toString().split(".");
			return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
		}
		// tl.from(triggerElement, {
		// 	duration: 1.5,
		// 	opacity: 0,
		// 	yPercent: 30,
		// 	ease: Expo.easeOut
		// },"0");
    });
  }

}