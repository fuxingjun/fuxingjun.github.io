$('.menu').click(function(){
	$('.menu').toggleClass('menu-close');
	$('nav').toggleClass('hidden');
	$('.all-cover').toggleClass('hidden');
});

$('nav ul li').click(function(){
	$('nav ul li').removeClass('choose');
	$(this).addClass('choose');
	mySwiper.slideTo($(this).index(),500,false);
	$('.menu').click();
});
$('#works div.swiper-slide').children().hide();
$('#works div.swiper-slide').hover(
	function(){
		$(this).children().fadeIn();
	},
	function(){
		$(this).children().fadeOut();
	}
);