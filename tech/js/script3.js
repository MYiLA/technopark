$(function() {
	// app = 0;
	owlParams = {
		items:4,
		// loop:true,
		dots:false,
		nav:true,
		navText:["",""],
		lazyLoad:true,
		responsive : {
			0: {
			items:1
			},
			480: {
			items:2
			},
			767: {
			items:3
			},
			991: {
			items:4
			}
		}
	}
	$('.anch').click(function() {
		var dest = $('.product-section').offset().top;
		$('html').animate({scrollTop: dest},500);
		return false;
	});
	

	$(window).resize(function() {
		if ($(window).width() <= 767) {
			if(!($('.gallery-list').hasClass('owl-loaded'))) {
				$('.gallery-list').owlCarousel({
					items:2,
					dots: true,
					loop:true,
					nav:true,
					navText:["",""]
				});
			}
		} else {
			$('.gallery-list').trigger('destroy.owl.carousel');
		}
	});
  $(".product-lists").owlCarousel(owlParams);
	$('.slider').owlCarousel({
		items:1,
		dots: false,
		loop:true,
		nav:true,
		navText:["",""]
	});
	if($(window).width() <=767) {
		$('.gallery-list').owlCarousel({
			items:2,
			dots: true,
			loop:true,
			nav:true,
			navText:["",""]
		});
	}
	$('.slider .owl-item').click(function() {
		$(this).closest('.slider ').trigger('next.owl.carousel');
	});
	// $('.slider:first-child').removeClass('active');
	// $('.slider:last-child').removeClass('active');
	$('.color-item').click(function() {
		$('.color-item').removeClass('active');
		$(this).addClass('active');
		var index = $(this).index()+1;
		$('.slider').removeClass('active');
		$('.slider:nth-child('+index+')').addClass('active');
		$('#buy-bottom').attr('href', $(this).data('shop'));
		$('.banner-button').attr('href', $(this).data('shop'));
	});
	
	$('.tab-model-button').click(function() {
       $('.popup-close, .overlay, .popup-tech').fadeIn(400);
       $('body').addClass('fixed');
       return false;
    });
	$('.gallery-item .gallery-item-inner').click(function(){
	   var video = $(this).data('src');
	   var start = $(this).data('time');
	   if (start>0) {
	   	$('.video-popup .video-wrapper').html('<iframe src="https://www.youtube.com/embed/'+video+'?start='+start+'&wmode=opaque&enablejsapi=1&playlist=0&autohide=1&loop=0&showinfo=0&theme=dark&html5=1&rel=0&vq=hd1080&autoplay=1" frameborder="0"></iframe>');
	   } else {
	   	$('.video-popup .video-wrapper').html('<iframe src="https://www.youtube.com/embed/'+video+'?wmode=opaque&enablejsapi=1&playlist=0&autohide=1&loop=0&showinfo=0&theme=dark&html5=1&rel=0&vq=hd1080&autoplay=1" frameborder="0"></iframe>');
	   	
	   }
	   $('.popup-close, .overlay, .video-popup').fadeIn(400);
	   $('body').addClass('fixed');
		return false;
	});
	$('.popup-close, .overlay').click(function() {
	   $('.popup-close, .overlay, .popup, .video-popup, .gallery-popup, .popup-tech').fadeOut(400);
	   $('.video-popup .video-wrapper').html('');
	   $('body').removeClass('fixed');
	   return false;
	});
	$('.feature-ico').click(function(){
		if(!($(this).closest('.feature').hasClass('active'))) {
			$('.feature-text').fadeOut(300);
			$('.feature').removeClass('active');
			$(this).siblings('.feature-text').fadeIn(300);
			$(this).closest('.feature').addClass('active');
		} else {
			$(this).siblings('.feature-text').fadeOut(300);
			$(this).closest('.feature').removeClass('active');
		}
		return false;
	});
	var topStart = parseInt($('.banner-main .parallax').css('top'));
	$(window).scroll(function(){
		animateAppearence();
		animateFeatures();
		fixBuyButton();
		parallaxFeatures();
		parallaxHeroBanner(topStart);
	});
	$('video').on('mouseenter',function() {
		$(this).get(0).play();
	})
	$('video').on('click',function() {
		$(this).get(0).play();
	})
});
function animateFeatures() {
	var timer = 300;
	var video = 1000;
	$('.feature-item').each(function(){
		var elem = $(this);
		if (!(elem.hasClass('f-animated')) && (elem.offset().top-$(window).height()*0.7) < $(window).scrollTop()) {
			elem.addClass('f-animated');
			elem.find('.feature-img-col').addClass('animated');
			if(elem.find('video').length) {
				elem.find('video').get(0).play();
			}
				elem.find('.point-img').addClass('animated');
			setTimeout(function(){
				elem.find('.point-text').addClass('animated');
			},timer*2);
			setTimeout(function(){
				elem.find('.feature-content-col').addClass('animated');
			},timer);
			setTimeout(function(){
				elem.find('.prod').addClass('animated');
			},timer*1.2);
			setTimeout(function(){
				elem.find('.prod-1').addClass('animated');
			},timer);
			setTimeout(function(){
				elem.find('.feature-content').addClass('animated');
			},timer);
		}
	});
}
function parallaxFeatures() {
	$('.feature-item').each(function(index){
		var elem = $(this);
		if ( ((elem.offset().top-$(window).height()*0.7) < $(window).scrollTop() ) && ((elem.offset().top+elem.height()-$(window).height()*0.7) > $(window).scrollTop())) {
			var top = ($(window).scrollTop()+$(window).height()*0.7 - elem.offset().top)*0.1;
			if(top>=0 && $(window).width()>767) {
				elem.find('.feature-content-col').css({top: top});
			} else {
				elem.find('.feature-content-col').css({top: 0});
			}
		}
	});
}
function fixBuyButton() {
	if($('.section-filters-bar-outer').length) {
		if((($(window).scrollTop()+20) > $('.features-block').offset().top) && (($(window).scrollTop()+20) < ($('.section-filters-bar-outer').offset().top - $('.section-filters-bar-outer').height()))){
			$('.banner-button-outer').fadeIn(300);
		} else {
			$('.banner-button-outer').fadeOut(300);
		}
	} else {
		if((($(window).scrollTop()+20) > $('.features-block').offset().top) && (($(window).scrollTop()+20) < $('.product-section').offset().top)){
			$('.banner-button-outer').fadeIn(300);
		} else {
			$('.banner-button-outer').fadeOut(300);
		}
	}
}
function animateAppearence() {
    $('.u-animate').each(function(){
        var elem = $(this);
        if ((elem.offset().top-$(window).height()*0.7) < $(window).scrollTop()) {
            elem.addClass('u-animated');

        }
    });
}

function parallaxHeroBanner() {
	 $('.parallax').each(function(){
        var elem = $(this);
        if($(window).scrollTop() < ($('.banner-main').offset().top + $('.banner-main').height()) && ($(window).scrollTop() > ($('.banner-main').offset().top )) ) {
            elem.addClass('top-a');
            } else {
              elem.removeClass('top-a');
        }
    });
}

function calcVisibleFiltreItems(){
	qn = $(".mix").filter(function() { 
	return $(this).css("display") != "none"}).length;
	return qn;
};