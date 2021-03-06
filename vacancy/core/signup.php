<?php
require_once 'config.php';

$regFirstName = trim($_POST['regFirstName']);
$regLastName = trim($_POST['regLastName']);
$name = trim($_POST['name']);
$type = trim($_POST['type']);
$active = trim($_POST['active']);

if ($firstName =='' OR $lastName=='' OR $name=='' OR $type=='' OR $active ==''){
    echo 2;
    die;
}

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO users (regFirstName, regLastName, name, type, active) VALUES ('".$regFirstName."', '".$regLastName."', '".$name."', '".$type."', '".$active."')";

if ($conn->query($sql) === TRUE) {
    echo 1;
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>