$(function() {

	/*========================
        SERVICES
 	=========================*/
	//Animate on scroll
	new WOW().init();

	/*========================
        WORK
 	=========================*/
	// Magnify Popup
	$('#work').magnificPopup({

		delegate: 'a', // child items selector, by clicking on it popup will open
  		type: 'image',
  		gallery: {
    			enabled:true
  			}

	});

	/*========================
        TEAM
 	=========================*/
 	// Carousel
 	$("#team-members").owlCarousel({ 
 		loop: true,
 		autoplay: true,
 		items: 3,
 		smartSpeed: 700,
 		autoplayHoverPause: true,
 		margin: 30,
 		responsive : {
	    	// breakpoint from 0 up
	   	0 : {
	   		items: 1,
	    	},
	    	// breakpoint from 480 up
	    	480 : {
	    		items: 2,
	    	},
	    	// breakpoint from 768 up
	    	768 : {
	    		items: 3,
	    	}
		}
 	});

 	/*========================
        TESTIMONIALS
 	=========================*/
 	// Carousel
 	$("#customers-testimonials").owlCarousel({ 
 		loop: true,
 		autoplay: true,
 		items: 1,
 		smartSpeed: 700,
 		autoplayHoverPause: true,
 		margin: 30,
 	});

 	/*========================
        STATS
 	=========================*/
 	// Counter
 	$('.counter').counterUp({
 		delay: 10,
 		time: 1000,
 	});

 	/*========================
        CLIENTS
 	=========================*/
 	// Carousel
 	$("#clients-list").owlCarousel({ 
 		loop: true,
 		autoplay: true,
 		items: 4,
 		smartSpeed: 700,
 		autoplayHoverPause: true,
 		margin: 30,
 		responsive : {
	    	// breakpoint from 0 up
	   	0 : {
	   		items: 1,
	    	},
	    	// breakpoint from 480 up
	    	480 : {
	    		items: 3,
	    	},
	    	// breakpoint from 768 up
	    	768 : {
	    		items: 5,
	    	}
		}
 	});

 	/* ------------ Navigation ------------ */
 	// Hiding and showing black navigation
 	$(window).scroll(function() {

 		if($(this).scrollTop() < 50) {
 			// Hide Navigation Bar
 			$('nav').removeClass('vesco-top-nav');
 			// Hide back to top button
 			$('#back-to-top').fadeOut();
 		}

 		else {
 			// Show Navigation Bar
 			$('nav').addClass('vesco-top-nav');
 			// Show back to top button
 			$('#back-to-top').fadeIn();
 		}

 	});

 	// Smooth Scroll
 	$(document).on('click', 'a[href^="#"]', function (event) {

    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
     }, 1250, "easeInOutExpo");

	});

 	// Close mobile menu on click
 	$('ul.navbar-nav li a').on('click touch', function () {

 		$('.navbar-toggler').click();

 	});

});



