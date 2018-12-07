<?php
	//引入public.php文件
	//include "../public.php";
	header("content-type:text/html;charset=utf-8");
	$db = mysql_connect("localhost","root","root");
	mysql_select_db( "spdl" , $db );
	mysql_query("set names utf8");
	//第一步：接收数据
	$username = $_POST["uname"];
	$userpwd = $_POST["upwd"];
	//第二步：处理数据
	
	$sql = "select * from user where `uname`='$username'";
	$res = mysql_query( $sql );
	//执行select查询操作时，返回的结果是一个资源类型  需要通过mysql_fetch_array()  得到资源类型中的数据
	$arr = mysql_fetch_array( $res );
	//mysql_fetch_array() 每执行一次，只取出资源类型中的一条数据  并返回一个数组
	
	//判断数组是否存在   如果存在，说明用户名存在
	if( $arr ){
		if( $userpwd == $arr["upwd"] ){ //如果用户名存在  判断密码是否相等
			echo "<script>location.href='http://127.0.0.1/sp/hdl/index.html';</script>";
		}else{
			echo "<script>alert('密码错误');location.href='http://127.0.0.1/sp/hdl/denglu.html';</script>";
		}
	}else{
		echo "<script>alert('该用户不存在');location.href='http://127.0.0.1/sp/hdl/zhuc.html';</script>";
	}
	//第三步：返回结果
	//echo $res;
?>
