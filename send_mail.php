<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $subject = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_STRING);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

    // Validate inputs
    if (!$name || !$email || !$subject) {
        echo json_encode(['success' => false, 'error' => 'Invalid input.']);
        exit;
    }

    // Email settings
    $to = 'info@connecthr.co.za';
    $email_subject = "Contact Form: $subject";
    $email_body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send email
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'error' => 'Email could not be sent.']);
    }
}
?>