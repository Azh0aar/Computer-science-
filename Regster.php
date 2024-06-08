<?php
$host="localhost";
$user="id22204394_almathaqalaseel123";
$password="123123Mm*";
$db="id22204394_almathaqalaseel";

session_start();

$data=mysqli_connect($host,$user,$password,$db);

if($data===false)

{
	die("COnnection error");
}


if($_SERVER["REQUEST_METHOD"]=="POST")
{

$username=$_POST["username"];
$email=$_POST["email"];
$password=$_POST["password"];


$sql="insert into users (username,email,password) values ('$username','$email','$password')  ";

$result=mysqli_query($data,$sql);

if($result)

{

	header("location:index.php");
}

else
{

	echo "Register failed";
}

}





?>







<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<style type="text/css">
body{


    background:url(home-img.jpg) no-repeat;
   



}
.wrapper {
    position: relative;
    background: transparent;
    width: 500px;
    width:500px;border: 2px solid #ccc;
    padding: 50px;
    border-radius: 5px;margin: 100px auto;
    border-radius: 20px;
    backdrop-filter: blur(20px);
    box-shadow: 0 0 30 rgba(0, 0, 0, .5);

    
}
.color{
	color: #fff;
}
button{
background: #555; 
padding: 10px 15px; 
color: #fff;
border: none;

}

a{
	color:  #CF5211;
}
</style>
<body >

<center>
	<div class="wrapper" >
		<h1 class="color">create account</h1>

	<form action="#" method="post">


		
		<div >
		<div>
			<table>
				 <tr>
					<td> <label class="color">Username</label></td>
					<td><input type="text" name="username" size="60px" required></td>
				</tr>
				<tr>
			
					<td><label class="color">Email</label></td>
					<td><input type="email" name="email" size="60px" required></td>
				</tr>
				<tr>
			
					<td><label class="color">Password</label></td>
					<td><input type="password" name="password" size="60px" required></td>
				</tr>
		

		
		
	</table>
		</div>
<br/><br/>
<button type="submit" value="Register"  >Signin</button>

</center>
</div>

	</form>
</div>
</body>
</html>