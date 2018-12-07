function ulPaly(){
	$("#ban_p").mouseenter(function(){
		$("#ban_ul").css("display","block");
	}).mouseleave(function(){
		$("#ban_ul").css("display","none");
	})
	$("#ban_ul").mouseenter(function(){
		$(this).css("display","block");
	}).mouseleave(function(){
		$(this).css("display","none");
	})
}
ulPaly();
$(function(){
	function daojPaly(obj){
		var start = new Date();//起始时间
		var end = new Date("2018-12-8 20:00");
		var t=diff(start,end);//时间差s
		var $sss=$(obj);
		function fntime1(){
			if(t<0){
				for(var i=0 ; i<$sss.length ; i++){
					$sss.eq(i).html("活动结束");
				}
				return;
			}
			var d = parseInt(t/86400);
			var h = parseInt((t-d*86400)/3600);//离结束时间小时
			var m = parseInt((t-d*86400-h*3600)/60);//结束的分钟
			var s = parseInt(t-d*86400-h*3600-m*60);
			for(var i=0 ; i<$sss.length ; i++){
				$sss.eq(i).html("还有"+d+"天"+h +"时"+m+"分"+s+"秒结束");
			}
		}
		var timer1 = setInterval( function(){
			t--;
			if( t < 0 ){
				clearInterval( timer1 );
			}else{
				fntime1();
			}
		},1000 );
		fntime1();
	}
	daojPaly(".main_left_b_p");
})
function hueguoPaly(){
	var $ulist=$(".main_left_b");
	$("#main_left_t_ul>li").mouseenter(function(){
		$(this).css("border","1px solid #e9457f");
		$ulist.eq($(this).index()).find("li").css("color","#e9457f");
	}).mouseleave(function(){
		$(this).css("border","1px solid #f6f6f6");
		$ulist.eq($(this).index()).find("li").css("color","");
	})
	$("#Lg_ul ul li").mouseenter(function(){
		$(this).find("a").css("border","4px solid #ffd8e6");
	}).mouseleave(function(){
		$(this).find("a").css("border","4px solid white");
	})
}
hueguoPaly();
$(function(){
	function scrollPlay(){
		var $h=$(".main_right").offset().top,
			$l=$(".main_right").offset().left;
		$(window).scroll(function(){
			var $t=$(document).scrollTop();
			if($t>$h){
				$(".main_right").css({"position":"fixed","top":0,"left":$l});
			}else{
				$(".main_right").css({"position":"absolute","left":""});
			}
		})
	}
	scrollPlay();
})
