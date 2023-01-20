/*
 * Copyright (c) 2019 Marketify
 * Author: Marketify
 * This file is made for CURRENT TEMPLATE
*/


jQuery(document).ready(function(){

	"use strict";
	
	// here all ready functions
	
	ajaxCustom();
	lexal_tm_menu();
	lexal_tm_about_hero();
	lexal_tm_imgtosvg();
	lexal_tm_hero_overlay();
	lexal_tm_jarallax();
	lexal_tm_data_images();
	lexal_tm_isotope();
	lexal_tm_contact_form();
	lexal_tm_anchor();
	lexal_tm_magnific_popup();
	lexal_tm_waypoints();
	lexal_tm_waypoints2();
	lexal_tm_kenburn_slider();
	lexal_tm_ripple();
	lexal_tm_animate_text();
	
	jQuery(window).on('resize',function(){
		lexal_tm_about_hero();
		lexal_tm_isotope();
		
	});
	
	jQuery(window).load('body', function(){
		
		setTimeout(function(){lexal_tm_preloader();},1000);
		setTimeout(function(){lexal_tm_load();},4500);
		
	});
	
});

	
// -----------------------------------------------------
// --------------    AJAX CUSTOM    --------------------
// -----------------------------------------------------

function ajaxCustom(){
	
	"use strict";
	
	jQuery('.lexal_tm_load_more a').on('click', function(){
		
		var element 	= jQuery(this);
		var shape		= jQuery('.lexal_tm_load_more .svg');
		var span		= element.find('span');
		
		if(!element.hasClass('opened')){
			element.addClass('opened');
			shape.addClass('animate');
			span.addClass('change');
			jQuery.ajax({
				type: 'POST',
				url: 'js/portfolio.json',
				dataType: 'json',
				success: function(data) {
										
					setTimeout(function(){
						
						for(var i = 0; i<data.portfolio.length; i++){
					
						var list = '<li><div class="list_inner"><div class="image_wrap"><img src="img/portfolio/600x600.jpg" alt="" /><div class="main_image" style="background-image: url('+data.portfolio[i].imgUrl+')"></div></div><div class="overlay"></div><div class="overlay_text"><h3>'+data.portfolio[i].title+'</h3><span>'+data.portfolio[i].subTitle+'</span></div><a class="full_link" href="'+data.portfolio[i].pageURL+'"></a></div></li>';
													
						jQuery('.lexal_tm_portfolio_list').append(list);
						shape.removeClass('animate');
					    span.removeClass('change');
					}
					
					},1500);

				},
				error: function(a,b,c){
					
				}

			});
		}
		else{
			alert('No more images !!!');
		}
		
		return false;
	});
}
	
// -----------------------------------------------------
// -----------------    NENU    ------------------------
// -----------------------------------------------------	
	
function lexal_tm_menu(){
	
	"use strict";
	
	var t1			= new TimelineMax({paused:true});
	
	t1.to(".lexal_tm_border.top .trigger .one", 0.5,{
		y:6,
		rotation:45,
		ease:Expo.easeinOut
	});
	t1.to(".lexal_tm_border.top .trigger .two", 0.5,{
		y:- 6,
		rotation:-45,
		ease:Expo.easeinOut,
		delay:-0.5
	});	
	t1.to(".lexal_tm_menu",0.5,{
		right:"-40px",
		ease:Expo.easeinOut,
		delay:-0.5
	});
	t1.staggerFrom(".lexal_tm_menu .nav_list ul li", 0.4, {x:25, opacity:0, ease:Expo.easeinOut},0.1);
	t1.reverse();
	
	jQuery('.lexal_tm_border.top .trigger').on('click',function(){
		t1.reversed(!t1.reversed());
		return false;
	});
	
	jQuery('.lexal_tm_menu .nav_list ul li a').on('click',function(){
		t1.reversed(!t1.reversed());
		return false;
	});	
}

// -----------------------------------------------------
// -----------------    ABOUT HERO    ------------------
// -----------------------------------------------------

function lexal_tm_about_hero(){
	
	"use strict";
	
	var wh		= jQuery(window).height();
	var box		= jQuery('.lexal_tm_samebox_wrap .leftbox');
	
	box.css({height:wh-90});
}

// -----------------------------------------------------
// ---------------    HERO OVERLAY    ------------------
// -----------------------------------------------------

function lexal_tm_hero_overlay(){
	
	"use strict";
	
	jQuery(window).on('scroll',function(){
		var currentScroll		= window.pageYOffset;
		var scrollOpacity       = 1 - (currentScroll / 550);
		jQuery(".lexal_tm_home_hero").css({opacity: scrollOpacity });
	});
	
}
	
// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function lexal_tm_imgtosvg(){
	
	"use strict";
	
	jQuery('img.svg').each(function(){
		
		var jQueryimg 		= jQuery(this);
		var imgClass		= jQueryimg.attr('class');
		var imgURL			= jQueryimg.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}	

// -----------------------------------------------------
// --------------------    JARALLAX    -----------------
// -----------------------------------------------------

function lexal_tm_jarallax(){
	
	"use strict";
	
	jQuery('.jarallax').each(function(){
		var element			= jQuery(this);
		var	customSpeed		= element.data('speed');
		
		if(customSpeed !== "undefined" && customSpeed !== ""){
			customSpeed = customSpeed;
		}else{
			customSpeed 	= 0.5;
		}
		
		element.jarallax({
			speed: customSpeed,
			automaticResize: true
		});
	});
}

// -----------------------------------------------------
// ---------------   DATA IMAGES    --------------------
// -----------------------------------------------------

function lexal_tm_data_images(){
	
	"use strict";
	
	var data			= jQuery('*[data-img-url]');
	
	data.each(function(){
		var element		= jQuery(this);
		var url			= element.data('img-url');
		element.css({backgroundImage: 'url('+url+')'});
	});
}

// -----------------------------------------------------
// --------------    ISOTOPE MASONRY    ----------------
// -----------------------------------------------------

function lexal_tm_isotope(){
	
	"use strict";
	
	jQuery('.masonry').isotope({
		itemSelector: '.masonry_item',
		masonry: {
			
		}
	});
}

// -----------------------------------------------------
// ----------------    CONTACT FORM    -----------------
// -----------------------------------------------------

function lexal_tm_contact_form(){
	
	"use strict";
	
	jQuery(".contact_form #send_message").on('click', function(){
		
		var name 		= jQuery(".contact_form #name").val();
		var email 		= jQuery(".contact_form #email").val();
		var message 	= jQuery(".contact_form #message").val();
		var subject 	= jQuery(".contact_form #subject").val();
		var success     = jQuery(".contact_form .returnmessage").data('success');
	
		jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
		//checking for blank fields	
		if(name===''||email===''||message===''){
			
			jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
		}
		else{
			// Returns successful data submission message when the entered information is stored in database.
			jQuery.post("modal/contact.php",{ ajax_name: name, ajax_email: email, ajax_message:message, ajax_subject: subject}, function(data) {
				
				jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph
				
				
				if(jQuery(".contact_form .returnmessage span.contact_error").length){
					jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);		
				}else{
					jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
					jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
				}
				
				if(data===""){
					jQuery("#contact_form")[0].reset();//To reset form fields on success
				}
				
			});
		}
		return false; 
	});
}
	
// -----------------------------------------------------
// ------------    ANCHOR NAVIGATION    ----------------
// -----------------------------------------------------

function lexal_tm_anchor(){
	
	"use strict";
	
	jQuery('.anchor_nav').onePageNav();
	
	var scrollOffset = 0;
	
	jQuery(".anchor a").on('click', function(evn){
		evn.preventDefault();
		jQuery('html,body').scrollTo(this.hash, this.hash, {
			gap: { y: -scrollOffset-85 },
			animation:{
				duration: 1500,
				easing: "easeInOutExpo"
			}
		});
		return false;	
	});
}

// -----------------------------------------------------
// --------------    MAGNIFIC POPUP    -----------------
// -----------------------------------------------------

function lexal_tm_magnific_popup(){
	
	"use strict";
	
	jQuery('.open-popup-link').magnificPopup({
		type:'inline',
		midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	});
	
	jQuery('.gallery').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			}
		});
	});
	jQuery('.gallery_zoom').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a.zoom', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});
		
	});
	jQuery('.popup-youtube').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			//type: 'iframe',
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
	});
}

function lexal_tm_preloader(){
	
	"use strict";
	
	var mainPreloader	 = $(".lexal_tm_loader-wrapper .loader");
	var WinWidth 		 = $(window).width();
    var WinHeight		 = $(window).height();
    var zero = 0;

    mainPreloader.css({
        top: WinHeight / 2 - 2.5,
        left: WinWidth / 2 - 200
    });

    do {
        mainPreloader.animate({
            width: zero
        }, 10);
        zero += 3;
    } while (zero <= 400);
    if (zero === 402) {
        mainPreloader.animate({
            left: 0,
            width: '100%'
        });
        mainPreloader.animate({
            top: '0',
            height: '100vh'
        });
    }

    setTimeout(function() {
        $(".lexal_tm_loader-wrapper").fadeOut('fast');
        (mainPreloader).fadeOut('fast');
    }, 550);
}

