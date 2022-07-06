<?php

include 'PHPMailer\PHPMailer.php';
include 'PHPMailer\SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

/* Validation */

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    return 'Error: Request method not accepted.';
}

$hasName = isset($_POST['name']);
$hasContact = isset($_POST['contact']);
$hasMessage = isset($_POST['message']);

if ($hasName === false || $hasContact === false || $hasMessage === false) {
    return 'Error: E-mail could not be sent due to missing form field(s).';
}

/* Variables */

$name = $_POST['name'];
$contact = $_POST['contact'];
$message = $_POST['message'];

/* Plain Text Message */

$plainTextMessage = "You were sent a message by {$name}. They can be reached via {$contact}.

{$message}";

/* HTML Message */

$htmlTemplate = file_get_contents(dirname(__FILE__) . '/contact-email.html');
$htmlMessage = str_replace('{{ name }}', $name, $htmlTemplate);
$htmlMessage = str_replace('{{ contact }}', $contact, $htmlMessage);
$htmlMessage = str_replace('{{ message }}', $message, $htmlMessage);

/* E-mail */

$email = new PHPMailer();

$email->isSMTP();
$email->SMTPAuth = true;
$email->SMTPDebug = 2;

$email->Host = 'smtp.sendgrid.net';
$email->Port = 587;
$email->Username = 'apikey';
$email->Password = 'SENDGRID_API_KEY';

$email->setFrom('contact@tompeters.dev', 'Personal Contact Bot');
$email->addAddress('', 'Tom Peters');
$email->Subject = 'TomPeters.Dev - Contact Request';
$email->msgHTML($htmlMessage);
// $email->Body = $plainTextMessage;

$result = $email->send();
$result = true;
if ($result === false) {
    echo 'E-mail Error: ' . $email->ErrorInfo;
} else {
    echo 'The e-mail was sent successfully.';
}
