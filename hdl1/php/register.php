<?php
	header("content-type:text/html;charset=utf-8");
	//第一步 ： 接收客户端请求的数据
	$username = $_POST["uname"];
	$userpwd = $_POST["upwd"];
	//echo $username , $userpwd;
	//第二步 ： 处理数据   php操作mysql
	//一、连接数据源  返回连接的数据源  返回值后面会用
	$db = mysql_connect("localhost","root","root");
	//二、选择数据库
	mysql_select_db( "db1819" , $db );
	//三、设置字符编码  
	mysql_query("set names utf8");
	//四、编写sql语句  在mysql编辑器下写好执行后没有问题了 粘贴过来
	$sql = "insert into user(`uname`,`upwd`) values('$username','$userpwd')";
	//五、执行sql语句--执行insert 返回受影响的行数
	$row = mysql_query( $sql );
	//第三步 ： 返回结果
	if( $row ){
		echo "<script>alert('注册用户成功');location.href='login.html';</script>";
	}else{
		echo "<script>alert('注册用户失败');location.href='register.html';</script>";
	}
	/*
	 排错 ：
	 	1、检查数据是否接到    数据是否正确的传递到服务器上
	 	2、检查 数据库是否存在
	 	3、检查sql语句是否正确 
	 	4、echo的数据语句   js脚本代码
	 */
?>