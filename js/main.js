$('.menu').click(function(){
	if($('.menu').hasClass('menu-close')){//关闭导航
		$('.menu').removeClass('menu-close');
		$('nav').hide();
		$('.all-cover').hide();
	}else{
		$('.menu').addClass('menu-close');//打开导航
		$('nav').show();
		$('.all-cover').show();
	}
});

$('nav ul li').click(function(){
	$('nav ul li').removeClass('choose');
	$(this).addClass('choose');
	mySwiper.slideTo($(this).index(),500,false);
	$('.menu').click();
});