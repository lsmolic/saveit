<!DOCTYPE html>
<html>

<head>
	<meta charset='UTF-8'>
	
	<title>Seamless Responsive Photo Grid</title>
	
	<link rel='stylesheet' href='css/style.css'>
</head>

<body>
	<a href="javascript:void((function(){var e=document.createElement('script');e.setAttribute('type','text/javascript');e.setAttribute('id','saveitbookmarklet');e.setAttribute('charset','UTF-8');e.setAttribute('src','http://sites.localhost.com/saveit/js/get_images.js?r='+Math.random()*99999999);document.body.appendChild(e)})());" title="Share It" id='ShareItButton'><Strong>Share It</Strong></a>
	<section id="photos">

		<?php for ($i=0; $i < 30; $i++) {

		  if ($i % 2 == 1) {

			echo "<img src='http://placedog.com/300/";
			echo rand(200,400);
			echo "' alt=''>";
	
			} else {
	
			echo "<img src='http://placekitten.com/300/";
			echo rand(200,400);
			echo "' alt=''>";			
	
			}

		} ?>
	
	</section>
	
</body>

</html>