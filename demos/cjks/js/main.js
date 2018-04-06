$('#focus-img').height($('#focus-img').width()*0.3);
$(window).resize(function(){
	$('#focus-img').height($('#focus-img').width()*0.3);
});
var focus_img_i = 0;
var focus_timer = setInterval(function(){
	$('#focus-img ul li').fadeOut();
 	$('#focus-img ul li').eq(focus_img_i).fadeIn();
 		$('#focus-img ol li').removeClass('active');
 		$('#focus-img ol li').eq(focus_img_i).addClass('active');
 	focus_img_i++;
 	if(focus_img_i==3){
		focus_img_i = 0;
 	}
},2000);
$('#focus-img ol li').hover(
	function(){
		clearInterval(focus_timer);
 		$('#focus-img ul li').fadeOut();
 		$('#focus-img ul li').eq($(this).index()).fadeIn();
 		$('#focus-img ol li').removeClass('active');
 		$('#focus-img ol li').eq($(this).index()).addClass('active');
 		focus_img_i = $(this).index()+1;
 		if(focus_img_i==3){
			focus_img_i = 0;
	 	}
	},
	function(){
		focus_timer = setInterval(function(){
			$('#focus-img ul li').fadeOut();
		 	$('#focus-img ul li').eq(focus_img_i).fadeIn();
	 		$('#focus-img ol li').removeClass('active');
	 		$('#focus-img ol li').eq(focus_img_i).addClass('active');
		 	focus_img_i++;
		 	if(focus_img_i==3){
				focus_img_i = 0;
		 	}
		},2000);
	}
);
$('.f-right>div').hover(
	function(){
		console.log($(this).children().children());
		$(this).children().children().animate({top:0});
	},
	function(){
		$(this).children().children().animate({top:'120px'});
	}
);