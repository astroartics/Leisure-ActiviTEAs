<?php
	$feedback = $_POST['feedback'];
	$name = $_POST['name'];
	$finalUser = $_POST['userTemp'];
	
	//$name = $dom->getElementById('name')->getNamedItem('name')->value;
	
	if($feedback!=""){
		$file = fopen("feedbacks.txt", "a");
		fwrite($file, "( Original user : ".$finalUser." )\t".$name." says : ".$feedback."\n");
	}
	
	echo "<script>window.location.href = 'FeedbackForm.html'</script>";
	//header("Location: FeedbackForm.html", true, 302);
	//exit;
?>
