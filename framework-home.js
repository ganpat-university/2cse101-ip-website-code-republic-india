$(document).ready(function(){
	if ($(window).width() < 901) {
	$('#inner #navi ul').css('display','none');
	$('#inner .toggle-nav-bar').click(function(){
		if($('#inner #navi').is(':hidden')){
			$('#inner #navi').slideDown();
		}else{
			$('#inner #navi').slideUp();
		}
	})
	$('#inner #navi a .indicator').click(function(e){
		e.preventDefault();
		if($(this).parent().next().is(':hidden')){
			$(this).parent().siblings().slideUp();
			$(this).parent().next().slideDown();
		}else{
			$(this).parent().next().slideUp();
		}
	})
	}
	
	//	Smooth Scroll
	$(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html, body').animate({
			  scrollTop: target.offset().top
			}, 1000);
			return false;
		  }
		}
	  });
	});
	
	//	Inner page navigation menu
	$('.nav li li').hover(function(){
	$(this).parent('ul').css('height','')
	$(this).find('ul').css('height','auto');
	var lHeight = $(this).find('ul').length > 0 ? $(this).find('ul').height():'auto';
	
	var uHeight = $(this).parent('ul').height();
	
	if(uHeight < lHeight){
	$(this).parent('ul').css('height',lHeight)
	}else{
	$(this).find('ul').css('height',uHeight);
	}
	});
	
//	$('.nav li li').hover(function(){
//  $(this).parent('ul').css('height','')
//  var lHeight = $(this).find('ul').length > 0 ? $(this).find('ul').height():'auto';
//  
//  $(this).parent('ul').css('height',lHeight)
//	});

//	var winHeight = $(window).innerHeight();
//	var winWidth = $(window).innerWidth();
//	
//	alert (winHeight);
//	alert (winWidth);
	
	
	
	
	function setHeight() {
		windowHeight = $(window).innerHeight() - ((($(window).innerHeight()) * 10) / 100);
		$('.knowIndSldr .slides > li').css('min-height', windowHeight);
	};
	setHeight();
	
	$(window).resize(function() {
		setHeight();
	});
	
	/*function setHeightInr() {
		windowHeight = $(window).innerHeight()/2;
		$('.banner .banner-inr').css('min-height', windowHeight);
	};
	setHeightInr();
	
	$(window).resize(function() {
		setHeightInr();
	});*/
	
	
	// Set Page Zoom
	var zoom_level=100;
	// Click events
	$('#zoom_2x').one( "click", function(){zoom_page(5, $(this))});
	$('#zoom_3x').one( "click", function(){ zoom_page(5, $(this)) });
	$('#zoom_2xx').one( "click", function() { zoom_page(-5, $(this)) });
	$('#zoom_reset').one( "click", function() { zoom_page(0, $(this)) });

	// Zoom function
	function zoom_page(step, trigger)
	{
		// Zoom just to steps in or out
		if(zoom_level>=110 && step>0 || zoom_level<=80 && step<0) return;

		// Set / reset zoom
		if(step==0) zoom_level=100;
		else zoom_level=zoom_level+step;

		// Set page zoom via CSS
		$('body').css({
			transform: 'scale('+(zoom_level/100)+')', // set zoom
			transformOrigin: '50% 0', // set transform scale base
			
		});

		// Adjust page to zoom width
		if(zoom_level>100) $('body').css({ width: (zoom_level*1)+'%','overflow-x': 'hidden' });
		else $('body').css({ width: '100%' });

		// Activate / deaktivate trigger (use CSS to make them look different)
		if(zoom_level>=110 || zoom_level<=80) trigger.addClass('disabled');
		else trigger.parents('body').find('.disabled').removeClass('disabled');
		if(zoom_level!=100) $('#zoom_reset').removeClass('disabled');
		else $('#zoom_reset').addClass('disabled');
		//console.log(zoom_level)
	}
	
	//Menu Show Hide
	$('.toggle-nav-bar').off().on('click',function(){
	  if($('.menu-wrapper').is(':hidden')){
	  
		$('.menu-wrapper').fadeIn(function(){
		  $(this).animate({'width':'100%'});
		  $(this).css({'font-size':'18px'});
		  $('.toggle-nav-bar').addClass('closeToggle');
		  $('.fa-bars').hide();
		  $('.fa-times').show();
		})
	  
	  //$('.menu-wrapper').animate({'font-size':'0','width':'0%'});
	  }else{
		$('.menu-wrapper').css({'font-size':'0px'});
		$('.menu-wrapper').animate({'width':'0%'},500,function(){
		  $(this).fadeOut();
		  $('.toggle-nav-bar').removeClass('closeToggle');
		  $('.fa-bars').show();
		  $('.fa-times').hide();
		})
	  }
	});	
	  
	//Top Category Carousel
    $("#cat-tp").owlCarousel({
        navigation: true,
        pagination: false,
        lazyLoad: true,
		items: 5,
		itemsDesktop : [1199, 5],
        itemsDesktopSmall : [979, 3],
        itemsTablet : [768, 3],
		itemsTabletSmall : [650, 2],
		itemsMobile : [479, 1],
		paginationNumbers: false,
		autoHeight : false,
		addClassActive : true,
		navigationText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"
        ]
    });
	
	//My pride Top Category Carousel
    $("#pride-cat").owlCarousel({
        navigation: true,
        pagination: false,
        lazyLoad: true,
		items: 6,
		itemsDesktop : [1199, 6],
        itemsDesktopSmall : [979, 3],
        itemsTablet : [768, 3],
		itemsTabletSmall : [650, 2],
		itemsMobile : [479, 1],
		paginationNumbers: false,
		autoHeight : false,
		addClassActive : true,
		navigationText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"
        ]
    });
	
 /*function catTP() {
   var checkWidth = $(window).width();
   var catgtp = $("#cat-tp");
   if (checkWidth < 899) {
     catgtp.data('owlCarousel').destroy(); 
     catgtp.removeClass('owl-carousel');
   } else if (checkWidth > 900) {
     catgtp.owlCarousel({
		 
        navigation: true,
        pagination: false,
        lazyLoad: true,
		items: 5,
		itemsDesktop : [1199, 5],
        itemsDesktopSmall : [979, 3],
        itemsTablet : [768, 3],
		itemsTabletSmall : [650, 2],
		itemsMobile : [479, 1],
		paginationNumbers: false,
		autoHeight : false,
		addClassActive : true,
		navigationText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"
        ]
 		
     });
   }
 }

 $(document).ready(catTP);
 $(window).resize(catTP);*/


