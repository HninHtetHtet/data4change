<!DOCTYPE html>
<?php
<html>
<head>
	<title></title>
</head>
<body>
	$test_var=8.23;
	echo $test_var."<br/>";
	echo gettype($test_var)."<br/>";

	settype($test_var, "string");
	echo $test_var."<br/>";
	echo  gettype($test_var)."<br/>";


</body>
</html>