// -----------------------------------------------------
// ---------------   WAYPOINTS    ----------------------
// -----------------------------------------------------

function lexal_tm_waypoints(){
	
	"use strict";
//	
	var div		= jQuery('.lexal_tm_waypoint_effect');
	
	div.each(function(){
		
		var element	= jQuery(this);
		
		element.waypoint({
			handler:function(){
				element.addClass('load');
			},
			offset:"74%"
		});
		
	});
	
}

function lexal_tm_waypoints2(){
	
	"use strict";
//	
	var div		= jQuery('.lexal_tm_waypoint_effect2');
	
	div.each(function(){
		
		var element	= jQuery(this);
		
		element.waypoint({
			handler:function(){
				element.addClass('load');
			},
			offset:"50%"
		});
		
	});
	
}

function lexal_tm_load(){
	
	"use strict";
	
	jQuery('.lexal_tm_home_hero .overlay_texts .name').addClass('animate');
	jQuery('.lexal_tm_home_hero .overlay_texts .subtitle').addClass('animate');
	jQuery('.lexal_tm_home_hero .lexal_tm_down').addClass('animate');
	jQuery('.lexal_tm_home_hero .image').addClass('animate');
}

// -------------------------------------------------
// -------------  SLIDER KENBURN  ------------------
// -------------------------------------------------

function lexal_tm_kenburn_slider(){
	
	"use strict";
	
		jQuery(function() {
			jQuery('.lexal_tm_home_hero .overlay_slider').vegas({
			timer:false,	
			animation: [ 'kenburnsUp',  'kenburnsLeft', 'kenburnsRight'],
			delay:7000,

			slides: [
				{ src: 'img/slider/1.jpg' },
				{ src: 'img/slider/2.jpg' },
				{ src: 'img/slider/3.jpg' },
			]

		});
	});
}

// -------------------------------------------------
// -------------  RIPPLE  --------------------------
// -------------------------------------------------

function lexal_tm_ripple(){
	
	"use strict";
	
	jQuery('#ripple').ripples({
			resolution: 500,
			dropRadius: 20,
			perturbance: 0.04
		});
}

$(".youtube-bg").mb_YTPlayer();

// -------------------------------------------------
// -------------   ANIMATE TEXT  -------------------
// -------------------------------------------------

function lexal_tm_animate_text(){
	
	"use strict";
	
	var animateSpan			= jQuery('.lexal_tm_animation_text_word');
	
		animateSpan.typed({
			strings: ["3D/VFX Artist", "Photographer", "Designer", "Video/Photo Editor"],
			loop: true,
			startDelay: 3500,
			backDelay: 2e3
		});
}

// -------------------------------------------------
// -------------   MINE CUSTOM   -------------------
// -------------------------------------------------
function hide(obj) {

    var el = document.getElementById(obj);

        el.style.display = 'none';

}

setTimeout(() => {
	const box = document.getElementById('hide_on_click');
  
	// 👇️ removes element from DOM
	box.style.display = 'none';
  
	// 👇️ hides element (still takes up space on page)
	// box.style.visibility = 'hidden';
  }, 3000); // 👈️ time in milliseconds

  
  let changeElement = document.getElementById("change");
  let currentStyle = 0;
  
  function changeStyle() {
	  if (currentStyle === 0) {
		  changeElement.style.cssText = "opacity: 1;";
		  currentStyle = 1;
	  } else {
		  changeElement.style.cssText = "opacity: 0;";
		  currentStyle = 0;
	  }
  }
  
  function stop2() {
	clearInterval(int2);
  }
	var int2 = setInterval(changeStyle, 1800);
	setTimeout(function() { stop2(); }, 8000);
  

  let changeElement2 = document.getElementById("change_txt");
  let currentStyle2 = 0;
  
  function changeStyle2() {
	  if (currentStyle2 === 0) {
		  changeElement2.style.cssText = "opacity: 1;";
		  currentStyle2 = 1;
	  } else {
		  changeElement2.style.cssText = "opacity: 0;";
		  currentStyle2 = 0;
	  }
  }
  
//   setInterval(changeStyle2, 1800);
function stop() {
  clearInterval(int);
}
  var int = setInterval(changeStyle2, 1800);
  setTimeout(function() { stop(); }, 8000);
