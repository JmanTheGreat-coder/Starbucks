<?php
$firstname = $_POST['firstName'];
$lastname = $_POST['lastName'];
$email = $_POST['email'];
$zipcode = $_POST['zipcode'];
$formcontent=" From: $firstname $lastname \n Email: $email \n ZipCode: $zipcode";
$recipient = "jcool5848@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
header('Location: http://www.jelaniclarke.com/Thank you page.html');
exit;
?>