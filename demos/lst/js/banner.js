$(function(){
	//设置banner的高度
	var h = $('body').width()/(1920/650);
	//console.log(h);
	//设置banner默认高度
	$('.banner').height(h);
	$(window).resize(function(){
		//console.log(1);
		h = $('body').width()/(1920/650);
		$('.banner').height(h);
	})
	//默认显示第一张图
	var page = 1;
	//记录图片的长度
	var len = $('.banner .imglist ul li').length;
	function imgchange(){
		$('.banner .imglist ul li').eq(page-1).addClass('current');
		$('.banner .imglist ul li').eq(page-1).siblings('li').removeClass('current');
		$('.banner .smallbtn li').eq(page-1).addClass('current');
		$('.banner .smallbtn li').eq(page-1).siblings('li').removeClass('current');
	}
	//绑定下一个点击事件
	$('.next-btn').click(function(){
		//console.log(1);
		page++;
		if(page>len){
			page=1;
		}
		imgchange();
	})
	//绑定上一个点击事件
	$('.prev-btn').click(function(){
		//console.log(1);
		page--;
		if(page<1){
			page=len;
		}
		imgchange();
	})
	//绑定蓝色长方形点击事件
	$('.banner .smallbtn li').click(function(){
		//console.log(1);
		var index = $('.banner .smallbtn li').index($(this));
		page = index + 1;
		//console.log(page);
		imgchange();
	})
})