/*	//Republic Carousel
    $("#republic").owlCarousel({
        navigation: true,
        pagination: false,
        lazyLoad: true,
		items: 4,
		itemsDesktop : [1199, 3],
        itemsDesktopSmall : [979, 3],
        itemsTablet : [768, 3],
		itemsTabletSmall : [650, 3],
		itemsMobile : [480, 3],
		itemsMobileSmall : [360, 2],
		paginationNumbers: false,
		autoHeight : false,
		addClassActive : true,
		navigationText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"
        ]
    });
	
 function republc() {
   var checkWidth = $(window).width();
   var repub = $("#republic");
   if (checkWidth < 899) {
     repub.data('owlCarousel').destroy(); 
     repub.removeClass('owl-carousel');
   } else if (checkWidth > 900) {
     repub.owlCarousel({
		 
        navigation: true,
        pagination: false,
        lazyLoad: true,
		items: 4,
		itemsDesktop : [1199, 3],
        itemsDesktopSmall : [979, 3],
        itemsTablet : [768, 3],
		itemsTabletSmall : [650, 3],
		itemsMobile : [480, 3],
		itemsMobileSmall : [360, 2],
		paginationNumbers: false,
		autoHeight : false,
		addClassActive : true,
		navigationText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"
        ]
		
     });
   }
 }

 $(document).ready(republc);
 $(window).resize(republc);*/

