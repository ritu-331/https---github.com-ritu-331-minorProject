<?php
include 'connection.php';

if(isset($_POST['signUp'])){
    $firstName=$POST['fullname'];
    $email=$POST['emailID'];
    $password=$POST['password'];
    $password=md5($password);

    $checkEmail="SELECT * From Student_signup where email='$email'";
    $result=$conn->query($checkEmail);
    if($result->num_rows>0){
        echo "Email Address Already exist !";
    }
    else{
        $insertQuery="INSERT INTO Student_signup (firstName,email,password)
                       VALUE('$firstName,$email,$password)"
                 if($conn->query($insertQuery)==TRUE){
                    header("StudentSignUp.jsx");
                 }      
                 else{
                    echo "Error :".$conn->error;
                 }
    }
}

if(isset($POST['signIn'])){
    $email=$_POST['email'];
    $password=$POST['password'];
    $password=md5($password);

    $sql="SELECT * FROM Student_signup WHERE email='$email and password='$password'";
    $result=$conn->query($sql);
    if($result->num_rows>0){
        session_start();
        $row=$result->fetch_assoc();
        $SESSION['email']=$row['email'];
        header("Location:index.php");
        exit();
    }
    else{
        echo "Not Found, Incorrect Email or password";

    }
}
?>