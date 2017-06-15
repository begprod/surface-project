$(document).ready(function () {
	work();
	parallaxEff();
});


function work() {
	console.log('js work');
}

function parallaxEff() {
	var parallaxEl = $('.maintext__prlx-el');
	$(window).on('scroll', function() {
		var wScroll = $(this).scrollTop();
		parallaxEl.css({
			'top': wScroll/13 + 'px'
		});
		$('.maintext').css({
			'margin-top': '-' + wScroll/2 + 'px'
		});
	});
	//console.log(parallaxElTop);
}