<?php
    $email = $_POST['email'];

    $dataMess = "Имя: ".$_POST['name']."\r\n";
    $dataMess .= "Тема: ".$_POST['subject']."\r\n";
    $dataMess .= "Email: ".$_POST['email']."\r\n";
    $dataMess .= "Сообщение: ".$_POST['message']."\r\n";



    $mailSubject = "=?utf-8?B?".base64_encode("Сообщение с сайта")."?=";
    $headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";

    $success = mail("business.diakina@gmail.com", $mailSubject, $dataMess, $headers);
    echo $success;

?>