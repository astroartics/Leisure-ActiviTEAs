<?php
	$username = $_POST['username'];
	$password = $_POST['password'];
	
	$flag = 0;
	
	$con = pg_connect("host=localhost port=5432 dbname=postgres user=postgres password=postgres");
	
	$checkUsername = pg_query($con,"SELECT * FROM Users;");
	$rowCount = pg_num_rows($checkUsername);
	
	if($rowCount == 0){
		$flag = 1;
	}else{
		while($row = pg_fetch_row($checkUsername))
		{
			if($row[0] == $username && $row[1] == $password)
			{
				//echo "Valid user!";   
				$flag = 0;
				break;
			}else{
				$flag = 1;
			}
		}
	}
	
	if($flag == 1){
		echo "	<script> 
				alert('Invalid username or password!');
				window.location.href = 'login.html'; 
			</script>";    
	}else if($flag == 0){
		//echo "	<script> alert('Login successful!'); </script>";
		echo "	<script> 
				window.location.href = 'Homepage.html';
			</script>";
	}
	
	$con.close();	
?>
