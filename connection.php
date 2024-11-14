<?php
$host="localhost";
$Student_signup="root";
$pass="";
$db="courseregistration";
$conn=new mysqli($host,$Student_signup,$pass,$db);
if($conn->connect_error){
    echo "Failed to connect DB".$conn->connect_error;
}
?>