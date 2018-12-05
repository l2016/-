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
/*活动倒计时*/
function hddyPlay(){		
	$(function(){
		var start = new Date();//起始时间
		var end = new Date("2018-12-2 20:00");
		var t=diff(start,end);//时间差s
		function fntime(){
			if(t<0){
				sect_djs_p1.innerHTML="活动结束";
				return;
			}
			var h = parseInt(t/3600);//离结束时间小时
			var m = parseInt((t-h*3600)/60);//结束的分钟
			var s = parseInt(t-h*3600-m*60);
			sect_djs_p1.innerHTML="距本场结束："+h +"时"+m+"分"+s+"秒";
		}
		var timer = setInterval( function(){
			t--;
			if( t < 0 ){
				clearInterval( timer );
			}else{
				fntime();
			}
		},1000 );
		fntime();
})
	hddyPlay();
	}
/*活动*/
$.ajax({
		type:"get",
		url:"data.json",
		async:true,
		success:function(arr){
			shData(arr);
			/*限时抢购*/
			$(".sect_hd1_1 li").mouseenter(function(){
				console.log($(this).index());
				$(".sect_hd1_2").eq($(this).index()).css("opacity",0.5);
				$(".sect_hd1_3").eq($(this).index()).css("display","block").animate({left:116},500);
			}).mouseleave(function(){
				$(".sect_hd1_2").eq($(this).index()).css("opacity",0);
				$(".sect_hd1_3").eq($(this).index()).css("display","none").animate({left:-55},500);
			})
		}
	});
function shData(arr){
	var conStr = "";
	for(var i=0 ; i<5 ; i++){
		var pro=arr[i];
		conStr+=`<li>
					<a href="">
						<img src="img/${pro.src}" alt="" />
						<p>${pro.name}</p>
						<p>${pro.money}</p>
						<p><s>${pro.price}</s></p>
					</a>
					<div class="sect_hd1_2"></div>
					<a class="sect_hd1_3" href="">限时抢购</a>
				</li>`;
	}
	$(".sect_hd1_1").html(conStr);
}
//限时特卖

$(function(){
	function xstyPaly(){
		var $sf=$("#sect_111 li"),
			$sfp=$("#sect_111 li p");	
		$sf.mouseenter(function(){
			$sfp.eq($(this).index()).stop().animate({"bottom":0},1000);
		}).mouseleave(function(){
			$sfp.eq($(this).index()).stop().animate({"bottom":-55},1000);
		})	
	}	
	xstyPaly();
})
/*倒计时*/
$(function(){
	function daojPaly(){
		var start = new Date();//起始时间
		var end = new Date("2018-12-6 20:00");
		var t=diff(start,end);//时间差s
		var $sss=$(".sect_tm_1_3");
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
				$sss.eq(i).html("还有："+d+"天"+h +"时"+m+"分"+s+"秒结束");
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
	daojPaly();
})
/*楼梯角点击*/
//function ltPlay(){
//	$(function(){
//		var $lt = $("#sec_1F_a1_1ul").children();
//		$lt.e
//		$lt.click(function(){
//			$(this)
//		})
//	})
//}
//ltPlay();
/*楼层图片划过效果*/
function ltdtPlay(){
	$(function(){
		$(".sec_1F_a2").bind({
			mouseenter:function(){
				$(this).find("img").stop().animate({"width":440,"height":484,"top":-20,"left":-22},500);
			},
			mouseleave:function(){
				$(this).find("img").stop().animate({"width":400,"height":440,"top":0,"left":0},500);
			}
		})
		$(".sec_1F_a3d").on({
			mouseenter:function(){
				$(this).find("img").stop().animate({"left":6},100);
			},
			mouseleave:function(){
				$(this).find("img").stop().animate({"left":16},100);
			}
		})
		$(".sec_1F_a3x").on("mouseenter",function(){
			$(this).find("img").stop().animate({"left":38},100);
		})
		$(".sec_1F_a3x").on("mouseleave",function(){
			$(this).find("img").stop().animate({"left":48},100);
		})
		
	})
}
ltdtPlay();
/*footer*/
footerPlay("footer dd");
footerPlay("#foot_c ul li");
/*rigth_1*/
function asidePaly(){
	var $aside=$("#rigth_1"),
		$h=$(window).height(),
		$oUl=$("#rigth_1 ul");
		if($h<600&&$h>400){
			$oUl.css("margin-top",100);
		}
		if(400>$h){
			$aside.css("display","none");
		}
		
}
/*返回顶部*/
function fanhuiPlay(){
	$("#rigth_1_last").click(function(){
		$("html,body").animate({"scrollTop":0},1000);
	})
}
fanhuiPlay();
asidePaly();
function fnPaly(){
	var $ulist=$("#rigth_1 ul li");
	$ulist.mouseenter(function(){
		$(this).css("background","#9381f4");
		$(this).find("span").stop().animate({"right":30},500);
	}).mouseleave(function(){
		$(this).css("background","");
		$(this).find("span").stop().animate({"right":-80},500);
	})
}
fnPaly();