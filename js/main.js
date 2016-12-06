/*自动轮播事件*/
window.onload = function(){

	  var speed = 10;//速度

		var slider = document.getElementById('slider-box');//容器
		var slider1 = document.getElementById('slider1');//正体
		var slider2 = document.getElementById('slider2');//副本

		slider2.innerHTML = slider1.innerHTML; //拷贝内容到副本

		//利用div的水平滚动条进行运动，如果横向移动卷去的位置正好是一个正体的宽度，则滚动条复位到0
		function marquee() {
			if (slider1.offsetWidth - slider.scrollLeft <= 0) 
				slider.scrollLeft = 0;
			else 
				slider.scrollLeft++;	
		}

		//初始化定时器
		var timer = setInterval(marquee, speed);

		//鼠标移上停止
		slider.onmouseover = function(){
			window.clearInterval(timer);
		}

		//鼠标离开继续
		slider.onmouseout = function() {
			timer = setInterval(marquee, speed);
		}
		
}

/*页面底部雪碧图侧边栏*/
     $(document).ready(function(){
	
	// 滚动条事件
	$(window).scroll(function(event) {
		
		// 获得滚动条卷去的大小
		var sTop = $(window).scrollTop();		

		// 如果滚动条超过400像素，显示回到顶部的按钮
		
		if (sTop >=400) {
			$('.toolbar').show();			
		} else {
			$('.toolbar').hide();
		}

		if (sTop >=700) {
			$('.toolbar-item-top').show();			
		} else {
			$('.toolbar-item-top').hide();
		}
	});

	// 滚动条回到顶部
	$('.toolbar-item-top').click(function(event) {
		
		$('html,body').animate({scrollTop:0}, 1000);

	});

});         
      
