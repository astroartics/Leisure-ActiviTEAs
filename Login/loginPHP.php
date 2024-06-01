<?php
	$username = $_POST['username'];
	$password = $_POST['password'];
	
	$dom = new DOMDocument();
	
	$flag = 0;
	
	$con = pg_connect("host=localhost port=5432 dbname=postgres user=postgres password=postgres");
	
	$checkUsername = pg_query($con,"SELECT * FROM Users;");
	while($row = pg_fetch_row($checkUsername))
	{
		if($row[0] == $username && $row[1] == $password)
		{
			echo "Valid user!";    
		}else{
			$flag = 1;
		}
	}
	
	if($flag == 1){
		echo "	<script> 
				window.location.href = 'login.html'; 
				alert('Invalid username or password!');
			</script>";    
	}else{
		echo "	<script> alert('Login successful!'); </script>";
		echo "	<script> 
				window.location.href = '../Homepage/index.html';
			</script>";
	}	
	
?>
