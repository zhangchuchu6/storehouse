<?php
//解决乱码问题
header("Content-type: text/html; charset=utf-8");
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "db2017";

// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn -> connect_error) {
	die("连接失败: " . $conn -> connect_error);
}

//接收数据
$usernames = $_POST['usernames'];
$passwords = $_POST['passwords'];

//执行sql语句
//先判断数据库中是否存在
$sqlstr = "select * from lee where username='$usernames'";
$result = $conn->query($sqlstr);
if ($result->num_rows > 0) {
$sqlstr2 = "select * from  lee where password='$passwords'";
	$result2 = $conn->query($sqlstr2);
	if($result2->num_rows > 0){
		echo "2";
	}else{
		echo "1";  //账号或者密码错误
	}
} else {
	echo "0";   //用户名不存在
}
$conn->close();
?>