/*	//independence Carousel
    $("#independence").owlCarousel({
        navigation: true,
        pagination: false,
        lazyLoad: true,
		items: 4,
		itemsDesktop : [1199, 3],
        itemsDesktopSmall : [979, 3],
        itemsTablet : [768, 3],
		itemsTabletSmall : [650, 3],
		itemsMobile : [480, 3],
		itemsMobileSmall : [360, 2],
		paginationNumbers: false,
		autoHeight : false,
		addClassActive : true,
		navigationText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"
        ]
    });
	
 function independnc() {
   var checkWidth = $(window).width();
   var independ = $("#independence");
   if (checkWidth < 899) {
     independ.data('owlCarousel').destroy(); 
     independ.removeClass('owl-carousel');
   } else if (checkWidth > 900) {
     independ.owlCarousel({
		 
        navigation: true,
        pagination: false,
        lazyLoad: true,
		items: 4,
		itemsDesktop : [1199, 3],
        itemsDesktopSmall : [979, 3],
        itemsTablet : [768, 3],
		itemsTabletSmall : [650, 3],
		itemsMobile : [480, 3],
		itemsMobileSmall : [360, 2],
		paginationNumbers: false,
		autoHeight : false,
		addClassActive : true,
		navigationText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"
        ]
		
     });
   }
 }

 $(document).ready(independnc);
 $(window).resize(independnc);*/


	//Bottom Category Carousel
    $("#cat-bt").owlCarousel({
        navigation: true,
        pagination: false,
        lazyLoad: true,
		items: 4,
		itemsDesktop : [1199, 4],
        itemsDesktopSmall : [979, 3],
        itemsTablet : [768, 3],
		itemsTabletSmall : [650, 2],
		itemsMobile : [480, 2],
		itemsMobileSmall : [440, 1],
		paginationNumbers: false,
		autoHeight : false,
		addClassActive : true,
		navigationText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"
        ]
    });
	
	//My pride Bottom Award Category Carousel
	$("#awrd-cat").owlCarousel({
        navigation: true,
        pagination: false,
        lazyLoad: true,
		items: 5,
		itemsDesktop : [1199, 5],
        itemsDesktopSmall : [979, 3],
        itemsTablet : [768, 3],
		itemsTabletSmall : [650, 2],
		itemsMobile : [480, 2],
		itemsMobileSmall : [440, 1],
		paginationNumbers: false,
		autoHeight : false,
		addClassActive : true,
		navigationText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"
        ]
    });
	
/* function catBT() {
   var checkWidth = $(window).width();
   var catgbt = $("#cat-bt");
   if (checkWidth < 899) {
     catgbt.data('owlCarousel').destroy(); 
     catgbt.removeClass('owl-carousel');
   } else if (checkWidth > 900) {
     catgbt.owlCarousel({
		 
        navigation: true,
        pagination: false,
        lazyLoad: true,
		items: 4,
		itemsDesktop : [1199, 4],
        itemsDesktopSmall : [979, 3],
        itemsTablet : [768, 3],
		itemsTabletSmall : [650, 2],
		itemsMobile : [480, 2],
		itemsMobileSmall : [440, 1],
		paginationNumbers: false,
		autoHeight : false,
		addClassActive : true,
		navigationText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"
        ]
		
     });
   }
 }

 $(document).ready(catBT);
 $(window).resize(catBT);*/


//Home Gallery Carousel
$("#galary-hm").owlCarousel({
	navigation: true,
	pagination: false,
	lazyLoad: true,
	items: 6,
	itemsDesktop : [1199, 4],
	itemsDesktopSmall : [979, 3],
	itemsTablet : [768, 3],
	itemsTabletSmall : [650, 3],
	itemsMobile : [480, 2],
	itemsMobileSmall : [360, 1],
	paginationNumbers: false,
	autoHeight : false,
	addClassActive : true,
	navigationText: [
	"<i class='fa fa-chevron-left'></i>",
	"<i class='fa fa-chevron-right'></i>"
	]
});
	
//$("body").append("<a target='_blank' class='ico-responsive' href='devise/responsive.html'>Check Responsive</a>");
	//contrast
	if(getCookie('contrast') == 0 || getCookie('contrast') == null){
	$(".light").hide();
	$(".dark").show();
    }else{
	$(".light").show();
	$(".dark").hide();
}
	
// Mobile Nav	
$('.sub-menu').append('<i class="fa fa-caret-right"></i>');
	$('#inner .toggle-nav-bar').click(function(){	
	$('#navi').slideToggle();
	$('#navi li').removeClass('open');
    $("#navi li").click(function(){
		$("#navi li").removeClass('open');
		$(this).addClass('open');
	}); 
		
	});
	
// Home ColorBox Gallery	
$(".galleryHM").colorbox({rel:'galleryHM', transition:"fade"});

	//Skip Content
	$('a[href^="#skipCont"]').click(function() {
		$('html,body').animate({ scrollTop: $(this.hash).offset().top}, 500);
		return false;
		e.preventDefault();
	
	});

// Photo Gallery ColorBox Effect	
$(".gal").colorbox({rel:'gal', transition:"fade"});

	//Skip Content
	$('a[href^="#skipCont"]').click(function() {
		$('html,body').animate({ scrollTop: $(this.hash).offset().top}, 500);
		return false;
		e.preventDefault();
	
});

