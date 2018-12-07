$(".nezp_caa_ul").on("click",".nezp_caa_pt2",function(){
		var startObj = $(this);//起始按钮
		var endObj = $(".nav_gw"); //结束按钮
		var $imgObj = $(this).parent().find("img");//获取当前按钮对应的大图对象
		$.fnInit(startObj,endObj).fnMove($imgObj);
		var flag = true;//假设值为true时  向arr中push新的商品对象
		var arr = [];//存放多个商品对象
		//data()方法用来获取data-*的自定义属性值
		//存放一个商品对象的信息
		var json = {
			"id": $(this).data('pid'),
			"name":$(this).data('pname'),
			"src":$(this).data('src'),
			"price":$(this).data('price'),
			"count":1
		}
		//由于每次单击按钮时会将数组清空
		//所以先取出cookie中的数据 这个数据实际上是一个数组brr
		//将这个数组brr中的数据存入到arr中  
		var brr = getCookie("shoplist");
		//第一次购买商品时  直接将这个商品存入到arr就可以
		if( brr.length != 0 ){
			arr = brr;
			//遍历数组arr  判断当前购买的商品在arr中是否存在
			//如果存在 就将商品的count++
			for( var i = 0 ; i < arr.length ; i++ ){
				if( json.id == arr[i].id ){
					arr[i].count++;
					flag = false;
					break;
				}
			}
		}
		
		if( flag ){
			//将当前购买的商品对象存入到数组中
			arr.push( json );
		}
		
		//将数组存入到cookie中
		setCookie( "shoplist",JSON.stringify( arr )  );
		console.log(document.cookie);
	})
	
	
	$.extend({
		fnInit : function(startObj,endObj){//功能是确定三点坐标及抛物线方程
			//起始点
			this.startPoint = {
				x : startObj.offset().left + startObj.width()/2,
				y : startObj.offset().top
			}
			//结束点
			this.endPoint = {
				x : endObj.offset().left + endObj.width()/2,
				y : endObj.offset().top
			}
			//最高点
			this.topPoint = {
				x : this.endPoint.x - 100,
				y : this.endPoint.y- 80
			}
			//根据三点坐标确定抛物线方程系数a b c
			
			this.a = ((this.startPoint.y - this.endPoint.y) * (this.startPoint.x - this.topPoint.x) - (this.startPoint.y - this.topPoint.y) * (this.startPoint.x - this.endPoint.x)) / ((this.startPoint.x * this.startPoint.x - this.endPoint.x * this.endPoint.x) * (this.startPoint.x - this.topPoint.x)-(this.startPoint.x * this.startPoint.x - this.topPoint.x * this.topPoint.x) * (this.startPoint.x - this.endPoint.x));  
								
			this.b = ((this.endPoint.y - this.startPoint.y) - this.a * (this.endPoint.x * this.endPoint.x - this.startPoint.x * this.startPoint.x)) / (this.endPoint.x - this.startPoint.x);  
								
			this.c = this.startPoint.y - this.a * this.startPoint.x * this.startPoint.x - this.b * this.startPoint.x;
			//console.log( this.a,this.b,this.c );
			
			return this;
		},
		fnMove : function(imgObj){
			//创建图片
			var $img = $("<img>");
			//将img添加到body中
			$("body").append($img);
			//设置img的src为imgObj的src  属性操作
			$img.attr( "src",imgObj.attr("src") );
			var x = this.startPoint.x;//商品的起始点x
			var y = this.startPoint.y;//商品的起始点y
			//对商品的样式进行描述
			$img.css({
				width:30,
				height:30,
				position:"absolute",
				left : x,
				top : y
			})
			//商品开始运动
			var timer = setInterval(function(){
				x = x + 10;
				y = this.a*x*x + this.b*x + this.c;
				if( x < this.endPoint.x ){
					//设置商品运动的left和top值的变化
					$img.css({
						left : x,
						top : y
					})
				}else{
					clearInterval(timer);
					$img.remove();
					$("#shopNum").html( Number($("#shopNum").html()) + 1 );
				}
			}.bind(this),20)
		}
	});
	
	
	
	
	
	
	
	
	
	
	
	
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
	//划过效果
	function aPlay(){
		var $a=$(".nezp_a a");
		$a.mouseenter(function(){
			$(this).css("color","#e5004b");
		}).mouseleave(function(){
			$(this).css("color","");			
		})
	}
	aPlay();
	$.ajax({
			type:"get",
			url:"data1.json",
			async:true,
			success:function(arr){
				shData1(arr);
				$(".nezp_caa_ul li").mouseenter(function(){
					$(this).css("border","3px solid #e5004b");
					$(this).find("button").css({"background":"#e5004b","color":"white"});
				}).mouseleave(function(){
					$(this).css("border","");			
					$(this).find("button").css({"background":"","color":""});
				})
			}
		});
	function shData1(arr){
		var conStr = "";
		for(var i=0 ; i<18; i++){
			var pro=arr[i];
			conStr+=`<li>
						<a href="http://127.0.0.1:8020/hdl/xq.html"><img src="img/${pro.src}"/>
						<p>${pro.name}</p></a>
						<p class="pp"><b>${pro.money}</b></p><span><s>${pro.price}</s></span>
						<p><button class="nezp_caa_pt2" data-pid='${ pro.id }' data-pname='${ pro.name }' 
								        data-src= '${ pro.src }' data-price='${ pro.price }'>加入购物车</button></p>
					</li>`;		
		}
		$(".nezp_caa_ul").html(conStr);
	}