$(window).on('scroll', function() {

	var wScroll = $(this).scrollTop();

	var parallaxLine = $('.maintext__prlx-line');
	var parallaxTextEl = $('.maintext');
	parallaxLine.css({
		'top': wScroll/6 + 'px'
	});
	parallaxTextEl.css({
		'margin-top': '-' + wScroll/2 + 'px'
	});

	var img1 = $('.prlx-footballer').offset().top - 400;
	$('.prlx-footballer').css({
		'top': wScroll/20 + 'px',
		'left': wScroll/5 + 'px'
	});
	$('.prlx-footballer .prlx-footballer__prlx-line').css({
		'top': wScroll/20 + 'px'
	});

	var img1 = $('.prlx-basketballer').offset().top - 400;
	$('.prlx-basketballer').css({
		'top': wScroll/20 + 'px',
		'right': wScroll/18 + 'px'
	});
	$('.prlx-basketballer .prlx-basketballer__prlx-line1').css({
		'top': wScroll/20 + 'px'
	});
	$('.prlx-basketballer .prlx-basketballer__prlx-line2').css({
		'bottom': wScroll/20 + 'px'
	});
});
