function footerPlay(obj){
	$(obj).mouseenter(function(){
		$(this).find("a").css("color","#e5004b");
	}).mouseleave(function(){
		$(this).find("a").css("color","");			
	})
}
footerPlay(".nav_dh_sj");
$(".nav_dl").mouseenter(function(){
	$(this).css("color","#fff");
}).mouseleave(function(){
	$(this).css("color","");
})

$(".nav_a").mouseenter(function(){//一级菜单
	$(this).children("a").css("color","#e5004b");
	$(this).children().children().children("img").attr("src","img/daohang2.gif");//一级菜单 图片
	$(this).css("background","#fff");	
}).mouseleave(function(){	
	$(this).children("a").css("color","");
	$(this).children().children().children("img").attr("src","img/daohang1.gif");
	$(this).css("background","");	
})
$(".nav_Li").mouseenter(function(){//二级菜单
	$(this).children("ul").css("display","block");
}).mouseleave(function(){
	$(this).children("ul").css("display","none");
})
//benner 左右尖角
$("#banner").mouseenter(function(){
	$(".ban_LR").animate({"opacity":0.5},500);
}).mouseleave(function(){
	$(".ban_LR").animate({"opacity":0},500);
})
$(".ban_LR").mouseenter(function(){
	$(this).animate({"opacity":1},500);
}).mouseleave(function(){
	$(this).animate({"opacity":0.5},500);
})
//banner
$(function(){
	function bannerPlay(){
		var timer=null,
			index=0,
			$uList=$("#banner ul li"),
			$banLeft=$(".ban_left"),
			$banRight=$(".ban_right"),
			$oList=$("#banner ol li");
		timer=setInterval( autoPlay , 2000 );
		function autoPlay(){
			index++;
			if( index==$uList.size() ){
				index=0;
			}
			$uList.eq(index).fadeIn(1000).siblings().fadeOut(1000);
			$oList.eq(index).addClass("ban_1").siblings().removeClass("ban_1");
		}
		
		$oList.mouseenter(function(){
			clearInterval(timer);
			index=$(this).index()-1;
			autoPlay();
		}).mouseleave(function(){
			timer=setInterval( autoPlay , 2000 );
		})
		//角点击
		$banLeft.click(function(){
			clearInterval(timer);
			index--;
			if(index<0){
				index=$uList.length-1;
			}
			$uList.eq(index).fadeIn(1000).siblings().fadeOut(1000);
			$oList.eq(index).addClass("ban_1").siblings().removeClass("ban_1");
			setInterval((timer=setInterval( autoPlay , 2000 )),2000);
		})
		$banRight.click(function(){
			clearInterval(timer);
			index++;
			if(index>$uList.length-1){
				index=0;
			}
			$uList.eq(index).fadeIn(1000).siblings().fadeOut(1000);
			$oList.eq(index).addClass("ban_1").siblings().removeClass("ban_1");
			setInterval((timer=setInterval( autoPlay , 2000 )),2000);
		})
	}
	bannerPlay();
})
