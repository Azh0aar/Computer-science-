<?php  
$host="localhost";
$user="id22204394_almathaqalaseel123";
$password="123123Mm*";
$db="id22204394_almathaqalaseel";


$data =	mysqli_connect($host,$user,$password,$db);
if ($data===false) {
	die("connection error");
	// code...
}

if($_SERVER["REQUEST_METHOD"]=="POST")
{
	$username=$_POST["username"];
	$password=$_POST["password"];


	$sql="select * from users where username='".$username."' AND password='".$password."' ";
	$result=mysqli_query($data,$sql);
	$row=mysqli_fetch_array($result);
		if($row["usertype"]=="user")
	{	
		header("location:index.php");
	}

	elseif($row["usertype"]=="admin")
	{
		header("location:index.php");
		
	}

	else
	{
		echo "username or password incorrect";
	}

}



?>





?>


<!DOCTYPE html>
<html>
<head>
	<title>LOGin to Your Account</title>
	<link rel="stylesheet" type="text/css" href="style.css">
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
<body>


 
	<center>
	<div class="wrapper" >
		<h1 class="color">Log In</h1>
     <form action="#" method="POST">


		<div >
		<div>
     	<table>
				 	<tr>
			
					<td><label class="color" >Username:</label></td>
					<td><input type="text" name="username" size="60px" required></td>
				</tr>
     				<tr>
			
					<td><label class="color">Password:</label></td>
					<td><input type="password" name="password" size="60px" required></td>
				</tr>	
     	</table>
     </div>
     <br/><br/>
     	<button type="submit" value="Login" >Login</button>
     	<p class="color">Not a Member Yet ? <a href="Regster.php">Create an Account</a></p>
     	</center>
     </div>
     </form>
   </div>
 </center>
</body>
</html>