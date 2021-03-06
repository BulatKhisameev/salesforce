<?php
require_once 'config.php';

$firstName = trim($_POST['firstName']);
$lastName = trim($_POST['LastName']);
$email = trim($_POST['email']);
$phone = trim($_POST['phone']);
$sex = trim($_POST['sex']);

if ($firstName =='' OR $lastName=='' OR $email=='' OR $phone=='' OR $sex ==''){
    echo 2;
    die;
}

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO users (name, email, password, birthday, sex) VALUES ('".$firstName."', '".$email."', '".$lastName."', '".$phone."', '".$sex."')";

if ($conn->query($sql) === TRUE) {
    echo 1;
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>