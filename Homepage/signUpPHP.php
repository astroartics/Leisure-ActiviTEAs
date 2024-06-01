<?php
	$username = $_POST['username'];
	$password = $_POST['password'];
	
	$con = pg_connect("host=localhost port=5432 dbname=postgres user=postgres password=postgres");
	
	//Check if same username already exists in the DB, and display an alert if it does.
	$checkUsername = pg_query($con,"SELECT * FROM Users;");
	while($row = pg_fetch_row($checkUsername))
	{
		//echo "$row[0] and $row[1]<br/>";
		if($row[0] == $username)
		{
			echo "<script> 
				window.location.href = 'index.html'; 
				alert('Username is already taken! Please enter a different username');
			      </script>";
			
			exit;      
		}
	}
	
	$result = pg_query($con,"INSERT INTO Users values('$username','$password');");
	echo "<script> alert('You have successfully signed up into our website!'); </script>";
	echo "	<script> 
			window.location.href = '../Homepage/Homepage.html';
		</script>";
?>
