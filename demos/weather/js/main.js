function getGeolocation(){//获取失败率太高,放弃
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(
			function(position){
				console.log(position.coord.longitude);
				console.log(position.coord.latitude);
			},
			function(err){
				console.log(err.code);
				//0:其它错误
				// 1：用户拒绝共享位置信息
				// 2：获取位置信息失败
				// 3：设置了timeout，获取超时
			}
		);
	}else{

	}
}
// console.log(remote_ip_info);
//直接用和风天气的location=auto_ip获取地址不准确
if(!remote_ip_info.city){
	$('body div').hide();
	$('<h2>获取城市信息失败！<h2>').appendTo($('body'));
}else{
	var para = "key=e097cc0ef98f4536886ea65640d6c47d&location="+remote_ip_info.city;
	getWeather(para);
}
function getWeather(para){
	$.ajax({
		url:"https://free-api.heweather.com/s6/weather?"+para,
		type:'get',
		success:function(data){
			console.log(data.HeWeather6[0]);
			//经度：HeWeather6[0].basic.lat
			//纬度：HeWeather6[0].basic.lon
			//更新时间：HeWeather6[0].update.loc,HeWeather6[0].update.utc
			//实时天气:HeWeather6[0].now
			//未来天气：HeWeather6[0].daily_forecast
			//各种生活指数(lifestyle 8位数组)：HeWeather6[0].lifestyle[0].txt;
			$('p.lon-lat').text("经度："+data.HeWeather6[0].basic.lat+"，纬度："+data.HeWeather6[0].basic.lon);
			$('p.country').text(data.HeWeather6[0].basic.cnty);
			$('div.location h2').text(data.HeWeather6[0].basic.location);
			$('div.weather h3').text(data.HeWeather6[0].now.cond_txt);
			$('div.w-img img')[0].src = "cond_icon_heweather/"+data.HeWeather6[0].now.cond_code+".png";
			$('div.tmp p').text(data.HeWeather6[0].daily_forecast[0].tmp_min+"~"+data.HeWeather6[0].daily_forecast[0].tmp_max+"℃");
			$('div.tmp h2').text(data.HeWeather6[0].now.tmp+"℃");
			$('div.w-info p').eq(0).text(data.HeWeather6[0].now.wind_dir+"  "+data.HeWeather6[0].now.wind_sc+"级");
			$('div.w-info p').eq(1).text("更新时间："+data.HeWeather6[0].update.loc);

			
			$('div.f-weather').each(function(index){
				$('div.f-weather').eq(index).find('p').eq(0).text(data.HeWeather6[0].daily_forecast[index].date);
				$('div.f-weather').eq(index).find('p').eq(1).text(data.HeWeather6[0].daily_forecast[index].cond_txt_d);
				$('div.f-weather').eq(index).find('img')[0].src = "cond_icon_heweather/"+data.HeWeather6[0].daily_forecast[index].cond_code_d+".png";
				$('div.f-weather').eq(index).find('p').eq(2).text(data.HeWeather6[0].daily_forecast[index].tmp_min+"~"+data.HeWeather6[0].daily_forecast[0].tmp_max+"℃");
			});

			data.HeWeather6[0].lifestyle.forEach(function(value,index){
				$('div.suggestions').append('<p>'+value.txt+'</p>');
			});
		},
		error:function(err){
			console.log(err.code);
		}
	});
}