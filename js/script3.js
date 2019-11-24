$(function() {
	// app = 0;
	$('#switch-slider').draggable();
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
	$('#switch-slider').draggable({
		axis: 'x',
		containment: 'parent',
		drag: function(event, ui) {
			if (ui.position.left > 204) {
				location.href="/ru/washing-machines/truesteam/wm"
			}
		},
		stop: function(event, ui) {
			if (ui.position.left < 204) {
				$(this).animate({
					left: 2
				})
			}
		}
	});
	$('#switch-slider-wm').draggable({
		axis: 'x',
		containment: 'parent',
		drag: function(event, ui) {
			if (ui.position.left < 6) {
				location.href="/ru/washing-machines/truesteam/"
			}
		},
		stop: function(event, ui) {
			if (ui.position.left > 6) {
				$(this).animate({
					left: 210
				})
			}
		}
	});
initFilter();
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
	// $('.slider:nth-child(2)').removeClass('active');
	$('.S3RERB .color-item').click(function() {
		$('.S3RERB .color-item').removeClass('active');
		$(this).addClass('active');
		var index = $(this).index()+1;
		$('.slider').removeClass('active');
		$('.slider:nth-child('+index+')').addClass('active');
		$('#buy-bottom').attr('href', $(this).data('shop'));
		$('#wtb-bottom').attr('href', $(this).data('wtb'));
	});
	$('.tab-model').click(function(){
		$('.tab-model').removeClass('active');
		$(this).addClass('active');
		var model = $(this).data('model');
		$('.tab-color').hide();
		$('.tab-color.'+model).css({display: 'inline-block'});
		$('.features').hide();
		if(model == "S3RERB") {
			$('.S3RERB .color-item:first-child').trigger('click');
			$('.features[data-id="S3RERB"]').show();
		} else if (model=="S5BB") {
			$('.slider').removeClass('active');
			$('.slider[data-id="3"]').addClass('active');
			$('#buy-bottom').attr('href', $(this).data('shop'));
			$('#wtb-bottom').attr('href', $(this).data('wtb'));
			$('.features[data-id="S5BB"]').show();
    } else if (model=="S5MB") {
      $('.slider').removeClass('active');
      $('.slider[data-id="4"]').addClass('active');
      $('#buy-bottom').attr('href', $(this).data('shop'));
      $('#wtb-bottom').attr('href', $(this).data('wtb'));
      $('.features[data-id="S5MB"]').show();
    }
		$('.price-text').hide();
		$('.price-text.'+model).show();
		return false;
	});
	$('.tab-model[data-model="S5MB"]').trigger('click');
	 $('.tab-model-button').click(function() {
	 	var model = $('.tab-model.active').attr('data-model');
       $('.popup-close, .overlay, .popup-tech.'+model).fadeIn(400);
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
		// autoplayVideo();
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
			// setTimeout(function(){
				if(elem.find('video').length) {
					elem.find('video').get(0).play();
				}
			// },timer);
			// elem.find('video').on('ended', function() {
				// setTimeout(function(){
					elem.find('.point-img').addClass('animated');
				// },timer);
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
			// });
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
				// elem.find('.prod-1').css({top: top});
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
            // } else {
            //     elem.removeClass('u-animated');
            }
    });
}
/*function parallaxHeroBanner(topStart) {
	if($(window).scrollTop() < ($('.banner-main').offset().top + $('.banner-main').height()) && ($(window).scrollTop() > ($('.banner-main').offset().top )) ) {
		var top = topStart - (($(window).scrollTop() - $('.banner-main').offset().top)*0.2);
		if(top>=0) {
			$('.banner-main .parallax').css({top: top});
		}
	}
}*/

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

