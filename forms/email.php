<?php 
if(isset($_POST['submit'])){
    $to = "info@muchachotrading.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $message = $name . " wrote the following:" . "\n\n" . $_POST['message'];
    


    mail($to,$subject,$message,$headers);
    mail($from,$subject,$message,$headers); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you " . $name . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    // You cannot use header and echo together. It's one or the other.
    }
?>