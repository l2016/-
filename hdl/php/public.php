<?php
	header("content-type:text/html;charset=utf-8");
	$db = mysql_connect("localhost","root","root");
	mysql_select_db( "db1819" , $db );
	mysql_query("set names utf8");
?>