function initFilter() {
	var total = $('.product-item').length;
	var html = $('.product-lists').html();
	var filterArr = [];
	$('.filters-available').html(total);
	$('.filters-total').html(total);
	$('.filters .tab').click(function() {
		$('.product-section').show();
		$('.no-products').hide();
		var f=0;
		var elem = $(this);
		var filter = $(this).data('filter');
		if(filterArr.length === 0) {
			elem.addClass('act-filter')
			filterArr.push(filter);
		} else {
			for(var i=0;i<filterArr.length; i++) {
				if(filterArr[i] == filter) {
					elem.removeClass('act-filter');
					filterArr.splice(i, 1);
					f=1;
				}
			}
			if( f === 0) {
				elem.addClass('act-filter')
				filterArr.push(filter);
			}
		}
		console.log(filterArr);
		$('.product-lists').html(html);
		for(var i=0;i<filterArr.length; i++) {
			$('.product-item').each(function() {
				if(!($(this).hasClass(filterArr[i]))) {
					$(this).remove();
				}
			});
		}
		var qn = $('.product-item').length;
		$('.filters-available').html(qn);
		if (qn > 0) {
			$('.product-lists').trigger('destroy.owl.carousel');
	    	$('.product-lists').owlCarousel(owlParams);
		} else {
			$('.product-section').hide();
			$('.no-products').show();
		}
	});
	$('.speed').change(function(){
		$('.product-section').show();
		$('.no-products').hide();
		var f=0;
		var elem = $(this);
		var filter = $(this).val();
		$('.speed option').each(function(){
			var val = $(this).val();
			var index = filterArr.indexOf(val);
			if (index !== -1) {
				filterArr.splice(index, 1);
			}
		});
		$('.product-lists').html(html);
		if(filter !== 'all') {
			filterArr.push(filter);
		}
			for(var i=0;i<filterArr.length; i++) {
				$('.product-item').each(function() {
					if(!($(this).hasClass(filterArr[i]))) {
						$(this).remove();
					}
				});
			}
		var qn = $('.product-item').length;
		$('.filters-available').html(qn);
		if (qn > 0) {
			$('.product-lists').trigger('destroy.owl.carousel');
	    	$('.product-lists').owlCarousel(owlParams);
		} else {
			$('.product-section').hide();
			$('.no-products').show();
		}
		console.log(filterArr);
	});
	$('.depth').change(function(){
		$('.product-section').show();
		$('.no-products').hide();
		var f=0;
		var elem = $(this);
		var filter = $(this).val();
		$('.depth option').each(function(){
			var val = $(this).val();
			var index = filterArr.indexOf(val);
			if (index !== -1) {
				filterArr.splice(index, 1);
			}
		});
		$('.product-lists').html(html);
		if(filter !== 'all') {
			filterArr.push(filter);
		}
			for(var i=0;i<filterArr.length; i++) {
				$('.product-item').each(function() {
					if(!($(this).hasClass(filterArr[i]))) {
						$(this).remove();
					}
				});
			}
		var qn = $('.product-item').length;
		$('.filters-available').html(qn);
		if (qn > 0) {
			$('.product-lists').trigger('destroy.owl.carousel');
	    	$('.product-lists').owlCarousel(owlParams);
		} else {
			$('.product-section').hide();
			$('.no-products').show();
		}
		console.log(filterArr);
	});
	$('.weight').change(function(){
		$('.product-section').show();
		$('.no-products').hide();
		var f=0;
		var elem = $(this);
		var filter = $(this).val();
		$('.weight option').each(function(){
			var val = $(this).val();
			var index = filterArr.indexOf(val);
			if (index !== -1) {
				filterArr.splice(index, 1);
			}
		});
		$('.product-lists').html(html);
		if(filter !== 'all') {
			filterArr.push(filter);
		}
			for(var i=0;i<filterArr.length; i++) {
				$('.product-item').each(function() {
					if(!($(this).hasClass(filterArr[i]))) {
						$(this).remove();
					}
				});
			}
		var qn = $('.product-item').length;
		if (qn > 0) {
			$('.filters-available').html(qn);
			$('.product-lists').trigger('destroy.owl.carousel');
	    	$('.product-lists').owlCarousel(owlParams);
		} else {
			$('.product-section').hide();
			$('.no-products').show();
		}
		console.log(filterArr);
	});
	$('.reset').click(function(){
		$('.product-section').show();
		$('.no-products').hide();
		$('.tab').removeClass('act-filter');
		$('.filters select').val('all');
		filterArr = [];
		$('.product-lists').html(html);
		var qn = $('.product-item').length;
		$('.filters-available').html(qn);
		$('.product-lists').trigger('destroy.owl.carousel');
    	$('.product-lists').owlCarousel(owlParams);
		console.log(filterArr);
	});
}