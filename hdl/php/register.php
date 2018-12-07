<?php
	header("content-type:text/html;charset=utf-8");
	$db = mysql_connect("localhost","root","root");
	mysql_select_db( "spdl" , $db );
	mysql_query("set names utf8");
	$username = $_POST["uname"];
	$userpwd = $_POST["upwd"];
	
	//编写sql 
	//第一步 ： 查找在user表中是否存在$username 如果存在 就不注册 
	$sql = "select * from user where uname='$username'";
	$res = mysql_query( $sql );
	$arr = mysql_fetch_array( $res );
	if( $arr ){ //说明用户名存在
		echo "<script>alert('该用户已存在');location.href=http://127.0.0.1/sp/hdl/zhuc.html';</script>";
	}else{
		$sql = "insert into user(uname,upwd) values('$username','$userpwd')";
		$row = mysql_query( $sql );
		if( $row ){
			echo "<script>location.href='http://127.0.0.1/sp/hdl/denglu.html';</script>";
		}else{
			echo "<script>alert('注册失败');location.href='http://127.0.0.1/sp/hdl/zhuc.html';</script>";
		}
	}
?>
