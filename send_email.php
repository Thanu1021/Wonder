<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $mobile = htmlspecialchars(trim($_POST['mobile']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Email details
    $to = "admin@example.com"; // Replace with your admin email
    $subject = "New Contact Form Submission from Eagle Travels";
    $body = "Name: $name\nEmail: $email\nMobile: $mobile\n\nMessage:\n$message";
    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Thank you! Your message has been sent.');</script>";
    } else {
        echo "<script>alert('Sorry, something went wrong. Please try again later.');</script>";
    }
}
?>