// ===== Scroll to Top ==== 
// hide #back-top first
	$("#back-top").hide();
	
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});
	
	
	$(".page-menu h3.list").click(function () {
    //slide up all the link lists
    $(".page-menu ul ul").slideUp();
    $('.plus',this).html('<i class="fa fa-plus"></i>');
    //slide down the link list below the h3 clicked - only if its closed
    if (!$(this).next().is(":visible")) {
        $(this).next().slideDown();
        //$(this).remove("span").append('<span class="minus">-</span>');
        $('.plus').html('<i class="fa fa-plus"></i>');
        $('.plus',this).html('<i class="fa fa-minus"></i>');
    }
})
		
		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
	
	// ===== Bookmark Page Script ====
	$('#add-favorites').click(function(e) {
    var bookmarkURL = window.location.href;
    var bookmarkTitle = document.title;

    if ('addToHomescreen' in window && window.addToHomescreen.isCompatible) {
      // Mobile browsers
      addToHomescreen({ autostart: false, startDelay: 0 }).show(true);
    } else if (window.sidebar && window.sidebar.addPanel) {
      // Firefox version < 23
      window.sidebar.addPanel(bookmarkTitle, bookmarkURL, '');
    } else if ((window.sidebar && /Firefox/i.test(navigator.userAgent)) || (window.opera && window.print)) {
      // Firefox version >= 23 and Opera Hotlist
      $(this).attr({
        href: bookmarkURL,
        title: bookmarkTitle,
        rel: 'sidebar'
      }).off(e);
      return true;
    } else if (window.external && ('AddFavorite' in window.external)) {
      // IE Favorite
      window.external.AddFavorite(bookmarkURL, bookmarkTitle);
    } else {
      // Other browsers (mainly WebKit - Chrome/Safari)
      alert('Press ' + (/Mac/i.test(navigator.userAgent) ? 'Cmd' : 'Ctrl') + '+D to bookmark this page.');
    }

    return false;
  });
  
  
  // States UT Symbol Page Item Scroll Slider	
  //var windowsize = $(window).width();
//
//    if (windowsize > 770) {
//		$('.bxslider').bxSlider({
//			mode: 'vertical',
//			pager: false,
//			infiniteLoop: false,
//			slideMargin: 0
//		});
//		
//	} else {
//		$('.bxslider').bxSlider({
//			mode: 'horizontal',
//			pager: false,
//			infiniteLoop: false,
//			slideMargin: 5
//		});
//	}


  //$('.bxslider').bxSlider({
//	  mode: 'vertical',
//	  pager: false,
//	  infiniteLoop: false,
//	  slideMargin: 5
//  });
  
});

//$( window ).resize(function() {
// if ($(window).width() < 901) {
//	$('#inner #navi ul').css('display','none');
//	$('#inner .toggle-nav-bar').click(function(){
//		if($('#inner #navi').is(':hidden')){
//			$('#inner #navi').slideDown();
//		}else{
//			$('#inner #navi').slideUp();
//		}
//	})
//	$('#inner #navi a .indicator').click(function(e){
//		e.preventDefault();
//		if($(this).parent().next().is(':hidden')){
//			$(this).parent().siblings().slideUp();
//			$(this).parent().next().slideDown();
//		}else{
//			$(this).parent().next().slideUp();
//		}
//	})
//	}
//});

//var myslide = $(window).width(); 
//$(document).ready(function(){
//	if (myslide > 980) {
//		myslide= $('.bxslider').bxSlider({
//		mode: 'vertical',
//		pager: false,
//		infiniteLoop: false,
//		slideMargin: 5
//});
//} else {
//	$('.bxslider').bxSlider({
//		mode: 'horizontal',
//		pager: false,
//		infiniteLoop: false,
//		slideMargin: 5
//	});
//	}
//	
//});

//var myslide = $(window).width(); 
//$(window).resize(function(){
//		if (myslide > 980) {
//		myslide= $('.bxslider').bxSlider({
//		mode: 'vertical',
//		pager: false,
//		infiniteLoop: false,
//		slideMargin: 5
//});
//} else {
//	$('.bxslider').bxSlider({
//		mode: 'horizontal',
//		pager: false,
//		infiniteLoop: false,
//		slideMargin: 5
//	});
//	}
//
////window.location.href = window.location.href;
////console.log(myslide.getCurrentSlide());
//});

