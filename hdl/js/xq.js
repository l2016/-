function aPlay(){
	var $a=$(".nezp_a a");
	$a.mouseenter(function(){
		$(this).css("color","#e5004b");
	}).mouseleave(function(){
		$(this).css("color","");			
	})
}
aPlay();
$("#bottom li").mouseenter(function(){
	var index=$(this).index();
	$("#small img").eq(index).show().siblings("img").hide();
	$("#big img").eq(index).show().siblings("img").hide();
})
$("#small").on({
	"mouseenter":function(){
		$("#big").show();
		$("#mask").show();
	},
	"mouseleave":function(){
		$("#big").hide();
		$("#mask").hide();
	},
	"mousemove":function(e){
		var e=e||event;
		var x=e.clientX-$("#small").offset().left-$("#mask").width()/2;
		var y=e.clientY-$("#small").offset().top-$("#mask").height()/2;
		var maxx=$("#small").width()-$("#mask").width();
		var maxy=$("#small").height()-$("#mask").height();
		x=x<0?0:(x>maxx?maxx:x);
		y=y<0?0:(y>maxy?maxy:y);
		var x1=-x*($("#big").find("img").width()/$("#small").find("img").width());
		var y1=-y*($("#big").find("img").height()/$("#small").find("img").height());
		$("#mask").css({"left":x,"top":y})
		$("#big").find("img").css({"left":x1,"top":y1})
	}
})