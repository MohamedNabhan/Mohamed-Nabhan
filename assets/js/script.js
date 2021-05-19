/*global $, document,window*/
$(document).ready(function () {
	"use strict";
/* Start Change Navbar when Scrolling */
	
	var navbar = $('nav'),
        scrollButton =  $("#scroll-top");
	$(window).on('scroll', function () {
        if ($(window).scrollTop() <= navbar.height()) {
			navbar.removeClass('navbar-scroll');
          
		} else {
			navbar.addClass('navbar-scroll');
            
		}
	});
	if ($(window).scrollTop() >= navbar.height()) {
        navbar.addClass('navbar-scroll');
    }
    
    
    // Add scrollspy to <body>
    $('body').scrollspy({target: ".navbar", offset: 50});
  // Add smooth scrolling on all links inside the navbar
    //$("nav a, .scroll-btn a, header a").on('click', function (event) {
    $("nav a, .scroll-btn a, header a").on('click', function () {
    // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
      // Prevent default anchor click behavior
          //  event.preventDefault();

      // Store hash
            var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: ($(hash).offset().top)
            }, 1000, function () {
        // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }  // End if
    });
	
   // Scroll Top
	$(window).on("scroll", function () {
		if ($(this).scrollTop() >= 700) {
			scrollButton.show(500);
		} else {
			scrollButton.hide(500);
		}
	});
	scrollButton.on("click", function () {
		$("html, body").animate({scrollTop: 0}, 800);
	});
    
    
    
    

    $('.owl-carousel').owlCarousel({
        items: 3,
        autoplay: 2500,
        autoplayHoverPause: true,
        loop: true,
        margin: 30,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    
     //Project Filter
    $("#our-work-gallary").cubeportfolio({
        layoutMode: 'grid',
        filters: '#project-filter',
        defaultFilter: '*',
        animationType: "quicksand",
        gapHorizontal: 30,
        gapVertical: 30,
        gridAdjustment: "responsive",
        mediaQueries: [{
            width: 1500,
            cols: 4
        }, {
            width: 1100,
            cols: 4
        }, {
            width: 800,
            cols: 3
        }, {
            width: 480,
            cols: 2
        }, {
            width: 320,
            cols: 1
        }]
    });

    
	
	$("html").niceScroll({
        cursorcolor : '#4caf50',
        cursorwidth : '9px',
        cursorborder : 'none',
        cursorborderradius : '0',
		zindex: '2999'
    });
	
     /*----- Parallax Backgrounds
    if (windowsize > 992) {
      $(".parallaxie").parallaxie({
         speed: 0.4,
         offset: 0,
      });
   }
-----*/
   /*----- FancyBox -----*/
    $('[data-fancybox]').fancybox({
        protect: true,
        animationEffect: "fade",
        hash: null
    });

  
});

    // ************ Back to Top
var amountScrolled = 100;
var backBtn = $("a.scrollToTop");
$(window).on("scroll", function () {
    "use strict";
    if ($(window).scrollTop() > amountScrolled) {
        backBtn.fadeIn("slow");
        $(".navbar-toggler").addClass("collapsed", 1000, "easeOutSine" );
        $(".navbar-collapse").removeClass("show", 1000, "easeOutSine" );
    } else {
        backBtn.fadeOut("slow");

        $(".navbar-fixed-top").removeClass("top-nav-collapse", 1000, "easeOutSine" );
        $(".navbar-toggler").removeClass("collapsed", 1000, "easeOutSine" );
    }
});
backBtn.on("click", function () {
    "use strict";
    $("html, body").animate({
        scrollTop: 0
    }, 700);
    return false;
});