console.clear();
$(window).load(function(){
// Slider						
 $('#knowIndiaSlide').flexslider({
        animation: "slide",
		smoothHeight: false,
		controlNav: true,
		directionNav: false,
		pauseOnHover: true,
		prevText: "",
		nextText: "",
		keyboard: true,
		multipleKeyboard: true,
		mousewheel: false,
        start: function(slider){
        $('body').removeClass('loading');
        }
 });
 
// Featured Monument Carousel						
 $('#fetrd-monumnt').flexslider({
        animation: "slide",
		smoothHeight: false,
        animationLoop: false,
		pauseOnHover: true,
		slideshow: false,
		prevText: "",
		nextText: "",
		controlNav: false,
		directionNav: true,
        start: function(slider){
          $('body').removeClass('loading');
		  if (slider.pagingCount === 1) slider.addClass('flex-centered');
        }
      });
	  
// Testemonials Slider						
 $('#testemoSlider').flexslider({
        animation: "slide",
		smoothHeight: false,
        animationLoop: false,
		pauseOnHover: true,
		slideshow: false,
		prevText: "",
		nextText: "",
		controlNav: true,
		directionNav: false,
        start: function(slider){
          $('body').removeClass('loading');
		  if (slider.pagingCount === 1) slider.addClass('flex-centered');
        }
      });
	  
// States Gallery Slider						
 $('.gallerystates').flexslider({
        animation: "fade",
		smoothHeight: false,
        animationLoop: false,
		pauseOnHover: true,
		slideshow: true,
		prevText: "",
		nextText: "",
		controlNav: true,
		directionNav: false,
        start: function(slider){
          $('body').removeClass('loading');
		  if (slider.pagingCount === 1) slider.addClass('flex-centered');
        }
      });
});


//Drop down menu for Keyboard accessing
//function dropdown1(dropdownId, hoverClass, mouseOffDelay) { 
//	if(dropdown = document.getElementById(dropdownId)) {
//		var listItems = dropdown.getElementsByTagName('li');
//		for(var i = 0; i < listItems.length; i++) {
//			listItems[i].onmouseover = function() { this.className = addClass(this); }
//			listItems[i].onmouseout = function() {
//				var that = this;
//				setTimeout(function() { that.className = removeClass(that); }, mouseOffDelay);
//				this.className = that.className;
//			}
//			var anchor = listItems[i].getElementsByTagName('a');
//			anchor = anchor[0];
//			anchor.onfocus = function() { tabOn(this.parentNode); }
//			anchor.onblur = function() { tabOff(this.parentNode); }
//		}
//	}
//	
//	function tabOn(li) {
//		if(li.nodeName == 'LI') {
//			li.className = addClass(li);
//			tabOn(li.parentNode.parentNode);
//		}
//	}
//	
//	function tabOff(li) {
//		if(li.nodeName == 'LI') {
//			li.className = removeClass(li);
//			tabOff(li.parentNode.parentNode);
//		}
//	}
//	
//	function addClass(li) { return li.className + ' ' + hoverClass; }
//	function removeClass(li) { return li.className.replace(hoverClass, ""); }
//}
//
//jQuery(document).ready(function(){
//	
//	dropdown1('header-nav','hover',10);
//
//
//});

jQuery(document).ready(function(){
	$("#navmenu .topLinks ul li.font-size").hover(function () {
		$(this).toggleClass("hover");
	 });
	 
	 $(document).on("click","a[href^='#']",function(e){
	  var href=$(this).attr("href"),target=$(href).parents(".mCustomScrollbar"); 
	  if(target.length){
		e.preventDefault();
		target.mCustomScrollbar("scrollTo",href);
	  }
	});
	
	 //State Photo Gallery Vertical Tab
       // $('#StatePhotoGal').easyResponsiveTabs({
//            type: 'vertical', //Types: default, vertical, accordion
//            width: 'auto', //auto or any width like 600px
//            fit: true, // 100% fit in a container
//            closed: 'accordion', // Start closed if in accordion view
//            tabidentify: 'hor_1', // The tab groups identifier
//            activate: function(event) { // Callback function if tab is switched
//                var $tab = $(this);
//                var $info = $('#nested-tabInfo2');
//                var $name = $('span', $info);
//                $name.text($tab.text());
//                $info.show();
//            }
//        });
});

// Initialise custom inline plugins javascript for CustomScrollbar
//(function($){
//	$(window).load(function(){
//		
//		$("#mCustomScrollbar").mCustomScrollbar({
//			theme:"minimal",
//			scrollButtons:{
//				enable:true
//			}
//		});
//		
//		$("#mCustomScrollbar").mCustomScrollbar({
//			advanced:{
//			updateOnContentResize:true
//			}
//		});
//		
//		$(".mCustomScrollbar").mCustomScrollbar({
//			theme:"minimal",
//			scrollButtons:{
//				enable:true
//			}
//		});
//		
//		$(".mCustomScrollbar").mCustomScrollbar({
//			advanced:{
//			updateOnContentResize:true
//			}
//		});
//		
//	});
//})(jQuery);