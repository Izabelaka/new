<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Zbierz dane z formularza
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Adres e-mail, na który wiadomość ma zostać wysłana
    $to = "izabelaxkazana@gmail.com"; // Zastąp swoim adresem e-mail

    // Temat wiadomości
    $subject = "Wiadomość kontaktowa od " . $name;

    // Treść wiadomości
    $body = "Imię: $name\n";
    $body .= "E-mail: $email\n\n";
    $body .= "Wiadomość:\n$message";

    // Nagłówki wiadomości
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Wyślij wiadomość
    if (mail($to, $subject, $body, $headers)) {
        echo "Wiadomość została wysłana pomyślnie!";
    } else {
        echo "Wystąpił problem z wysłaniem wiadomości.";
    }
} else {
    echo "Nieprawidłowe żądanie.";
}
?>
