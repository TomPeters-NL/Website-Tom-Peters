<?php

$hasName = isset($_POST['name']);
$hasContact = isset($_POST['contact']);
$hasMessage = isset($_POST['message']);

if ($hasName === false || $hasContact === false || $hasMessage === false) {
    return 'Error: E-mail could not be sent due to missing form field(s).';
}