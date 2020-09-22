var $,
    window;
$(function () {
    'use strict';
    // Adjust Slider Height
    var windowHeight   = $(window).height(),
        navbarHeight   = $('.navbar').innerHeight(),
        upperHeight = $('.upper-bar').innerHeight();
    $('.slider, .carousel-item').height(windowHeight - (upperHeight + navbarHeight));
	
	// Featured Work shuffle
	
	$('.featured-work ul li').on('click', function () {
		$(this).addClass('active').siblings().removeClass('active');
		if ($(this).data('class') === 'all') {
			$('.shuffle-img .col-sm').css('opacity', 1);
		} else {
			$('.shuffle-img .col-sm').css('opacity', '0.08');
			$($(this).data('class')).parents().css('opacity', 1);
		}
	});
	
	// Scalling the Pricing Table 
	
	$('.pricing-table .card').on('click', function () {
		$(this).addClass('corporate').parent('.transfer').siblings().children('.card').removeClass('corporate');
	});
	
});


